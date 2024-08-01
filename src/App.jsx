import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallary from "./components/Gallary";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Gallary />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
