
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import HumanTabs from '../components/tabs/HumanTabs';
import styles from '../styles/About.module.scss'
import { useViewport } from "../customHooks"
import ContactForm from '../components/forms/ContactForm'


function about() {
    const { width } = useViewport();
    const breakpoint = 922;
    const text = "Sed ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

    return width < breakpoint ?

        <Row className={styles.aboutContainer}>
            <Col> <HumanTabs /></Col>
        </Row>
        :
        <Row className={styles.aboutContainer} noGutters>
            <Col className={styles.bioContainer} xs={12} sm={12} md={5} lg={6} xl={5}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}><img className={styles.image} src="/contact-profile-img.png" /></Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} ><h3 className={styles.name}>Charlotte</h3></Col>
                    <p className={styles.aboutText}>{text}</p>
                </Row>
            </Col>
            <Col className={styles.contactContainer} xs={12} sm={12} md={5} lg={4} xl={6}>
                <Row className={styles.title}>
                    <Col>
                        <Row>
                            <Col><h3>"Vous avez une question? </h3></Col>
                            <Col xs={12} sm={12} md={6} lg={12} xl={12}><span>Ou vous voulez simplement dire bonjour"</span></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={12} xl={12}>
                        <ContactForm />
                    </Col>
                </Row>
            </Col>
        </Row>

}

export default about
