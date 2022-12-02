import React from "react";


const Searchbox= ( { searchChange }) => {
    return(
        <div className='pa2'>
            <input className='pa3 ba br3 b--green bg-lightest-blue' 
            type='text' 
            placeholder='Search robots' 
            onChange={searchChange}
            /> 
        </div>
    )
};

export default Searchbox;
