
import React from 'react'
import { Row } from 'react-bootstrap';
import HumanTabs from '../components/tabs/HumanTabs';
import styles from '../styles/About.module.scss'


function about(props) {

    return (
        <Row className={styles.aboutContainer}>
            <HumanTabs />
        </Row>
    );
}

export default about
