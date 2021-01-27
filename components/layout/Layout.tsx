import React from "react";
import HumanNav from "../navigation/HumanNav";
import Container from "react-bootstrap/Container";

function Layout(props) {
    return (
        <Container fluid>
            <HumanNav/>
           {props.children}
        </Container>
    )
}

export default Layout
