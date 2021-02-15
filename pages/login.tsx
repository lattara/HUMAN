import React, { useState } from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from '../components/forms/RegisterForm'
import styles from "../styles/Login.module.scss"

function login() {
    const [key, setKey] = useState('register');

    return (
        <Row noGutters style={{marginTop:"5%"}}> 
            <Col xs={0} sm={0} md={0} lg={4} xl={4} style={{ display: "flex", justifyContent: "flex-end" }}>
                <img src="/presentation1.png" alt="" className={styles.presentationImg} />
            </Col>
            <Col>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="register" title="S'inscrire">
                        <Col xs={12} sm={12} md={12} lg={8} xl={8} style={{padding:"0px"}}>
                            <RegisterForm />
                        </Col>
                    </Tab>
                    <Tab eventKey="login" title="S'identifier">
                        <Col xs={12} sm={12} md={12} lg={8} xl={8} style={{padding:"0px"}}> <LoginForm />
                        </Col>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    )
}

export default login
