import React, { useEffect, useState } from 'react'
import dashNavItem from './dashNavItems.list'
import { SwipeableDrawer } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import styles from "./DashNav.module.scss"


function dashNav() {
    const [state, setState] = React.useState({
        open: true
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, open });
    };

    const winWidth = () => {
        const [width, setWidth] = useState(0); // default width, detect on server.
        const handleResize = () => setWidth(window.innerWidth);
        useEffect(() => {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [handleResize]);
        return width;
    };


    if (winWidth() > 992) {
        return (
            <>
                <SwipeableDrawer open={state.open} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
                    <Row className={styles.desktopContainer}>
                        {dashNavItem.map(navItem => <Col className={styles.desktopItemContainer} key={navItem.id}><img src={navItem.icon} /></Col>)}
                    </Row>
                </SwipeableDrawer>
                <button onClick={toggleDrawer(true)}>Open</button>
            </>
        )
    } else {
        return (
            <>
                <Row className={styles.mobileContainer}>
                    {dashNavItem.map(navItem => <Col className={styles.mobileItemContainer} key={navItem.id}><img src={navItem.icon} /></Col>)}
                </Row>
            </>
        )

    }


}

export default dashNav
