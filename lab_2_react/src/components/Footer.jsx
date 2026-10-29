function Footer() {
  return (
    <footer id="contacts" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-slate-700 font-medium">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2 border-slate-100">
        Контакти
      </h2>
      <div className="space-y-2 text-sm">
        <p><span className="font-semibold text-slate-900">Місто:</span> Львів</p>
        <p>
          <span className="font-semibold text-slate-900">Email:</span>{' '}
          <a href="mailto:roman.yavchak.kb.2025@lpnu.ua" className="text-blue-600 hover:underline">
            roman.yavchak.kb.2025@lpnu.ua
          </a>
        </p>
        <p>
          <span className="font-semibold text-slate-900">GitHub:</span>{' '}
          <a
            href="https://github.com/roman0yavchak0cry-pac/cybersecurity-python-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Профіль GitHub
          </a>
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
        <p>© 2026 Роман Явчак</p>
      </div>
    </footer>
  );
}

export default Footer;