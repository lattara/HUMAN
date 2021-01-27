import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Home.module.scss'
import { Row, } from 'react-bootstrap';


function home() {
    return (
        <>
            <Row className={styles.textureBlock} >
                <Logo isMain={true} />
             
            </Row>
            <Row className={styles.yellowBlock}>
            </Row>
        </>
    )
}

export default home
