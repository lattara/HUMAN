import React from 'react'
import Nav from '../navigation/Nav'

function Layout(props) {
    return (
        <div className="content">
            <div>
            <Nav/>
            </div>
            {props.children}  
        </div>
    )
}

export default Layout
