import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Reviews from './components/Reviews.jsx';
import Footer from './components/Footer.jsx';

export function themeByTime(date = new Date()) {
  const hour = date.getHours();
  return hour >= 7 && hour < 21 ? 'light' : 'dark';
}

export default function App() {
  const [theme, setTheme] = useState(themeByTime);

  useEffect(() => {
    let timeTheme = themeByTime();
    setTheme(timeTheme);
    const interval = setInterval(() => {
      const next = themeByTime();
      if (next !== timeTheme) { timeTheme = next; setTheme(next); }
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen px-3 py-6 font-sans leading-relaxed sm:px-6 sm:py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <Header theme={theme} onToggle={() => setTheme((previous) => previous === 'dark' ? 'light' : 'dark')} />
        <main className="space-y-6">
          <section id="about" className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-4 text-2xl font-bold">Про мене</h2>
            <p>Студент 2-го курсу кафедри захисту інформації. Вивчаю основи веброзробки,
              семантичну розмітку HTML5, роботу з Git та базовий стек сучасного вебу.</p>
          </section>
          <section id="skills" className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-4 text-2xl font-bold">Технічні навички</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {['HTML5', 'Git / GitHub', 'Python, SQL', 'Основи мережевих протоколів та Linux'].map((skill) => (
                <li key={skill} className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">{skill}</li>
              ))}
            </ul>
          </section>
          <Experience />
          <Education />
          <Reviews />
        </main>
        <Footer />
      </div>
    </div>
  );
}
