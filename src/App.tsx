import About from "./content/About";
import Contact from "./content/Contact";
import Footer from "./footer/Footer";
import Hero from "./content/Hero";
import Project from "./content/Project";
import Skills from "./content/Skills";
import Navbar from "./nav/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;