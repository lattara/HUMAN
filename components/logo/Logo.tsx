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
                        .start()
                }} />
            <Col xs={12} className={styles.dividerMain}></Col>
            <Col xs={12} className={styles.secondTitleMain}>Bijoux au pieres natureles</Col>
        </Row>

    const renderOtherPage =
        <Col xs={12} sm={12} md={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }} xl={12} className={styles.otherPages}>
            <Row noGutters className={styles.logoOtherPages}>
                
                <Col xs={0} sm={0} md={3} lg={3} xl={2} className={styles.presentationImage}>
                    <img
                        src={props.imageLink}
                        alt="Necklace presentation photo" />
                </Col>
                
                <Col xs={12} sm={12} md={6} lg={8} xl={8}>
                    <div className={styles.mainLogo}>HUMAN</div>
                    <div className={styles.productCategory}>{props.productCategory}</div>
                    <div className={styles.dividerOtherPages}></div>
                    <Col className={styles.undertitle}>{props.undertitle}</Col>
                </Col>
                
                
                
                
            </Row>
        </Col>



    return (
        <React.Fragment>
            {props.isMain ? renderMainPage : renderOtherPage}
        </React.Fragment>

    )
}

export default Logo
