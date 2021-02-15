import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Home.module.scss'
import { Row, Col } from 'react-bootstrap';


function home() {
    return (
        <Row className={styles.homeContainer}>
            <Col style={{padding: "0px"}}>
                <Row className={styles.textureBlock} >
                    <Logo isMain={true} />
                </Row>
                <Row className={styles.yellowBlock}>
                </Row>
            </Col>
        </Row>
    )
}

export default home
