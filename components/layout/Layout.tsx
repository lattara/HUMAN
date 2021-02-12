import React from "react";
import HumanNav from "../navigation/HumanNav";
import Container from "react-bootstrap/Container";
import { useRouter } from 'next/router'
import { Row, Col } from "react-bootstrap";

function Layout(props) {
    const router = useRouter()
    console.log(router.pathname)
    if (router.pathname === "/home") {
        return (

            <Container fluid style={{ maxWidth: "100vw", padding: "0px" }}>
                <HumanNav /> 
                <Row noGutters>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>{props.children}</Col>
                </Row>

            </Container>
        )

    } else {
        return (
            <Container style={{ maxWidth: "100vw", padding: "0px" }}>
                <HumanNav />
                <Row>
                    <Col xs={12} sm={12} md={12} lg={{ span: 11, offset: 1 }} xl={{ span: 11, offset: 1 }} style={{ padding: "0px" }}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        )
    }



}

export default Layout
