import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
        <div className="card shadow">
            <div className="card-body">
                {props.children}
            </div>
        </div>
        );

}

export default Card;