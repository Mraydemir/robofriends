import React from "react";

const Card = (props) => {
    const { name, email, id} = props;
    return(
        <div className="bg-light-green dib pa3 ma3 grow bw2 br3">
            <img src={ `https://robohash.org/${id}?size=200x200`} alt="Robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;