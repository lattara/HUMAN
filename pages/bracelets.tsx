import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Home.module.scss'
import { Container, Row, Col } from 'react-bootstrap';

function bracelets() {
    return (
        <Row noGutters>
             <Logo productCategory={"bracelet"}/>
        </Row>
    )
}

export default bracelets
