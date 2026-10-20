import { useEffect, useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function getTimeBasedTheme() {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? 'light' : 'dark';
}

function App() {
    const [theme, setTheme] = useState(getTimeBasedTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    function toggleTheme() {
        setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className="app-shell min-h-screen px-4 py-6 sm:px-6 lg:px-8">
            <main className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                <div className="flex justify-end">
                    <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label="Перемкнути тему">
                        {theme === 'light' ? '☾ Темна тема' : '☀ Світла тема'}
                    </button>
                </div>
                <Header />
                <Education />
                <Experience />
                <Reviews />
                <Footer />
            </main>
            <ContactForm />
        </div>
    );
}

export default App;
