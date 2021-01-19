import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Home.module.scss'
import { Row, } from 'react-bootstrap';

function home() {
    return (
        <>
            <Row className={styles.textureBlock} >
                <Logo isMain={true} />
                <img className={styles.insta} src="/instagram-bw.png" alt=""/>
            </Row>
            <Row className={styles.yellowBlock}>
            <img className={styles.etsy} src="/etsy.png" alt=""/>
            </Row>
        </>
    )
}

export default home
