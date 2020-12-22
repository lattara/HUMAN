import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
function home() {
    return (
            <div className={styles.container}>
                <Logo isMain={true}/>
                <div className={styles.divider}></div>
                <div className={styles.yellowBlock}></div>   
            </div>      
    )   
}

export default home
