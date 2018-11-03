import React from 'react';
import './Card.scss';

const Card = (props) => {
    // console.log(props);

    return (
        <div className={props.classes}>
            {props.children}
        </div>
        );

}

export default Card;