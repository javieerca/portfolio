import React from "react";
import TechStack from "./TechStack";
import UserIcon from "./icons/UserIcon";
import MailIcon from "./icons/MailIcon";
import TechIcon from "./TechIcon";

import fotoMarco from "../assets/img/foto_marco.png";
import javaLogo from "../assets/img/java.png";
import htmlLogo from "../assets/img/html-5.png";
import jsLogo from "../assets/img/js.png";
import reactLogo from "../assets/img/react.svg";
import androidLogo from "../assets/img/android.png";
import flutterLogo from "../assets/img/flutter.svg";
import sqlLogo from "../assets/img/servidor-sql.png";
import gitLogo from "../assets/img/GIT.png";

const Hero = () => {
    return (
        <section id="presentacion" className="pb-4 d-flex flex-column" style={{ minHeight: "calc(100vh - 90px)" }}>
            <div className="container h-100 d-flex flex-column justify-content-center flex-grow-1">
                <div className="row align-items-center justify-content-center flex-grow-1 pt-3 mt-3 pt-lg-5 mt-lg-5 gap-3 gap-lg-5">
                    <div className="col-12 col-lg-5 text-center">
                        <img className="img-fluid imagen_aumenta hero-img-custom" src={fotoMarco} alt="marco" />
                    </div>
                    <div className="col-12 col-lg-6 text-center text-lg-start letras_claras descripcion p-3 p-md-0">
                        <div className="d-flex flex-column align-items-center align-items-lg-start">
                            <h3 className="fs-1 ">¡Hola! Soy Javier Cortés</h3>
                            <h4 className="fs-1 mb-3">Desarrollador fullstack</h4>
                            <div className="d-flex flex-wrap gap-3 pt-4 justify-content-center justify-content-lg-start mb-3">
                                <TechIcon src={javaLogo} name="Java" />
                                <TechIcon src={htmlLogo} name="HTML5" />
                                <TechIcon src={jsLogo} name="JavaScript" />
                                <TechIcon src={reactLogo} name="React" />
                                <TechIcon src={androidLogo} name="Android" />
                                <TechIcon src={flutterLogo} name="Flutter" />
                                <TechIcon src={sqlLogo} name="SQL Server" />
                                <TechIcon src={gitLogo} name="Git" />
                            </div>
                            <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 mt-5">
                                <a
                                    onClick={() =>
                                        document.getElementById("about_me")?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="btn btn-neon rounded-pill text-decoration-none"
                                    style={{ cursor: "pointer" }}
                                >
                                    <UserIcon width={24} height={24} /> Conóceme
                                </a>
                                <a href="#contacto" className="btn btn-neon rounded-pill text-decoration-none">
                                    <MailIcon width={36} height={36} /> Contáctame
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100">
                <TechStack />
            </div>
        </section>
    );
};

export default Hero;
