import React from 'react'
import Container from "react-bootstrap/Container";
import DashNav from '../dashboard/DashNav';

function DashLayout(props) {
    return (
        <Container fluid>
            <DashNav/>
           {props.children}
        </Container>
    )
}

export default DashLayout
