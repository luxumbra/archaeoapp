import React from 'react';
import Card from '../layout/Card';

const Site = ({id, sitename, location, description}) => {

    return (
        <Card>
            <div className="site">
                <img src={`https://picsum.photos/300/200?image=105${id}`} alt={sitename} />
                <h2>{sitename}</h2>
                <span>{location}</span>
                <p>{description}</p>
            </div>
        </Card>
    );
}

export default Site;