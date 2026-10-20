import { useEffect, useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgaobzgb';
const SESSION_KEY = 'contactModalDismissed';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem(SESSION_KEY) === 'true') return undefined;
        const timer = window.setTimeout(() => setIsOpen(true), 60000);
        return () => window.clearTimeout(timer);
    }, []);

    function closeModal() {
        setIsOpen(false);
        sessionStorage.setItem(SESSION_KEY, 'true');
    }

    useEffect(() => {
        if (!isOpen) return undefined;
        function handleKeyDown(event) {
            if (event.key === 'Escape') closeModal();
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
            <section className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="contact-title">
                <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                        <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-sky-600">Get in touch</p>
                        <h2 id="contact-title" className="text-2xl font-bold">Contact form</h2>
                    </div>
                    <button type="button" onClick={closeModal} className="secondary-button" aria-label="Закрити">✕</button>
                </div>
                <form action={FORMSPREE_ENDPOINT} method="POST" className="grid gap-4">
                    <label className="form-label">Ім’я
                        <input className="form-input" name="name" type="text" autoComplete="name" required />
                    </label>
                    <label className="form-label">Email
                        <input className="form-input" name="email" type="email" autoComplete="email" required />
                    </label>
                    <label className="form-label">Номер телефону
                        <input className="form-input" name="phone" type="tel" autoComplete="tel" />
                    </label>
                    <label className="form-label">Повідомлення
                        <textarea className="form-input min-h-28 resize-y" name="message" rows="4" required />
                    </label>
                    <div className="flex flex-wrap justify-end gap-3">
                        <button type="button" onClick={closeModal} className="secondary-button">Закрити</button>
                        <button type="submit" className="primary-button">Надіслати</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default ContactForm;
