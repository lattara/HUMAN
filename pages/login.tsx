import React, { useState } from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from '../components/forms/RegisterForm'

function login() {
    const [key, setKey] = useState('register');

    return (
        <Row noGutters>
            <Col lg={"auto"} xl={"auto"} style={{display:"flex"}}>
                <img src="/presentation1.png" style={{width: "100%", marginTop:"80px", objectFit: "cover"}} alt=""/>
            </Col>
            <Col xs={12} sm={12} md={12} lg={"auto"} xl={"auto"}> 
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >                    
                    <Tab eventKey="register" title="S'inscrire">
                        <RegisterForm />
                    </Tab>
                    <Tab eventKey="login" title="S'identifier">
                        <LoginForm />
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    )
}

export default login
