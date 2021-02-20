import React from 'react'
import { Formik, Field, Form, FormikHelpers, useFormik, FormikProvider, FieldArray } from 'formik';
import HumanButton from '../button/Button';
import ReactChip from 'react-chip'
import Button from '@material-ui/core/Button';
import { Row } from 'react-bootstrap';
import { resourceLimits } from 'worker_threads';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { text } from '@fortawesome/fontawesome-svg-core';

const onSubmit = values => { alert("form sent") }
const initialValues = {
    name: '',
    category: '',
    tags: [],
    images: [],
    price: '',
}

const validate = values => {
    let errors = {
        name: '',
        message: ''
    }

    if (!values.name) {
        errors.name = "name is mandatory"
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

    const test=(value)=>{console.log(value)}

    return (
        <Formik value={formik} initialValues={initialValues} onSubmit={onSubmit} >
            {({ values }) => (
                <Form onSubmit={formik.handleSubmit}
                    action="/multiple-upload" method="POST"
                    encType="multipart/form-data">
                    <label htmlFor="nom">Nom de produit</label>
                    <Field
                        id="name"
                        name="name"
                        placeholder="Nom de produit ici ..."
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        formentry
                    />
                    {formik.errors.name && formik.touched.name && formik.isValid === false ? <div>{formik.errors.name}</div> : <div></div>}

                    <label htmlFor="category">Catégorie du produit</label>
                    <div style={{ display: "flex" }}>

                    <label htmlFor="category">Collier</label>
                    <input type="radio" name="category" value="necklace" onChange={formik.handleChange} />
                    <label htmlFor="category">Bracelet</label>
                    <input type="radio" name="category" value="bracelet" onChange={formik.handleChange} />
                    <label htmlFor="category">Boucle d'oreille</label>
                    <input type="radio" name="category" value="earing" onChange={formik.handleChange} />

                    </div>



                    <label htmlFor="nom">Description de produit</label>
                    <Field as="textarea"
                        id="name"
                        name="name"
                        placeholder="Votre nom ici.."
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        formentry
                    />
                    {formik.errors.name && formik.touched.name && formik.isValid === false ? <div>{formik.errors.name}</div> : <div></div>}


                    <label htmlFor="nom">Prix de produit</label>
                    <Field
                        id="name"
                        name="price"
                        placeholder="Votre nom ici.."
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        formentry
                    />
                    {formik.errors.name && formik.touched.name && formik.isValid === false ? <div>{formik.errors.name}</div> : <div></div>}

                    <label htmlFor="nom">Les labels</label>
                    <Field as="textarea"
                        id="name"
                        name="name"
                        placeholder="Votre nom ici.."
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        formentry
                    />
                    {formik.errors.name && formik.touched.name && formik.isValid === false ? <div>{formik.errors.name}</div> : <div></div>}

                    <label htmlFor="nom">Les photos</label>
                    <input type="file" multiple />
                    <Row style={{ display: "flex", justifyContent: "flex-end", marginTop: "30px" }}>
                        <Button type="submit" variant="outlined" color="secondary" onClick={() => { console.log(formik.values) }}>Save</Button>
                    </Row>
                </Form>
            )}
        </Formik >



    )
}

export default DashProductForm
