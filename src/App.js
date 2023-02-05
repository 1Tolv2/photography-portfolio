import "./App.css";
import About from "./components/organisms/About";
import Contact from "./components/organisms/Contact";
import Hero from "./components/organisms/Hero";
import Projects from "./components/organisms/Projects";

function App() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
