import React from 'react'
import { Container, Row } from 'react-bootstrap';
import DashNav from '../dashboard/DashNav';

function DashLayout(props) {
    return (
        <>
         <DashNav/>   
        {props.children}
           
        </>
    )
}

export default DashLayout
