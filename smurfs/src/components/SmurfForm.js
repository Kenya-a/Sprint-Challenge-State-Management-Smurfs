import React from 'react';
import { withFormik, Form, Field } from 'formik';

import * as Yup from 'yup';
import axios from 'axios';

function SmurfForm({ errors, touched }) {

    return <div className="form">
        <Form>
            <div>
                {errors.name && <p>{errors.name}</p>}
                <Field
                    type='text'
                    name='name'
                    placeholder='Add New Smurf'
                />
            </div>


            <div>
                {touched.name && errors.age && <p>{errors.age}</p>}
                <Field
                    type='text'
                    name='age'
                    placeholder='Enter Age'
                />
            </div>

            <div>
                {touched.age && errors.height && <p>{errors.height}</p>}
                <Field
                    type='text'
                    name='height'
                    placeholder='Enter Height'
                />
            </div>

            <button type='submit'>Add A New Smurf</button>

        </Form>

    </div>
};



const FormikSmurfForm = withFormik({
    mapPropsToValues({ name, age, height }) {

        return {
            name: name || '',
            age: age || '',
            height: height || '',
        };
    },


    handleSubmit(values, { resetForm }) {

        console.log('Handle Submit Values', values)

        axios.post('http://localhost:3333/smurfs', values)

            .then(response => {
                console.log('Axios.post response', response)
                resetForm();
            })

            .catch(error => {
                console.log('Axios.post error', error)
            })
    },

    //============Validation Schema====================

    validationSchema: Yup.object().shape({

        name: Yup.string()
            .min(1, 'Name not valid.')
            .required('Name is required'),

        age: Yup.string()
            .required('Age is required.'),
        
        height: Yup.string()
            .required('A height is required.'),



    })

})(SmurfForm)

export default FormikSmurfForm;
