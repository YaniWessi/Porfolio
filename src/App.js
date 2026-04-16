import "./App.css";
import FrontPage from "./components/FrontPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <FrontPage />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
