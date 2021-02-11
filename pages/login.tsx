import React, { useState } from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from '../components/forms/RegisterForm'

function login() {
    const [key, setKey] = useState('register');

    return (
        <Row noGutters>
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <Row>
                    <img src="presentation1.png" alt="" style={{width:"100%"}}/>
                </Row>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} > 
                <Tabs style={{display:"flex", flexDirection:"row"}}
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="register" title="S'inscrire" styles={{alignSelf:"stretch"}}>
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
