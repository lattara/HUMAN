import styles from './HumanNav.module.scss'
import navItems from './NavItems.list'
import Link from 'next/link'
import { Nav, Col, NavLink } from 'react-bootstrap'
import Tooltip from "@material-ui/core/Tooltip";

function HumanNav(props) {
    const loggedUser = { name: 'Name', role: 'admin' }
    const topNav = navItems.filter(navBarItem => navBarItem.id === 0 || navBarItem.id === 1 || navBarItem.id === 2 || loggedUser.role === "admin" && navBarItem.id === 3)
    const bottomNav = navItems.filter(navBarItem => navBarItem.id != 0 && navBarItem.id != 1 && navBarItem.id != 2 && navBarItem.id != 3)

    if (props.position === "top") {
        return (
            <Nav className={styles.topNav}>
                {
                    topNav.map(navItem =>
                        <Nav.Link href={navItem.link} key={navItem.id} bsPrefix={styles.navIcon}>
                            <Tooltip
                                title={navItem.label}
                                placement="top">
                                <img src={navItem.icon} />
                            </Tooltip>
                        </Nav.Link>
                    )}
            </Nav>
        )

    } else if (props.position === "bottom") {
        return (
            <Nav className={styles.bottomNav}>
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
            </Nav>
        )}
}

export default HumanNav
