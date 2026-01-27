import React from "react";

const Education = () => {
    const academicData = [
        {
            title: "Bootcamp desarrollo web\nfullstack",
            place: "Neoland,\n2025",
        },
        {
            title: "Tecnico Superior en Desarrollo de Aplicaciones Multiplataforma",
            place: "IES Tierno Galvan,\n2022-2024",
        },
        {
            title: "Bachillerato de ciencias",
            place: "IES Ciudad de los Angeles,\n2020-2022",
        },
        {
            title: "Inglés",
            place: "Nivel B1",
        },
    ];

    const skillsData = [
        { name: "Java", level: "Avanzado", img: "/assets/img/java.png" },
        { name: "HTML y CSS", level: "Avanzado", img: "/assets/img/htmlColor.png" },
        { name: "SQL", level: "Medio", img: "/assets/img/sqlColor.png" },
        { name: "Kotlin", level: "Avanzado", img: "/assets/img/androidColor.png" },
        { name: "JavaScript", level: "Avanzado", img: "/assets/img/jsColor.png" },
        { name: "C# (.NET)", level: "Avanzado", img: "/assets/img/c.png" },
    ];

    return (
        <>
            <section id="formacion" className="">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4">Mi formación.</h2>
                    <div className="row">
                        {/* Formación académica */}
                        <div className="col-12 col-lg-6 my-5">
                            <div className="border rounded p-4 mb-4 h-100">
                                <h3 className="text-center fs-2">Formación académica</h3>
                                <hr className="pb-2" />

                                {academicData.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                                            <h4 className="fs-3 mb-2 mb-md-0 me-3">
                                                {item.title.split("\n").map((line, i) => (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        {i < item.title.split("\n").length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}
                                            </h4>
                                            <div className="d-flex align-items-center">
                                                <h5 className="text-md-end mb-0">
                                                    {item.place.split("\n").map((line, i) => (
                                                        <React.Fragment key={i}>
                                                            {line}
                                                            {i < item.place.split("\n").length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}
                                                </h5>
                                            </div>
                                        </div>
                                        <hr />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Habilidades */}
                        <div className="col-12 col-lg-6 my-5">
                            <div className="border rounded p-4 mb-4 h-100">
                                <h3 className="fs-2 text-center">Habilidades técnicas</h3>
                                <hr className="pb-2" />

                                {skillsData.map((skill, index) => (
                                    <React.Fragment key={index}>
                                        <div className="d-flex justify-content-between align-items-center align-items-md-center">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={skill.img}
                                                    alt={skill.name.toLowerCase()}
                                                    className="lo_que_se imagen_aumenta img-fluid"
                                                />
                                                <h4 className="mx-4 fs-3 mb-0 text-nowrap">{skill.name}</h4>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <h5 className="mb-0">{skill.level}</h5>
                                            </div>
                                        </div>
                                        <hr />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    );
};

export default Education;
