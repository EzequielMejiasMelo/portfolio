import React from "react";

const Card = ({card}) => {
    return (
        <div className="card w-100 h-100">
            <img className="card-img-top image-card" alt="Screenshot of the application" src={card.img_path} ></img>
            <div className="card-body">
                <h3 className="card-title text-white">{card.title}</h3>
                <p className="card-text text-white">{card.description}</p>
                <a href={card.github} target="_blank" className="btn btn-primary" rel="noreferrer">Github</a>
                <a href={card.site} target="_blank" className="btn btn-success" rel="noreferrer">App</a>
            </div>
        </div>
    )
};

export default Card;