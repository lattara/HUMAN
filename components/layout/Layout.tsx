import React from 'react'
import Nav from '../navigation/Nav'

function Layout(props) {
    return (
        <div className="content">
            <Nav/>
            {props.children}  
        </div>
    )
}

export default Layout
