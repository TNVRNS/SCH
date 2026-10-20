function Experience() {
    const projects = [
        "Development of Telegram bots",
        "Development of mobile applications",
        "Development of automation scripts",
        "Working with APIs and external services",
        "Identifying and analyzing software vulnerabilities",
        "Web application development",
        "Working with Git and GitHub",
    ];

    return (
        <section className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/70 sm:p-8">
            <h2 className="mb-5 border-b border-sky-100 pb-3 text-2xl font-bold text-sky-950">
                Programming Experience
            </h2>

            <article>
                <h3 className="mb-4 text-lg font-semibold text-sky-700">
                    Programming Projects
                </h3>

                <ul className="space-y-3">
                    {projects.map((project) => (
                        <li
                            key={project}
                            className="flex items-start gap-3 rounded-xl bg-sky-50/70 px-4 py-3 text-slate-700 ring-1 ring-inset ring-sky-100 transition duration-200 hover:bg-sky-100/80 hover:ring-sky-200"
                        >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                            <span>{project}</span>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
}

export default Experience;
