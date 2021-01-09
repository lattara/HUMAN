import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Home.module.scss'

function bracelets() {
    return (
        <div>
             <Logo productCategory={"bracelet"}/>
             <div className={`${styles.dividerTop} col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12`}></div>
        </div>
    )
}

export default bracelets
