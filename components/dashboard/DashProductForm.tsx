import React, { useState } from 'react'
import { Formik, Field, Form, useFormik, FormikProvider } from 'formik';
import Button from '@material-ui/core/Button';
import { Row } from 'react-bootstrap';
import styles from './DashForm.module.scss'
import ChipInput from 'material-ui-chip-input'

const onSubmit = values => { alert("form sent") }
const initialValues = {
    name: '',
    category: '',
    description: '',
    price: '',
    tags: [],
    images: [],
}

const validate = values => {
    let errors = {
        name: '',
        category: '',
        description: '',
        price: '',
        tags: '',
        message: ''
    }

    if (!values.name) {
        errors.name = "Le champ de nom est obligatoire"
    }

    if (!values.description) {
        errors.description = "La description du produit est obligatoire"
    }

    if (!values.price) {
        errors.price = "Veuillez saisir le prix du produit"
    }

     if (values.tags.length === 0) {
        errors.tags = "Ajouter au moins un tag"
     }

    return errors
}

function DashProductForm() {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate
    })
    const [tagsState, setTagsState] = useState(formik.values.tags)


    return (
        <Formik value={formik} initialValues={initialValues} onSubmit={onSubmit} >
            {({ values }) => (
                <Form onSubmit={formik.handleSubmit}
                    action="/multiple-upload" method="POST"
                    encType="multipart/form-data">
                    <label htmlFor="name">Nom de produit</label>
                    <Field
                        id="name"
                        name="name"
                        placeholder="Nom de produit ici ..."
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        formentry
                    />
                    {formik.errors.name &&
                        formik.touched.name &&
                        formik.isValid === false ?
                        <div className={styles.error}>{formik.errors.name}</div>
                        : null}

                    <label htmlFor="category">Catégorie du produit</label>

                    <div className={styles.radioButtons}>
                        <img src="/necklace.png" alt="" />
                        <input type="radio" name="category" value="necklace" onChange={formik.handleChange} />
                        <img src="/bracelet.png" alt="" />
                        <input type="radio" name="category" value="bracelet" onChange={formik.handleChange} />
                        <img src="/earrings.png" alt="" />
                        <input type="radio" name="category" value="earing" onChange={formik.handleChange} />
                        {/* here errors for radio buttons */}
                    </div>


                    <label htmlFor="description">Description de produit</label>
                    <Field as="textarea"
                        id="description"
                        name="description"
                        placeholder="Description of the product here"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        formentry
                    />
                    {formik.errors.description &&
                        formik.touched.description &&
                        formik.isValid === false ?
                        <div className={styles.error}>{formik.errors.description}</div>
                        : null}


                    <label htmlFor="price">Prix de produit</label>
                    <Field
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Votre nom ici.."
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        formentry
                    />
                    {formik.errors.price && formik.touched.price && formik.isValid === false ? <div className={styles.error}>{formik.errors.price}</div> : null}


                    <label htmlFor="tags">Les labels</label>
                    <p>Ecrivez du texte puis appuyez sur Entrée pour ajouter une label</p>
                    <ChipInput
                        id="tags"
                        fullWidth
                        value={formik.values.tags}
                        onChange={value => formik.setFieldValue("tags", value)}
                        onDelete={(value, index) => setTagsState(formik.values.tags.splice(index, 1))}
                    />
                    {formik.errors.tags && formik.touched.tags && formik.values.tags.length === 0 && formik.isValid === false ? <div className={styles.error}>{formik.errors.tags}</div> : null}





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
