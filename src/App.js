import "./App.css";
import { Helmet } from "react-helmet";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sofia Johnsson</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
