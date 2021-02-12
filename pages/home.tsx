import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Home.module.scss'
import { Row, Col } from 'react-bootstrap';


function home() {
    return (
        <Row className={styles.homeContainer} noGutters>
            <Col className={styles.textureBlock} >
                <Logo isMain={true} />
            </Col>
            <Col className={styles.yellowBlock}>
            </Col>
        </Row>
    )
}

export default home
