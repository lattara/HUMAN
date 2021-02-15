
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import HumanTabs from '../components/tabs/HumanTabs';
import styles from '../styles/About.module.scss'
import { useViewport } from "../customHooks"
import ContactForm from '../components/forms/ContactForm'


function about() {
    const { width } = useViewport();
    const breakpoint = 922;
    const text = "Sed ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse?"

    return width < breakpoint ?
        <Col className={styles.mobileContainer}>
            <HumanTabs />
        </Col>
        :
        <Row>
            <Col>
                <Col className={styles.backgroundTexture}>
                </Col>
                <Row noGutters className={styles.aboutContainer}>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} >
                        <div>
                            <img className={styles.image} src="/contact-profile-img.png" />
                            <h3 className={styles.name}>Charlotte</h3>
                            <p className={styles.aboutText}>{text}</p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className={styles.contactContainer} >
                        <h3>"Vous avez une question? </h3>
                        <span>Ou vous voulez simplement dire bonjour"</span>
                        <Col>
                            <ContactForm />
                        </Col>
                    </Col>
                </Row>
            </Col>
        </Row>
}

export default about
