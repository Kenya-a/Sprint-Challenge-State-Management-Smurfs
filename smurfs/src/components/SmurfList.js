import React from 'react';
import { connect } from 'react-redux';
import { submitButton } from '../actions/actions'

import Smurfs from './Smurfs';

const SmurfList = props => {
    return (
        <>
        <button onClick = {props.submitButton}>{props.test}</button>
        {props.smurfs && props.smurfs.map(smurf => <Smurfs key = {smurf.name} e = {smurf}/>)}
        </>
    )
}

const mapStatetoProps = state => {
    return {
        test: state.test,
        smurfs: state. smurfs
    }
}

export default connect(mapStatetoProps, {submitButton})(SmurfList)