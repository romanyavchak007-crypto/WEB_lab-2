export default function Header({ theme, onToggle }) {
  return (
    <header className="rounded-2xl bg-slate-900 p-6 text-center text-white shadow-lg md:p-8">
      <h1 className="mb-2 text-3xl font-extrabold text-blue-300 md:text-4xl">Роман Явчак</h1>
      <p className="mb-5 text-slate-300">Кібербезпека та захист інформації / Початківець у веброзробці</p>
      <nav aria-label="Основна навігація" className="mb-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium">
        <a className="hover:text-blue-300" href="#about">Про мене</a>
        <a className="hover:text-blue-300" href="#skills">Навички</a>
        <a className="hover:text-blue-300" href="#experience">Досвід</a>
        <a className="hover:text-blue-300" href="#education">Освіта</a>
        <a className="hover:text-blue-300" href="#reviews">Відгуки</a>
        <a className="hover:text-blue-300" href="#contacts">Контакти</a>
      </nav>
      <button type="button" onClick={onToggle} aria-pressed={theme === 'dark'}
        className="rounded-lg border border-slate-500 px-4 py-2 hover:border-blue-300">
        {theme === 'dark' ? 'Увімкнути денну тему' : 'Увімкнути нічну тему'}
      </button>
    </header>
  );
}
