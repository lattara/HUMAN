import React from 'react'
import styles from "./Logo.module.scss"
import Typewriter from 'typewriter-effect';

function Logo(props) {

    const renderMainPage =
        <div className={`${styles.containerMain} row`}>
            <div className={`${styles.logoMain}`}>
                <Typewriter options={{
                    cursorClassName: 'cursor',
                    autoStart: true,
                }}
                    onInit={(typewriter) => {
                        typewriter.typeString('HUMAN')
                            .pauseFor(700)
                        typewriter.typeString('. ')
                            .pauseFor(2500)
                            .start()
                    }} />
                <div className={styles.undertitleMain}>Bijoux au pieres natureles</div>
            </div>
        </div>

    const renderOtherPage = <div className={`${styles.container} row`}>
        <div className={styles.logo}>
            
            HUMAN <span className={styles.undertitle}>{props.undertitle}</span>
            <div className={styles.divider}></div>
        </div>
        <div className={styles.dividerMobile}></div>
    </div>


    return (
        <React.Fragment>
            {props.isMain ? renderMainPage : renderOtherPage}
        </React.Fragment>

    )
}

export default Logo
