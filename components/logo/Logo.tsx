import React from 'react'
import styles from "./Logo.module.scss"
import Typewriter from 'typewriter-effect';
import Nav from '../navigation/Nav';

function Logo(props) {
    return (
        <div >
            <div >
                <div className={`${styles.blockTexture} col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 m-0`}>
                    <div className={` ${styles.logo} col-sm-12 col-md-12 col-lg-9 col-xl-9 p-0 m-0`}>
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
                    </div>
                    {props.title && <div>{props.title}</div>}
                </div>
                <div className={`${styles.divider} col-12`}></div>
                <div className={`${styles.yellowBlock} col-12`}>
                    {props.isMain && <div>Bijoux au pierres naturelles</div>}
                </div>
            </div>
        </div>
    )
}

export default Logo


