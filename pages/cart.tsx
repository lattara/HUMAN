import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Cart from '../components/cart/Cart'

function cart() {
    return (
        <Row noGutters>
                <Col xs={11} sm={4} md={6} lg={4} xl={5}><img src="/panier-presentation.png" alt="" style={{ justifySelf: "flex-end", width:"100%" }} /></Col>
                <Col xs={11} sm={8} md={6} lg={4} xl={5}><Cart /></Col>
        </Row>
    )
}

export default cart
