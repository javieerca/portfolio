import React from "react";
import fotoAboutMe from "../assets/img/foto_about_me.jpg";

const AboutMe = () => {
    return (
        <>
            <section id="about_me" className="min-vh-100 py-5">
                <div className="container h-100 d-flex flex-column justify-content-center">
                    <h2 className="text-center mb-5 fs-1">Sobre mí.</h2>
                    <div className="row align-items-center g-4 pt-5 flex-grow-1">
                        <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
                            <img
                                src={fotoAboutMe}
                                alt="mi_foto"
                                className="img-fluid m-auto border rounded"
                                style={{ maxHeight: "500px" }}
                            />
                        </div>

                        <div className="col-12 col-md-7 fs-4 p-3 p-md-0 text-center text-md-start">
                            <p>
                                Soy un Desarrollador Junior especializado tanto en desarrollo web como en aplicaciones
                                multiplataforma.
                            </p>
                            <p>
                                Actualmente, mi objetivo es seguir desenvolviéndome en el desarrollo web para dar un
                                salto en mi carrera laboral.
                            </p>
                            <p>
                                Gracias a mi titulación como Tecnico Superior en Desarrollo de Aplicaciones
                                Multiplataforma y mi titulación en el bootcamp de Desarrollador Web Fullstack de
                                Neoland, tengo sólidos conocimientos en HTML, CSS, JavaScript, Bootstrap, Angular, entre
                                otras.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="mb-5" />
        </>
    );
};

export default AboutMe;
