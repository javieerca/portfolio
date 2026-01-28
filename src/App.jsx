import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div className="letras_claras d-flex flex-column min-vh-100">
            {/* Sección Principal */}
            <Navbar />
            <div id="principal" className="min-vh-100 d-flex flex-column justify-content-between color-fondo">
                <Hero />
            </div>

            {/* Sección Secundaria */}
            <div className="color_fondo_secundario">
                <AboutMe />
                <Experience />
                <hr className="mb-5" />
                <Education />
                <hr className="mb-5" />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
