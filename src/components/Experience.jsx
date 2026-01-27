import React from "react";

const Experience = () => {
    const experienceData = [
        {
            role: "Vendedor de informática en Media Markt Vallecas",
            date: "Noviembre 2024 - Octubre 2025",
            description: [
                "Venta de productos de telefonía e informática y su correspondiente venta complementaria de accesorios y servicios, aumentando el ticket medio.",
                "Conocer el producto y las necesidades del cliente para recomendar en consecuencia.",
                "Fui parte del Apple Excellence program desde Abril de 2025.",
            ],
        },
        {
            role: "Prácticas en Software Factory de Weber Solutions",
            date: "Noviembre 2024 - Octubre 2025",
            description: [
                "Pude formarme en el lenguaje C# para desarrollar mi propia Web API, una base de datos SQL y una aplicación Web aprendiendo y utlizando .NET y Blazor, además de generar la documentación y pruebas pertinentes.",
                "También pude aprender sobre el control de versiones y gestión de proyectos.",
                "Las herramientas que más utilice fueron Visual Studio, Postman, SQL Server y GIT.",
            ],
        },
    ];

    return (
        <section id="experiencia" className="py-5">
            <div className="container">
                <h2 className="text-center fs-1 mb-5">Mi experiencia.</h2>
                <div className="rounded px-3">
                    {experienceData.map((item, index) => (
                        <div key={index}>
                            <div
                                className="card mt-5 p-5 card_aumenta fondo_claro"
                                style={{
                                    marginTop: index === 0 ? "3rem" : "0",
                                    marginBottom: index === experienceData.length - 1 ? "3rem" : "0",
                                }}
                            >
                                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-baseline">
                                    <h3>{item.role}</h3>
                                    <h5 className={index === 1 ? "text-md-end" : ""}>{item.date}</h5>
                                </div>
                                <hr />
                                <div className="card-body fs-4">
                                    {item.description.map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < item.description.length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                            {index < experienceData.length - 1 && <hr className="my-4" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
