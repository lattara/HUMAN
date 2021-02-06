import React from "react";
import HumanNav from "../navigation/HumanNav";
import Container from "react-bootstrap/Container";
import { useRouter } from 'next/router'
import { Row } from "react-bootstrap";

function Layout(props) {
    const router = useRouter()
    return (
        <Container 
            style={
                router.pathname === "/colliers" || router.pathname === "/bracelets"
                    ?
                    { background: "" }
                    : { backgroundColor: null }}>
            <HumanNav />
            <Row className="innerContainer">{props.children}</Row>
        </Container>
    )
}

export default Layout
