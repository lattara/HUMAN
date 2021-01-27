import React, { useEffect, useState } from 'react'
import dashNavItem from './dashNavItems.list'
import { SwipeableDrawer } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { useViewport } from "../../customHooks"
import styles from "./DashNav.module.scss"
import Link from 'next/link';

function dashNav() {
    const { width } = useViewport();
    const breakpoint = 922;
    const [drawerState, setDrawerState] = React.useState({
        open: false
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState({ ...drawerState, open });
    };

    const logout = (open) => (event) => {
        console.log("Logout user")
    }

    return width < breakpoint ?
        <>
            <Row className={styles.exitContainer}>
                <img
                    className={styles.exit} src="/log-out.png" alt="exit"
                    onMouseOver={e => (e.currentTarget.src = "/log-out-red.png")}
                    onMouseLeave={e => (e.currentTarget.src = "/log-out.png")}
                />
            </Row>
            <Row className={styles.mobileContainer}>
                {dashNavItem.map(navItem => <Col className={styles.mobileItemContainer} key={navItem.id}><Link href={navItem.link}><img src={navItem.icon} className={styles.icon} /></Link></Col>)}
            </Row>
        </>

        :
        // DESKTOP
        <>
            <SwipeableDrawer open={drawerState.open} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
                <Row noGutters className={styles.desktopContainer}>
                    {dashNavItem.map(navItem => <Col className={styles.desktopItemContainer} key={navItem.id}><Link href={navItem.link}><img src={navItem.icon} className={styles.icon} /></Link><span>{navItem.label}</span></Col>)}
                </Row>
            </SwipeableDrawer>
            <Col className={styles.actionButtons}>
                <img
                    onClick={toggleDrawer(true)}
                    className={styles.exit} src="/dashboard-menu.png" alt="exit"
                    onMouseOver={e => (e.currentTarget.src = "/dashboard-menu-red.png")}
                    onMouseLeave={e => (e.currentTarget.src = "/dashboard-menu.png")}
                />
                <img
                    className={styles.exit} src="/log-out.png" alt="exit"
                    onMouseOver={e => (e.currentTarget.src = "/log-out-red.png")}
                    onMouseLeave={e => (e.currentTarget.src = "/log-out.png")}
                />
            </Col>
        </>
}

export default dashNav
