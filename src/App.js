import { Hero } from "./components/organisms/Hero";
import "./App.css";

function App() {
  return (
    <div>
      <header></header>
      <main className="min-h-screen w-screen overflow-x-hidden">
        <Hero />
      </main>
    </div>
  );
}

export default App;
