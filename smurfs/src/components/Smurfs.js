import React from 'react';

const Smurfs = props => {

    console.log ('Smurfs.js props:', props)

    return (
        <div>
            <h3>{props.e.name}</h3>
        </div>
    )
}

export default Smurfs;