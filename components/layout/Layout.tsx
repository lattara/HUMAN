import React from "react";
import HumanNav from "../navigation/HumanNav";
import Container from "react-bootstrap/Container";
import { useRouter } from 'next/router'
import { Row, Col } from "react-bootstrap";

function Layout(props) {
    const router = useRouter()
    if (router.pathname === "/home") {
        return (
            <>
                <HumanNav position={"top"} />
                <Container fluid >
                    {props.children}
                </Container>
                <HumanNav position={"bottom"} />
            </>
        )
    } else {
        return (
            <Col style={{padding:"0px", height: "100vh"}}>
                <Row><HumanNav position={"top"} /></Row>
                <Row noGutters>
                    <Col xs={12} sm={12} md={12} lg={{ span: 11, offset: 1 }} xl={{ span: 11, offset: 1 }}>{props.children}</Col>
                </Row>
                <Row><HumanNav position={"bottom"} /></Row>
            </Col>
        )
    }
}

export default Layout
