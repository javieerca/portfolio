import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: "principal", name: "home" }, // Hero section ID
                { id: "about_me", name: "about" },
                { id: "experiencia", name: "experience" },
                { id: "formacion", name: "education" },
            ];

            // Default to 'home' if at the very top
            if (window.scrollY < 100) {
                setActiveSection("home");
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if the top of the section is near the viewing area (e.g., top 1/3 of viewport)
                    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                        setActiveSection(section.name);
                        break;
                    }
                    // Or if the section covers the majority of the view (for long sections)
                    if (rect.top < 0 && rect.bottom > window.innerHeight / 2) {
                        setActiveSection(section.name);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLinkClass = (sectionName) => {
        return `nav-link ${activeSection === sectionName ? "active-link" : ""}`;
    };

    const scrollToSection = (id) => {
        if (id === "principal") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar navbar-expand-lg nav-gradient nav-size py-3 fixed-top">
            <div className="container-fluid px-5">
                <a
                    className="navbar-brand dev_Jav fs-2"
                    onClick={() => scrollToSection("principal")}
                    style={{ cursor: "pointer" }}
                >
                    Dev \ Javier Cortés
                </a>

                <button
                    className="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto border rounded-pill fondo_claro align-items-center">
                        <li className="nav-item navbar-item-hover">
                            <a
                                className={getLinkClass("home")}
                                onClick={() => scrollToSection("principal")}
                                style={{ cursor: "pointer" }}
                            >
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item navbar-item-hover">
                            <a
                                className={`${getLinkClass("about")} text-nowrap`}
                                onClick={() => scrollToSection("about_me")}
                                style={{ cursor: "pointer" }}
                            >
                                Sobre mí
                            </a>
                        </li>
                        <li className="nav-item navbar-item-hover">
                            <a
                                className={getLinkClass("experience")}
                                onClick={() => scrollToSection("experiencia")}
                                style={{ cursor: "pointer" }}
                            >
                                Experiencia
                            </a>
                        </li>
                        <li className="nav-item navbar-item-hover">
                            <a
                                className={getLinkClass("education")}
                                onClick={() => scrollToSection("formacion")}
                                style={{ cursor: "pointer" }}
                            >
                                Formación
                            </a>
                        </li>
                        <li className="nav-item navbar-item-hover">
                            <a className="nav-link" href="#">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
