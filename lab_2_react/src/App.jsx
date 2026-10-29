import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        <main className="space-y-6">
          <section id="about" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2 border-slate-100">
              Про мене
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              Студент 2-го курсу кафедри захисту інформації. Вивчаю основи веброзробки, семантичну розмітку HTML5, роботу з Git та базовий стек сучасного вебу.
            </p>
          </section>

          <section id="skills" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2 border-slate-100">
              Технічні навички
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
              <li className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-slate-800 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                HTML5
              </li>
              <li className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-slate-800 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Git / GitHub
              </li>
              <li className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-slate-800 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Python, SQL
              </li>
              <li className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-slate-800 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Основи мережевих протоколів та Linux
              </li>
            </ul>
          </section>

          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;