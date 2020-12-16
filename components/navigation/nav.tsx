import React from 'react'
import styles from './nav.module.scss'
import navItems from './nav.items.list'

function nav() {    
    const topNav=navItems.filter(navBarItem => navBarItem.id === 1 || navBarItem.id === 2 )
    const bottomNav=navItems.filter(navBarItem => navBarItem.id != 1 && navBarItem.id != 2 )
  
    return (
        <div className={`${styles.navContainer} p-0`}>
            <ul className={`${styles.topNav} p-0 m-0`}>
               {
               topNav.map(navItem => <li key = {navItem.id} className={styles.navIcon}><img src={navItem.icon} /></li>
               )} 
            </ul>
            <ul className={`${styles.bottomNav} p-0 m-0`}>
               {
               bottomNav.map(navItem => <li key = {navItem.id} className={styles.navIcon}><img src={navItem.icon} /><span>{navItem.label}</span></li>
               )} 
            </ul>
        </div>
    )
}

export default nav
