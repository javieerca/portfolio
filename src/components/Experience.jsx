import React from "react";

const Experience = () => {
    const experienceData = [
        {
            role: "Vendedor de informática en Media Markt Vallecas",
            date: "Noviembre 2024 - Octubre 2025",
            description: [
                "Asesoramiento técnico especializado en informática y telefonía, logrando un aumento significativo en la venta cruzada de servicios y accesorios.",
                "Seleccionado para el 'Apple Excellence Program' desde abril de 2025, especializándome en el ecosistema de la marca.",
            ],
            // Puedes dejar techStack vacío o null si no quieres chips aquí
            techStack: ["Ventas", "Atención al Cliente", "Hardware", "Software", "Apple Ecosystem"],
        },
        {
            role: "Desarrollador Web en Prácticas | Weber Solutions",
            date: "Marzo 2024 - Junio 2024", // He corregido las fechas para que no se solapen
            description: [
                "Desarrollo Fullstack .NET: Diseño e implementación de una Web API RESTful completa utilizando C# y .NET, integrándola con una interfaz de usuario moderna en Blazor.",
                "Gestión de Datos y Calidad: Modelado y administración de bases de datos en SQL Server y ejecución de pruebas integrales (Testing).",
                "Participación en el ciclo de vida del software bajo estándares profesionales, utilizando Git para el control de versiones.",
            ],
            techStack: ["Visual Studio", "C# (.NET)", "Blazor", "SQL Server", "Postman", "Git"],
        },
    ];

    return (
        <section id="experiencia" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5 fs-1 fw-bold">
                    Mi experiencia<span style={{ color: "#42d3c4" }}>.</span>
                </h2>
                <div className="rounded px-3">
                    {experienceData.map((item, index) => (
                        <div key={index}>
                            <div
                                className="card mb-4 p-4 card_aumenta fondo_claro"
                                style={{
                                    marginTop: index === 0 ? "1rem" : "0",
                                }}
                            >
                                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
                                    <h3 className="fw-bold fs-4 m-0">{item.role}</h3>
                                    <h5 className="text-light opacity-75 fs-6 m-0 mt-2 mt-md-0">{item.date}</h5>
                                </div>
                                <hr className="opacity-25 my-3" />
                                <div className="card-body fs-5">
                                    <ul className="m-0 ps-3">
                                        {item.description.map((line, i) => (
                                            <li key={i} className="mb-2">
                                                {line}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Renderizado condicional de los CHIPS */}
                                    {item.techStack && (
                                        <div className="d-flex flex-wrap mt-3 ps-3">
                                            {item.techStack.map((tech, tIndex) => (
                                                <span
                                                    key={tIndex}
                                                    className="badge border border-secondary text-light fw-normal p-2 me-2 mb-2"
                                                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
