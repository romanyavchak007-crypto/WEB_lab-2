import { useEffect, useState } from 'react';
import { VARIANT } from '../config.js';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('Завантаження відгуків...');

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error('Некоректна відповідь сервера');
        if (!controller.signal.aborted) {
          setReviews(data);
          setStatus(data.length ? '' : 'Відгуків поки немає.');
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          setStatus('Не вдалося завантажити відгуки. Перевірте інтернет і оновіть сторінку.');
        }
      }
    }
    load();
    return () => controller.abort();
  }, []);

  return (
    <section id="reviews" className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-2 text-2xl font-bold">Відгуки роботодавців</h2>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">Навчальні коментарі з JSONPlaceholder</p>
      <p role="status">{status}</p>
      <div className="space-y-5">
        {reviews.map((review) => (
          <article key={review.id} className="break-words border-l-4 border-blue-500 pl-4">
            <h3 className="mb-1 font-semibold">{review.name}</h3>
            <p className="mb-2 text-sm text-slate-600 dark:text-slate-300">{review.email}</p>
            <p className="whitespace-pre-line">{review.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
