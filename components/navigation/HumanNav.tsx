import React, { useRef, useState } from 'react'
import styles from './HumanNav.module.scss'
import navItems from './NavItems.list'
import Link from 'next/link'
import { Nav, Row, Col, NavLink } from 'react-bootstrap'
import Tooltip from "@material-ui/core/Tooltip";

function HumanNav() {
    const loggedUser = { name: 'Name', role: 'admin' }
    const topNav = navItems.filter(navBarItem =>  navBarItem.id === 0 || navBarItem.id === 1 || navBarItem.id === 2 || loggedUser.role === "admin" && navBarItem.id === 3)
    const bottomNav = navItems.filter(navBarItem =>  navBarItem.id != 0 && navBarItem.id != 1 && navBarItem.id != 2 && navBarItem.id != 3)

    return (
        <Nav>
            <Row className={styles.topNav}>
                {
                    topNav.map(navItem =>
                        <Col bsPrefix={styles.topNavIcon} lg={1} xl={1} key={navItem.id} className={styles.navIcon}>
                            <Link href={navItem.link} passHref>
                                <Tooltip
                                    title={navItem.label}
                                    placement="top">
                                    <NavLink><img src={navItem.icon}/></NavLink>
                                </Tooltip>
                            </Link>
                        </Col>

                    )}
            </Row>
            <Row className={styles.bottomNav}>
                {
                    bottomNav.map(navItem =>
                        <Col key={navItem.id} className={styles.navIcon}>
                            <Link href={navItem.link} passHref>
                                <Tooltip
                                    title={navItem.label}
                                    placement="right-start">
                                    <NavLink><img src={navItem.icon} /></NavLink>
                                </Tooltip>
                            </Link>
                            <span>{navItem.label}</span></Col>
                    )}
            </Row>
        </Nav>
    )
}

export default HumanNav
