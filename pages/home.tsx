import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Home.module.scss'
import { Row, } from 'react-bootstrap';
import Link from 'next/link';

function home() {
    return (
        <>
            <Row className={styles.textureBlock} >
                <Logo isMain={true} />
               <Link href={"https://www.instagram.com/human_bijoux/"}><img className={styles.insta} src="/instagram-bw.png" alt=""/></Link>
            </Row>
            <Row className={styles.yellowBlock}>
            <Link href={"https://www.etsy.com/fr/shop/HumanBijouxCreations"}><img className={styles.etsy} src="/etsy.png" alt=""/></Link>
            </Row>
        </>
    )
}

export default home
