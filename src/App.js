import "./App.css";
import About from "./components/organisms/About";
import Hero from "./components/organisms/Hero";
import Projects from "./components/organisms/Projects";

function App() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
