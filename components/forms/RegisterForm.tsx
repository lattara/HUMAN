import React from 'react'
import styles from './ContactForm.module.scss'
import { Formik, Field, FormikHelpers, useFormik, FormikProvider } from 'formik';
import HumanButton from '../button/Button';
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap'


const onSubmit = values => { alert("form sent") }
const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: {
        street: '',
        town: '',
        postcode: '',
        country: ''
    }
}

const validate = values => {
    let errors = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        contact: {
            street: '',
            town: '',
            postcode: '',
            country: ''
        }
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Veuillez vérifier votre adresse e-mail."
    } else if (values.password != values.confirmPassword) {
        errors.password = "Les mots de passe ne correspondent pas."
    }
    return errors
}

function RegisterForm() {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate
    })

    return (
        <Row noGutters>
            <Col >
                <Row noGutters>
                    <Col>
                        <Formik value={formik} initialValues={initialValues} onSubmit={onSubmit}>
                            <Form onSubmit={formik.handleSubmit} action="" >
                                <Col className={styles.form}>
                                    <Row noGutters>
                                        <Col>
                                            {/* first and last name */}
                                            <Row noGutters>
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <Row><label htmlFor="firstname">Prénom</label></Row>
                                                            <Row> <Field
                                                                id="firstname"
                                                                name="firstname"
                                                                placeholder="Votre prénom ici"
                                                                type="text"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.firstname}
                                                            /></Row>
                                                            <Row>
                                                                {
                                                                    formik.errors.password &&
                                                                        formik.touched.password &&
                                                                        formik.isValid === false
                                                                        ?
                                                                        <div className={styles.errorMsg}>{formik.errors.password}</div>
                                                                        :
                                                                        <div className={styles.errorMsg}>
                                                                        </div>
                                                                }
                                                            </Row>
                                                        </Col>
                                                        <Col>

                                                            <Row><label htmlFor="firstname">Nom de famille</label></Row>
                                                            <Row> <Field
                                                                id="lastname"
                                                                name="lastname"
                                                                placeholder="Votre nom de famille ici"
                                                                type="text"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.lastname}
                                                            /></Row>
                                                            <Row>
                                                                {
                                                                    formik.errors.password &&
                                                                        formik.touched.password &&
                                                                        formik.isValid === false
                                                                        ?
                                                                        <div className={styles.errorMsg}>{formik.errors.password}</div>
                                                                        :
                                                                        <div className={styles.errorMsg}>
                                                                        </div>
                                                                }
                                                            </Row>






                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* email */}
                                            <Row noGutters>
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <Row><label htmlFor="firstname">Email</label></Row>
                                                            <Row>
                                                                <Field
                                                                    id="email"
                                                                    name="email"
                                                                    placeholder="Votre email ici"
                                                                    type="email"
                                                                    onChange={formik.handleChange}
                                                                    value={formik.values.email}
                                                                /></Row>
                                                            <Row>
                                                                {
                                                                    formik.errors.email &&
                                                                        formik.touched.email &&
                                                                        formik.isValid === false
                                                                        ?
                                                                        <div className={styles.errorMsg}>{formik.errors.email}</div>
                                                                        :
                                                                        <div className={styles.errorMsg}>
                                                                        </div>
                                                                }
                                                            </Row>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* password and confirm password */}
                                            <Row noGutters>
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <Row><label htmlFor="firstname">Mot de passe</label></Row>
                                                            <Row> <Field
                                                                id="firstname"
                                                                name="firstname"
                                                                placeholder="Votre prénom ici"
                                                                type="text"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.firstname}
                                                            /></Row>
                                                            <Row>
                                                                {
                                                                    formik.errors.password &&
                                                                        formik.touched.password &&
                                                                        formik.isValid === false
                                                                        ?
                                                                        <div className={styles.errorMsg}>{formik.errors.password}</div>
                                                                        :
                                                                        <div className={styles.errorMsg}>
                                                                        </div>
                                                                }
                                                            </Row>
                                                        </Col>
                                                        <Col>

                                                            <Row><label htmlFor="firstname">Confirmez le mot de passe</label></Row>
                                                            <Row> <Field
                                                                id="lastname"
                                                                name="lastname"
                                                                placeholder="Votre nom de famille ici"
                                                                type="text"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.lastname}
                                                            /></Row>
                                                            <Row>
                                                                {
                                                                    formik.errors.password &&
                                                                        formik.touched.password &&
                                                                        formik.isValid === false
                                                                        ?
                                                                        <div className={styles.errorMsg}>{formik.errors.password}</div>
                                                                        :
                                                                        <div className={styles.errorMsg}>
                                                                        </div>
                                                                }
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* ADDRESS */}
                                            <Row>
                                                <Col>L'adresse</Col>
                                            </Row>
                                             {/* Street */}
                                            <Row noGutters>
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <Row><label htmlFor="street">Numéro de rue</label></Row>
                                                            <Row> <Field
                                                                id="street"
                                                                name="street"
                                                                placeholder="Numéro de rue"
                                                                type="text"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.street}
                                                            /></Row>
                                                            <Row>
                                                                {
                                                                    formik.errors.street &&
                                                                        formik.touched.street &&
                                                                        formik.isValid === false
                                                                        ?
                                                                        <div className={styles.errorMsg}>{formik.errors.street}</div>
                                                                        :
                                                                        <div className={styles.errorMsg}>
                                                                        </div>
                                                                }
                                                            </Row>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* Town */}
                                            <Row noGutters>
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <Row><label htmlFor="town">Ville</label></Row>
                                                            <Row> <Field
                                                                id="town"
                                                                name="town"
                                                                placeholder="Votre ville ici"
                                                                type="text"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.town}
                                                            /></Row>
                                                            <Row>
                                                                {
                                                                    formik.errors.town &&
                                                                        formik.touched.town &&
                                                                        formik.isValid === false
                                                                        ?
                                                                        <div className={styles.errorMsg}>{formik.errors.town}</div>
                                                                        :
                                                                        <div className={styles.errorMsg}>
                                                                        </div>
                                                                }
                                                            </Row>
                                                        </Col>
                                                        <Col>

                                                            <Row><label htmlFor="postcode">Code postal</label></Row>
                                                            <Row> <Field
                                                                id="postcode"
                                                                name="postcode"
                                                                placeholder="Votre nom code postal ici"
                                                                type="text"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.postcode}
                                                            /></Row>
                                                            <Row>
                                                                {
                                                                    formik.errors.postcode &&
                                                                        formik.touched.postcode &&
                                                                        formik.isValid === false
                                                                        ?
                                                                        <div className={styles.errorMsg}>{formik.errors.postcode}</div>
                                                                        :
                                                                        <div className={styles.errorMsg}>
                                                                        </div>
                                                                }
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* Country */}
                                            <Row noGutters>
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <Row><label htmlFor="country">Pays</label></Row>
                                                            <Row> <Field
                                                                id="country"
                                                                name="country"
                                                                placeholder="Pays"
                                                                type="text"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.street}
                                                            /></Row>
                                                            <Row>
                                                                {
                                                                    formik.errors.country &&
                                                                        formik.touched.country &&
                                                                        formik.isValid === false
                                                                        ?
                                                                        <div className={styles.errorMsg}>{formik.errors.country}</div>
                                                                        :
                                                                        <div className={styles.errorMsg}>
                                                                        </div>
                                                                }
                                                            </Row>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                            </Row>
                                            {/* submit */}
                                            <Row>
                                                <HumanButton style={"outline"}
                                                    text={"Envoyer le message"}
                                                    buttonImage="send.png"
                                                />
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Form>
                        </Formik>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default RegisterForm
