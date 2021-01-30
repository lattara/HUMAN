import React from "react";
import HumanNav from "../navigation/HumanNav";
import Container from "react-bootstrap/Container";
import { useRouter } from 'next/router'

function Layout(props) {
    const router = useRouter()

    console.log(router.pathname)
    return (
        <Container fluid
            style={
                router.pathname === "/colliers" || router.pathname === "/bracelets"
                    ?
                    { background: "linear-gradient(110deg, #fdd802 60%, #ffed4b 60%)" }
                    : { backgroundColor: null }}>
            <HumanNav />
            {props.children}
        </Container>
    )
}

export default Layout
