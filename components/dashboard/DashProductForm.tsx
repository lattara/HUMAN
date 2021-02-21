import React from 'react'
import { Formik, Field, Form, useFormik, FormikProvider } from 'formik';
import Button from '@material-ui/core/Button';
import { Row } from 'react-bootstrap';
import styles from './DashForm.module.scss'

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
        errors.name = "Le champ de nom est obligatoire"
    }

    if (!values.category) {
        errors.message = "Sélectionnez la catégorie des produits"
    }

    return errors
}

function DashProductForm() {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate
    })


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

                    <div className={styles.radioButtons}>
                        <img src="/necklace.png" alt="" />
                        <input type="radio" name="category" value="necklace" onChange={formik.handleChange} />
                        <img src="/bracelet.png" alt="" />
                        <input type="radio" name="category" value="bracelet" onChange={formik.handleChange} />
                        <img src="/earrings.png" alt="" />
                        <input type="radio" name="category" value="earing" onChange={formik.handleChange} />
                        {formik.errors.category && formik.touched.category && formik.isValid === false ? <div>{formik.errors.name}</div> : <div></div>}
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
