import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
function home() {
    return (
            <div className={`${styles.container} row`}>
                <div className={`${styles.divider} col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12`}></div>
                <div className={`${styles.yellowBlock} col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12`}></div>   
            </div>
            
    )
    
}

export default home
