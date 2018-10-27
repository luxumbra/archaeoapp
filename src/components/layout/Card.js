import React from 'react';
import './Card.scss';

const Card = (props) => {
    // console.log(props);

    return (
        <div className={props.classes}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
        );

}

export default Card;