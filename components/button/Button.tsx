import styles from "../button/Button.module.scss"
import React from 'react'


const HumanButton = (props) => {

    type buttonState = 'full' | 'outline';
    
    type props = {
        state: buttonState,
        status: "active" | "disabled" | "warning"
        text: '',
        callback: Event ,
        icon: String,
        onClick: Function,
    }
        switch (props.state) {
            case 'full':
              return <button 
                    onClick={props.onClick}
                    className={props.status === "active" ? styles.active : styles.disabled}>
                    <img className={styles.buttonImage} src={props.buttonImage}/>
                    {props.text}
                </button>
            case 'outline':
                return <button 
                onClick={props.onClick}
                className={props.status === "active" ? styles.active : styles.disabled}>
                <img className={styles.buttonImage} src={props.buttonImage}/>
                {props.text}
            </button>
            case 'warning':
                return <button onClick={props.onClick}
                className={styles.warning}>
                <img className={styles.buttonImage} src={props.buttonImage}/>
                </button>
                {props.text}
            default:
              return null;
          }
}

export default HumanButton
