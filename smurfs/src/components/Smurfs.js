import React from 'react';

const Smurfs = props => {

    console.log ('Smurfs.js props:', props)

    return (
        <div className = 'smurf'>
            <h3>{props.e.name}</h3>
            <p>{props.e.age}</p>
            <p>{props.e.height}</p>
        </div>
    )
}

export default Smurfs;