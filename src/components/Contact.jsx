import React from "react";
import MailIcon from "./icons/MailIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";

const Contact = () => {
    return (
        <section id="contacto" className=" container my-5 py-5 letras_claras">
            <h2 className="text-center mb-5 fs-1 fw-bold">
                Contáctame<span style={{ color: "#42d3c4" }}>.</span>
            </h2>

            <div className="row justify-content-center">
                <div className="col-12 col-md-8 text-center mb-5">
                    <p className="fs-4">
                        ¿Tienes alguna pregunta o propuesta? ¡No dudes en escribirme!
                        <br />
                        Estoy disponible para nuevas oportunidades y colaboraciones.
                    </p>
                </div>
            </div>

            <div className="row justify-content-center gap-4">
                {/* Email */}
                <div className="col-auto">
                    <a
                        href="mailto:javiercortesalbin@gmail.com"
                        className="btn btn-neon rounded p-4 d-flex flex-column align-items-center gap-3"
                        style={{ minWidth: "160px" }}
                    >
                        <MailIcon width={48} height={48} />
                        <span className="fs-5">Email</span>
                    </a>
                </div>

                {/* LinkedIn */}
                <div className="col-auto">
                    <a
                        href="https://www.linkedin.com/in/javier-cortes-albin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-neon rounded p-4 d-flex flex-column align-items-center gap-3"
                        style={{ minWidth: "160px" }}
                    >
                        <LinkedInIcon width={48} height={48} />
                        <span className="fs-5">LinkedIn</span>
                    </a>
                </div>

                {/* GitHub */}
                <div className="col-auto">
                    <a
                        href="https://github.com/javieerca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-neon rounded p-4 d-flex flex-column align-items-center gap-3"
                        style={{ minWidth: "160px" }}
                    >
                        <GitHubIcon width={48} height={48} />
                        <span className="fs-5">GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
