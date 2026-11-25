export default function Experience() {
  return (
    <section id="experience" className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-4 text-2xl font-bold">Досвід роботи та практика</h2>
      <article className="border-l-4 border-blue-500 pl-4">
        <h3 className="mb-2 font-semibold">Практичні завдання та лабораторні роботи</h3>
        <p className="mb-2 text-sm text-slate-600 dark:text-slate-300">2025 - теперішній час</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Розробка валідної структури вебсторінок відповідно до W3C.</li>
          <li>Контроль версій коду за допомогою Git.</li>
        </ul>
      </article>
    </section>
  );
}
