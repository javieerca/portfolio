import React from "react";

const AboutMe = () => {
    return (
        <>
            <section id="about_me" className="pb-5 min-vh-100 d-flex align-items-center">
                <div className="container">
                    <h2 className="text-center mb-5 fs-1 fw-bold">
                        Sobre mí<span style={{ color: "#42d3c4" }}>.</span>
                    </h2>
                    <div className="row align-items-center g-5">
                        <div className="col-12 col-lg-5 text-center">
                            <div className="position-relative d-inline-block">
                                <img
                                    src="/portfolio/assets/img/foto_about_me.jpg"
                                    alt="mi_foto"
                                    className="img-fluid border rounded shadow-lg about-me-img"
                                    style={{ borderColor: "#42d3c4" }}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-lg-7 fs-5 text-center text-lg-start">
                            <p className="mb-4">
                                Soy un{" "}
                                <span style={{ color: "#42d3c4", fontWeight: "bold" }}>
                                    Desarrollador Fullstack Junior
                                </span>{" "}
                                con doble enfoque en
                                <span className="text-light fw-semibold"> aplicaciones multiplataforma</span> y
                                <span className="text-light fw-semibold"> desarrollo web</span>.
                            </p>
                            <p className="mb-4">
                                Mi formación como Técnico Superior{" "}
                                <span className="text-light fw-semibold"> (DAM)</span> y mi paso por el bootcamp de
                                <span className="text-light fw-semibold"> Neoland</span> me han permitido dominar el
                                stack <span className="text-light fw-semibold"> MERN</span> y arquitecturas de
                                <span className="text-light fw-semibold"> microservicios</span>.
                            </p>
                            <p className="mb-4">
                                Actualmente, estoy expandiendo mi perfil hacia la Inteligencia Artificial aplicada
                                <span className="text-light fw-semibold"> (Azure AI)</span> y la gestión ágil de
                                proyectos{" "}
                                <span className="text-light fw-semibold">
                                    (PMI Project Management Ready™ Certification)
                                </span>
                                . Me apasiona escribir código limpio, documentado y escalable que aporte soluciones
                                reales y eficientes a los demás.
                            </p>
                            <p className="mb-4">
                                Este es el<span className="text-light fw-semibold"> stack tecnológico</span> con el que
                                trabajo:
                            </p>
                            <ul className="list-inline mt-3">
                                {[
                                    "HTML/CSS",
                                    "JavaScript",
                                    "Bootstrap",
                                    "React",
                                    "Angular",
                                    "Node.js",
                                    "Kotlin",
                                    "Flutter",
                                    "Java",
                                    "MongoDB",
                                    "SQL Server",
                                    "Git",
                                ].map((tech, index) => (
                                    <li
                                        key={index}
                                        className="list-inline-item badge bg-dark border border-secondary text-light p-2 me-2 mb-2 fw-normal"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="mb-3" />
        </>
    );
};

export default AboutMe;
