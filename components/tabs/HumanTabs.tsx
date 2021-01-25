import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container, TabContainer } from "react-bootstrap";
import ContactForm from '../forms/ContactForm'
import styles from './HumanTabs.module.scss'
import { useViewport } from "../../customHooks"

function HumanTabs() {
    const [key, setKey] = useState('A propos');
    const text = "Sed ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

    const { width } = useViewport();
    const breakpoint = 922;

    console.log(width)
    return width < breakpoint ? <>


        <TabContainer activeKey="A propos">
            <Col className={styles.tabsContainer} >
                <Tabs
                    className={styles.tabs} id="left-tabs-example" defaultActiveKey="A propos" onSelect={(key) => setKey(key)}>
                    <Tab bsPrefix={styles.tab} className={styles.tab} eventKey="A propos" title="A propos">
                        {
                            key === "A propos" ?
                                <>
                                    <img className={styles.image} src="/contact-profile-img.png" />
                                    <h3 className={styles.name}>Charlotte</h3>
                                    <p className={styles.aboutText}>{text}</p>
                                </> : null
                        }
                    </Tab>
                    <Tab bsPrefix={styles.tab} eventKey="Contact" title="Contact">
                        {
                            key === "Contact" ?
                                <ContactForm />
                                : null
                        }
                    </Tab>
                </Tabs>
            </Col>
        </TabContainer>
    </> : <>Desktop</>;

}

export default HumanTabs
