import React from 'react'
import styles from "./Logo.module.scss"
import Typewriter from 'typewriter-effect';
import { Container, Row, Col } from 'react-bootstrap';

function Logo(props) {

    const renderMainPage =
        <Col>
            <Row className={styles.logoMain}>
                <Typewriter options={{
                    cursorClassName: 'cursor',
                    autoStart: true,
                }}
                    onInit={(typewriter) => {
                        typewriter.typeString('HUMAN')
                            .pauseFor(700)
                        typewriter.typeString('.')
                        .pauseFor(2500)
                        .start()}} />
                <Col xs={12} className={styles.dividerMain}></Col>
                <Col xs={12} className={styles.secondTitleMain}>Bijoux au pieres natureles</Col>    
            </Row>       
        </Col>
             

    const renderOtherPage = 
    <Col>
        <Row>
            <Col xs={7} className={styles.logoOtherPages}>HUMAN</Col> 
            <Col xs={4} className={styles.productCategory}>{props.productCategory}</Col>
            <div className={styles.dividerOtherPages}></div>
        </Row>
    </Col>


    return (
        <React.Fragment>
            {props.isMain ? renderMainPage : renderOtherPage}
        </React.Fragment>

    )
}

export default Logo
