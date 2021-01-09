import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Home.module.scss'
import { Container, Row, Col} from 'react-bootstrap';

function home() {
    return (
        <Container fluid> 
            <Row className={styles.textureBlock} >
            <Logo isMain={true} />  
            </Row>
            <Row className={styles.yellowBlock}>
            </Row>
        </Container>
    )
}

export default home
