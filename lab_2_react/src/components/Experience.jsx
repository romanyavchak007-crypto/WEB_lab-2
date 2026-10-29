function Experience() {
  return (
    <section id="experience" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2 border-slate-100">
        Досвід роботи та практика
      </h2>
      <article className="p-4 bg-slate-50 rounded-lg border-l-4 border-blue-500">
        <h3 className="font-semibold text-lg text-slate-900">
          Практичні завдання та лабораторні роботи
        </h3>
        <p className="text-sm text-slate-500 font-medium my-1">
          <strong>Термін:</strong> 2025 — теперішній час
        </p>
        <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
          <li>Розробка валідної структури вебсторінок відповідно до W3C.</li>
          <li>Контроль версій коду за допомогою Git.</li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;