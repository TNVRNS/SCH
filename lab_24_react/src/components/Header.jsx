function Header() {
    return (
        <header className="relative overflow-hidden rounded-2xl border border-sky-300 bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-400 p-6 text-white shadow-lg shadow-sky-200/60 sm:p-8">
            <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 right-24 h-40 w-40 rounded-full bg-cyan-200/20 blur-2xl" />

            <div className="relative">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">
                    Portfolio
                </p>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Oleksandr
                </h1>

                <p className="mt-3 text-lg font-medium text-sky-50">
                    Student <span className="mx-2 text-sky-200">|</span> Cybersecurity
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                        href="mailto:olexolexsav@gmail.com"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/70"
                    >
                        <span className="text-sky-100">Email</span>
                        <span>olexolexsav@gmail.com</span>
                    </a>

                    <a
                        href="https://github.com/TNVRNS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/70"
                    >
                        <span className="text-sky-100">GitHub</span>
                        <span>GitHub Profile ↗</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
