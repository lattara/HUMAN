import React from 'react'
import { Formik, Field, Form, FormikHelpers, useFormik, FormikProvider } from 'formik';
import HumanButton from '../button/Button';

const onSubmit = values => { alert("form sent") }
const initialValues = {
    name: '',
    email: '',
    message: '',
}

const validate = values => {
    let errors = {
        email: '',
        name: '',
        message: ''
    }

    if (!values.name) {
        errors.name = "name is mandatory"
    }
    if (!values.email) {
        errors.email = 'emails is mandatory';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.message) {
        errors.message = "message is mandatory"
    }

    return errors
}

function DashProductForm() {
   
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate
    })

    return(
        <Formik value = { formik } initialValues = { initialValues } onSubmit = { onSubmit } >
                <form onSubmit={formik.handleSubmit} action="">
                <label htmlFor="nom">Nom</label>
                        <Field
                            id="name"
                            name="name"
                            placeholder="Votre nom ici.."
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            formentry
                        />
                        {formik.errors.name && formik.touched.name && formik.isValid === false ? <div>{formik.errors.name}</div> : <div></div>}
                </form>
    </Formik >
    


    )
}

export default DashProductForm
