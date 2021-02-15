import React from 'react'
import styles from './ContactForm.module.scss'
import { Formik, Field, useFormik, FormikProvider } from 'formik';
import HumanButton from '../button/Button';
import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';


const onSubmit = values => { alert("form sent") }
const initialValues = {
  email: '',
  password: ''
}

const validate = values => {
  let errors = {
    email: '',
    password: ''
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Veuillez vérifier votre adresse e-mail."
  }
  return errors
}

function LoginForm() {

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate
  })

  return (
    <Formik value={formik} initialValues={initialValues} onSubmit={onSubmit}>
      <Form onSubmit={formik.handleSubmit} action="" >
        <Col className={styles.form} >
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="nom@domain.com"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && formik.isValid === false ? <div className={styles.errorMsg}>{formik.errors.email}</div> : <div className={styles.errorMsg}></div>}

          <label htmlFor="message">Password</label>
          <Field
            id="Mot de passe"
            name="Mot de passe"
            placeholder="Votre mot de passe ici"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && formik.isValid === false ? <div className={styles.errorMsg}>{formik.errors.password}</div> : <div className={styles.errorMsg}></div>}
          <HumanButton style={"outline"}
            text={"Envoyer le message"}
            buttonImage="send.png"
          />
        </Col>
      </Form>
    </Formik>

  )
}
export default LoginForm
