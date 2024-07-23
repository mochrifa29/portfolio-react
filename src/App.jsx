import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-all duration-300">
      <Header />
      <Hero />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
