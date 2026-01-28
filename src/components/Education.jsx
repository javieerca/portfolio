import React from "react";

const Education = () => {
    const academicData = [
        {
            title: "Bootcamp de Desarrollo Web Fullstack",
            place: "Neoland,\n2025",
        },
        {
            title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
            place: "IES Tierno Galvan,\n2022-2024",
        },
        {
            title: "Bachillerato de Ciencias",
            place: "IES Ciudad de los Angeles,\n2020-2022",
        },
        {
            title: "Inglés",
            place: "Nivel B2",
        },
    ];

    const skillsData = [
        { name: "Java", level: "Avanzado", img: "/portfolio/assets/img/javaColor.png" },
        { name: "HTML y CSS", level: "Avanzado", img: "/portfolio/assets/img/htmlColor.png" },
        { name: "Kotlin", level: "Avanzado", img: "/portfolio/assets/img/androidColor1.png" },
        { name: "JavaScript", level: "Avanzado", img: "/portfolio/assets/img/jsColor.png" },
        { name: "Node.js", level: "Avanzado", img: "/portfolio/assets/img/nodejsColor.png" },
        { name: "React", level: "Medio", img: "/portfolio/assets/img/reactColor.png" },
        { name: "Angular", level: "Básico", img: "/portfolio/assets/img/angularColor.png" },
        { name: "C# (.NET)", level: "Avanzado", img: "/portfolio/assets/img/c.png" },
        { name: "Flutter", level: "Medio", img: "/portfolio/assets/img/flutterColor.png" },
        { name: "Git", level: "Avanzado", img: "/portfolio/assets/img/gitColor.png" },
        { name: "SQL", level: "Medio", img: "/portfolio/assets/img/sqlColor.png" },
        { name: "MongoDB", level: "Medio", img: "/portfolio/assets/img/mongoColor.png" },
    ];

    return (
        <section id="formacion" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5 fs-1 fw-bold">
                    Mi formación<span style={{ color: "#42d3c4" }}>.</span>
                </h2>
                <div className="row g-5">
                    {/* Formación académica */}
                    <div className="col-12 col-lg-6">
                        <h3 className="text-center mb-4 fs-2 fw-semibold">Formación académica</h3>
                        <div className="d-flex flex-column gap-3">
                            {academicData.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-4 border border-secondary rounded d-flex flex-column justify-content-center"
                                    style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                                >
                                    <h4 className="fs-4 fw-bold mb-2 text-light">
                                        {item.title.split("\n").map((line, i) => (
                                            <span key={i} className="d-block">
                                                {line}
                                            </span>
                                        ))}
                                    </h4>
                                    <p className="mb-0 text-light fs-5">{item.place}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Habilidades técnicas */}
                    <div className="col-12 col-lg-6">
                        <h3 className="text-center mb-4 fs-2 fw-semibold">Habilidades técnicas</h3>
                        <div className="row g-3">
                            {skillsData.map((skill, index) => (
                                <div key={index} className="col-12 col-md-6">
                                    <div
                                        className="d-flex align-items-center p-3 border border-secondary rounded h-100"
                                        style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                                    >
                                        <img
                                            src={skill.img}
                                            alt={skill.name.toLowerCase()}
                                            className="img-fluid me-3"
                                            style={{ maxHeight: "40px", maxWidth: "40px", objectFit: "contain" }}
                                        />
                                        <div>
                                            <h5 className="mb-0 fs-5 fw-bold text-nowrap">{skill.name}</h5>
                                            <small className="text-light">{skill.level}</small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
