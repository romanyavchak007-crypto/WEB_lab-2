function Header() {
  return (
    <header className="flex flex-col items-center bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-xl mb-6">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-blue-400">
        Роман Явчак
      </h1>
      <p className="text-center text-slate-300 text-sm md:text-base font-medium mb-4">
        Спеціальність: Кібербезпека та захист інформації / Початківець у веброзробці
      </p>
      <nav>
        <ul className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-300">
          <li><a href="#about" className="hover:text-blue-400 transition-colors">Про мене</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition-colors">Навички</a></li>
          <li><a href="#experience" className="hover:text-blue-400 transition-colors">Досвід</a></li>
          <li><a href="#education" className="hover:text-blue-400 transition-colors">Освіта</a></li>
          <li><a href="#contacts" className="hover:text-blue-400 transition-colors">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;