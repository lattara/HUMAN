import React from 'react'
import styles from "./Logo.module.scss"
import Typewriter from 'typewriter-effect';
import { Container, Row, Col } from 'react-bootstrap';

function Logo(props) {

    const renderMainPage =
        <Col className={styles.logoMain}>
            <Row>
            <Typewriter options={{
                cursorClassName: 'cursor',
                autoStart: true,}}
                onInit={(typewriter) => {
                    typewriter.typeString('HUMAN')
                        .pauseFor(700)
                    typewriter.typeString('. ')
                        .pauseFor(2500)
                        .start()}} />
             <Col xs={12} className={styles.secondTitleMain}>Bijoux au pieres natureles</Col>    
                </Row>       
        </Col>
             

    const renderOtherPage = 
    <>
        <Row>
            <Col xs={6}>HUMAN</Col> 
            <Col xs={6}>{props.productCategory}</Col>
        </Row>
    </>


    return (
        <React.Fragment>
            {props.isMain ? renderMainPage : renderOtherPage}
        </React.Fragment>

    )
}

export default Logo
