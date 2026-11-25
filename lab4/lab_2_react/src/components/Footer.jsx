import { useEffect, useState } from 'react';
import { getSystemInfo, readStorage } from '../utils/systemInfo.js';
import ContactForm from './ContactForm.jsx';

function pretty(value) {
  try { return JSON.stringify(JSON.parse(value), null, 2); }
  catch { return value; }
}

export default function Footer() {
  const [storage, setStorage] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    async function save() {
      const info = await getSystemInfo();
      if (!active) return;
      try {
        localStorage.setItem('systemInfo', JSON.stringify(info));
        setStorage(readStorage());
      } catch {
        setError('Браузер не дозволив зберегти або прочитати localStorage.');
      }
    }
    save();
    return () => { active = false; };
  }, []);

  return (
    <footer id="contacts" className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-4 text-2xl font-bold">Контакти</h2>
      <p>Місто: Львів</p>
      <p className="break-words">Email: <a className="text-blue-700 hover:underline dark:text-blue-300" href="mailto:roman.yavchak.kb.2025@lpnu.ua">roman.yavchak.kb.2025@lpnu.ua</a></p>
      <p>GitHub: <a className="text-blue-700 hover:underline dark:text-blue-300" href="https://github.com/roman0yavchak0cry-pac/cybersecurity-python-labs" target="_blank" rel="noopener noreferrer">Профіль GitHub</a></p>
      <ContactForm />
      <section aria-labelledby="storage-title" className="my-5">
        <h3 id="storage-title" className="mb-3 text-lg font-semibold">Інформація у localStorage</h3>
        <p role="status">{error}</p>
        <dl className="space-y-4">
          {storage.map(([key, value]) => (
            <div key={key}>
              <dt className="mb-2 break-words font-semibold">{key}</dt>
              <dd><pre className="whitespace-pre-wrap rounded-lg bg-slate-100 p-3 font-mono text-xs [overflow-wrap:anywhere] dark:bg-slate-950">{pretty(value)}</pre></dd>
            </div>
          ))}
        </dl>
      </section>
      <p className="text-sm text-slate-600 dark:text-slate-300">© 2026 Роман Явчак</p>
    </footer>
  );
}
