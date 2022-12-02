import React from 'react';
import Card from './Card.js';

const Cardlist = ({ robots }) => {
    const cardComponent = robots.map( (user,i) => {
        return (
            <Card id={robots[i].id} key={robots[i].id} name={robots[i].name} email={robots[i].email} />
            )
    }
    )
    return(
        <div>
           {cardComponent}
        </div>
    )
};

export default Cardlist;