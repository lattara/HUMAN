import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from '../components/forms/RegisterForm'

function login() {
    return (
        <Row style={{ height: "100%" }} noGutters>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <Row>
                    
                        <img src="presentation1.png" alt="" style={{ width: "100%" }} />
                   
                </Row>


            </Col>


            <Col xs={7} sm={7} md={7} lg={7} xl={7}><RegisterForm /></Col>



            {/* <LoginForm /> */}
        </Row>
    )
}

export default login
