import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, useFormik, FormikProvider } from 'formik';
import Button from '@material-ui/core/Button';
import { Col, Row } from 'react-bootstrap';
import styles from './DashForm.module.scss'
import ChipInput from 'material-ui-chip-input'
import Dropzone, { useDropzone } from 'react-dropzone'


function DashProductForm() {
    const onSubmit = values => { }
    const onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
    }

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

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate,
    })

    const [tagsState, setTagsState] = useState(formik.values.tags)
    const [files, setFiles] = useState(formik.values.images);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        multiple: true,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <img key={file.name} src={file.preview} alt="image preview" className={styles.thumbs} />

    ));

    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);




    return (
        <Formik value={formik} initialValues={initialValues} onSubmit={onSubmit} >
            {({ values }) => (
                <Form
                    className={styles.form}
                    onSubmit={formik.handleSubmit}
                    action="/multiple-upload" method="POST"
                    encType="multipart/form-data">
                    <Col xs={12} sm={12} md={4} lg={4} xl={5}>
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

                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4} xl={5}>
                        <label htmlFor="tags">Les labels</label>
                        <ChipInput
                            placeholder="Ecrivez du texte puis appuyez sur Entrée pour ajouter un label"
                            variant='outlined'
                            id="tags"
                            fullWidth
                            value={formik.values.tags}
                            onChange={value => formik.setFieldValue("tags", value)}
                            onDelete={(value, index) => setTagsState(formik.values.tags.splice(index, 1))}
                        />
                        {formik.errors.tags && formik.touched.tags && formik.values.tags.length === 0 && formik.isValid === false ? <div className={styles.error}>{formik.errors.tags}</div> : null}


                        <label htmlFor="nom">Les photos</label>
                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p>"Drag 'n' drop" some quelques fichiers ici, ou cliquez pour sélectionner des fichiers</p>
                        </div>
                        <div className={styles.thumbsContainer}>
                            {thumbs}
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button type="submit" variant="outlined" color="secondary" onClick={() => { console.log(files) }}>Save</Button>
                        </div>
                    </Col>

                </Form>
            )}
        </Formik >
    )
}

export default DashProductForm
