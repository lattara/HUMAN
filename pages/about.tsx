
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
            <HumanTabs />
        </Row>
        :
        <Row noGutters className={styles.aboutContainer}>
            <Col className={styles.bioContainer}>
                <img className={styles.image} src="/contact-profile-img.png" />
                <h3 className={styles.name}>Charlotte</h3>
                <p className={styles.aboutText}>{text}</p>

            </Col>
            <Col className={styles.contactContainer}>
                <Col className={styles.title}>
                    <div>
                    <h3>"Vous avez une question? </h3>
                    <span>Ou vous voulez simplement dire bonjour"</span>
                    </div>
                    <ContactForm />
                </Col> 
            </Col>
        </Row>

}

export default about
