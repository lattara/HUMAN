import React from "react";
import HumanNav from "../navigation/HumanNav";
import Container from "react-bootstrap/Container";
import { useRouter } from 'next/router'
import { Row, Col } from "react-bootstrap";

function Layout(props) {
    const router = useRouter()
    if (router.pathname === "/home") {
        return (
            <Container fluid >
                <HumanNav /> 
                <Row noGutters style={{maxHeight:"90vh"}}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>{props.children}</Col>
                </Row>

            </Container>
        )

    } else {
        return (
                <Row style={{display: "flex", justifyContent: "center"}}>
                    <HumanNav />
                    <Col xs={12} sm={12} md={12} lg={{span:11, offset:1}} xl={{span:11, offset:1}} style={{height:"85vh"}}>
                        {props.children}
                    </Col>
                </Row>

        )
    }



}

export default Layout
