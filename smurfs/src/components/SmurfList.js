import React from 'react';
import { connect } from 'react-redux';
//import { submitButton } from '../actions/action'

import Smurfs from './Smurfs';

const SmurfList = props => {
    return (
        <>
        <h2>{props.test}</h2>


        </>
    )
}

const mapStatetoProps = state => {
    return {
        test: state.test,
    }
}

export default connect(mapStatetoProps)(SmurfList)