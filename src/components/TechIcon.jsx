import React from "react";

const TechIcon = ({ src, name }) => {
    return (
        <div className="tech-icon-container position-relative d-inline-block">
            <img className="imagen_aumenta lo_que_se img-fluid" src={src} alt={name} />
            <span className="tech-tooltip">{name}</span>
        </div>
    );
};

export default TechIcon;
