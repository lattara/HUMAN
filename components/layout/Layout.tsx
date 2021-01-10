import React from 'react'
import Nav from '../navigation/Nav'
import Container from 'react-bootstrap/Container'

function Layout(props) {
    return (
        <Container fluid>
            <Nav/>
            {props.children}  
        </Container>
    )
}

export default Layout
