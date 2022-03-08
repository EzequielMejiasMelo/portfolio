import React from "react";
import cards from './cardData';
import Card from "./Card";

const CardList = () => {
    return (
        <div className="works-cards content work mb-4">
            {cards.map((card) => (
                <Card card={card} />
            ))}
        </div>
    );
};

export default CardList;