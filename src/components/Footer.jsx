import React from "react";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";

const Footer = () => {
    return (
        <footer className="footer py-4 text-center text-secondary" style={{ backgroundColor: "#000000" }}>
            <div className="container">
                <div className="d-flex flex-column align-items-center gap-3">
                    {/* Social Icons (Mini) */}
                    <div className="d-flex gap-3 mb-2">
                        <a
                            href="https://www.linkedin.com/in/javier-cortes-albin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary text-decoration-none hover-cyan transition"
                        >
                            <LinkedInIcon width={20} height={20} />
                        </a>
                        <a
                            href="https://github.com/javieerca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary text-decoration-none hover-cyan transition"
                        >
                            <GitHubIcon width={20} height={20} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="mb-0 small">
                        &copy; {new Date().getFullYear()} Javier Cortés. Todos los derechos reservados.
                    </p>

                    {/* Tech Stack Badge */}
                    <p className="mb-0 small opacity-75">
                        Hecho con <span className="text-info">React</span> &{" "}
                        <span className="text-info">Bootstrap</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
