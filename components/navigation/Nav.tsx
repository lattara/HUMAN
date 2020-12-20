import React from 'react'
import styles from './Nav.module.scss'
import navItems from './NavItems.list'

function Nav() {    
    const topNav=navItems.filter(navBarItem => navBarItem.id === 1 || navBarItem.id === 2 )
    const bottomNav=navItems.filter(navBarItem => navBarItem.id != 1 && navBarItem.id != 2 )
  
    return (
        <>
            <ul className={`${styles.topNav}`}>
               {
               topNav.map(navItem => <li key = {navItem.id} className={styles.navIcon}><img src={navItem.icon} /></li>
               )} 
            </ul>
            <ul className={`${styles.bottomNav}`}>
               {
               bottomNav.map(navItem => <li key = {navItem.id} className={styles.navIcon}><img src={navItem.icon} /><span>{navItem.label}</span></li>
               )} 
            </ul>
        </>
    )
}

export default Nav
