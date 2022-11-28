import React from "react";

const Card = () => {
    return(
        <div className="bg-light-green dib pa3 ma3 grow bw2 br3">
            <img src="https://robohash.org/test01?size=200x200" alt="Robot" />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.done@gmail.com</p>
            </div>
        </div>
    );
};

export default Card;