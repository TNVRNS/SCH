import { useEffect, useState } from 'react';

function Footer() {
    const [systemInfo, setSystemInfo] = useState({ userAgent: '', platform: '', language: '', screen: '' });

    useEffect(() => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform || 'Невідомо',
            language: navigator.language || 'Невідомо',
            screen: `${window.screen.width} × ${window.screen.height}`,
        };
        localStorage.setItem('systemInfo', JSON.stringify(info));
        const savedInfo = localStorage.getItem('systemInfo');
        if (savedInfo) setSystemInfo(JSON.parse(savedInfo));
    }, []);

    return (
        <footer className="content-card mt-8 rounded-2xl border px-6 py-5 text-center">
            <p className="mb-4 text-sm">
                <span className="font-semibold">© 2027 Oleksandr.</span>{' '}
                All rights reserved.
            </p>
            <div className="system-info text-left text-xs sm:text-sm">
                <h2 className="mb-2 font-semibold">System Information</h2>
                <dl className="grid gap-2 sm:grid-cols-2">
                    <div><dt className="font-semibold">Platform</dt><dd>{systemInfo.platform || 'Завантаження…'}</dd></div>
                    <div><dt className="font-semibold">Browser language</dt><dd>{systemInfo.language || 'Завантаження…'}</dd></div>
                    <div><dt className="font-semibold">Screen resolution</dt><dd>{systemInfo.screen || 'Завантаження…'}</dd></div>
                    <div className="sm:col-span-2"><dt className="font-semibold">User agent</dt><dd className="break-words">{systemInfo.userAgent || 'Завантаження…'}</dd></div>
                </dl>
            </div>
        </footer>
    );
}

export default Footer;
