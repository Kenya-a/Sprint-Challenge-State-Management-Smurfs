import React from 'react';
import { withFormik, Form, Field } from 'formik';

import * as Yup from 'yup';
import axios from 'axios';

function SmurfForm({ values }) {

    return <div className="form">
        <Form>
            <div>
                <Field
                    type='text'
                    name='name'
                    placeholder='Add New Smurf'
                />
            </div>


            <div>
                <Field
                    type = 'text'
                    name = 'age'
                    placeholder = 'Enter Age'
                />
            </div>

            <div>
                <Field
                    type = 'text'
                    name = 'height'
                    placeholder = 'Enter Height'
                />
            </div>

            <button type = 'submit'>Add A New Smurf</button>

        </Form>

    </div>
};



const FormikSmurfForm = withFormik({
    mapPropsToValues({name, age, height}){

        return{
            name: name || '',
            age: age || '',
            height: height || '',
        };
    },


    handleSubmit(values, {resetForm}){

        console.log('Handle Submit Values', values)

        axios.post('#', values)

        .then(response => {
            console.log('Axios.post response', response)
            resetForm();
        })

        .catch(error => {
            console.log('Axios.post error', error)
        })
    },


})(SmurfForm)

export default FormikSmurfForm;
