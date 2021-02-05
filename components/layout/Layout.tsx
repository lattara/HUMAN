import React from "react";
import HumanNav from "../navigation/HumanNav";
import Container from "react-bootstrap/Container";
import { useRouter } from 'next/router'

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
            {props.children}
        </Container>
    )
}

export default Layout
