import React from "react";
import HumanNav from "../navigation/HumanNav";
import Container from "react-bootstrap/Container";
import { useRouter } from 'next/router'
import { Row, Col } from "react-bootstrap";

function Layout(props) {
    const router = useRouter()
    return (
        <Container style={{maxWidth: "100vw", padding:"0px"}}>
            <HumanNav />
            <Row>
            
                <Col xs={12} sm={12} md={12} lg={{ span: 10, offset: 2 }} xl={{ span: 10, offset: 2 }} style={{ padding:"0px"}}>
            {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default Layout
