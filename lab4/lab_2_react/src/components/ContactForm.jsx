import { useEffect, useRef, useState } from 'react';
import { FORMSPREE_ENDPOINT } from '../config.js';

const CLOSED_KEY = 'lab4-react-contact-closed';
function wasClosed() {
  try { return sessionStorage.getItem(CLOSED_KEY) === 'true'; }
  catch { return false; }
}
function rememberClosed() {
  try { sessionStorage.setItem(CLOSED_KEY, 'true'); }
  catch { /* Сховище може бути вимкнене у браузері. */ }
}

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const dialogRef = useRef(null);
  const fieldClass = 'mb-4 w-full rounded-lg border border-slate-300 bg-white p-2.5 dark:border-slate-600 dark:bg-slate-950';

  useEffect(() => {
    if (wasClosed()) return;
    const timer = setTimeout(() => {
      if (!wasClosed()) setIsOpen(true);
    }, 60_000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && !dialogRef.current.open) dialogRef.current.showModal();
  }, [isOpen]);

  function closeModal() {
    rememberClosed();
    setIsOpen(false);
  }
  function handleSubmit(event) {
    if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(FORMSPREE_ENDPOINT)) {
      event.preventDefault();
      setError('Форму ще не підключено до пошти. Потрібно вказати особистий endpoint Formspree.');
      return;
    }
    rememberClosed();
  }

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}
        className="my-4 rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-700 hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-slate-800">
        Написати повідомлення
      </button>
      {isOpen && (
        <dialog ref={dialogRef} aria-labelledby="modal-title" onClose={closeModal}
          className="fixed inset-0 m-auto max-h-[90vh] w-[calc(100%_-_24px)] max-w-lg overflow-y-auto rounded-xl border border-slate-300 bg-white p-6 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 id="modal-title" className="text-xl font-bold">Зворотний зв'язок</h2>
            <button type="button" onClick={closeModal} className="rounded-lg border border-slate-400 px-3 py-2">Закрити</button>
          </div>
          <form action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit}>
            <label htmlFor="name" className="mb-1 block">Ім'я</label>
            <input id="name" name="name" type="text" autoComplete="name" className={fieldClass} required />
            <label htmlFor="email" className="mb-1 block">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} required />
            <label htmlFor="phone" className="mb-1 block">Номер телефону</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} required />
            <label htmlFor="message" className="mb-1 block">Повідомлення</label>
            <textarea id="message" name="message" rows="4" className={fieldClass} required />
            <p role="alert" className="mb-3 text-sm text-blue-700 dark:text-blue-300">{error}</p>
            <button type="submit" className="rounded-lg bg-blue-700 px-4 py-2.5 font-semibold text-white hover:bg-blue-800">Надіслати</button>
          </form>
        </dialog>
      )}
    </>
  );
}
