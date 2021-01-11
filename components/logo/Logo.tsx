import React from 'react'
import styles from "./Logo.module.scss"
import Typewriter from 'typewriter-effect';
import { Row, Col } from 'react-bootstrap';

function Logo(props) {

    const renderMainPage =
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
 
    const renderOtherPage = 
        <Col className = {styles.otherPages}>
        <Row noGutters className={styles.logoOtherPages}>
            <Col xs={9} sm={9} md={10} lg={4} xl={4}>HUMAN</Col> 
            <div>
            <Col xs={3} sm={3} md={2} lg={6} xl={6} className={styles.productCategory}>{props.productCategory}</Col>
            </div>
            <Col xs={12} className={styles.dividerOtherPages}></Col>
            <Col className={styles.undertitle}>{props.undertitle}</Col>
        </Row>
        </Col>
 


    return (
        <React.Fragment>
            {props.isMain ? renderMainPage : renderOtherPage}
        </React.Fragment>

    )
}

export default Logo
