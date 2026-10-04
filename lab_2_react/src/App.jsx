import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="about">
          <h2>Про мене</h2>
          <p>
            Студент 2-го курсу кафедри захисту інформації. Вивчаю основи веброзробки, 
            семантичну розмітку HTML5, роботу з Git та базовий стек сучасного вебу.
          </p>
        </section>
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;