import styles from "../button/Button.module.scss"
import React from 'react'


const HumanButton = (props) => {

    type buttonState = 'full' | 'outline';
    
    type props = {
        state: buttonState,
        status: "active" | "disabled",
        text: '',
        callback: Event ,
        icon: String
    }
        switch (props.state) {
            case 'full':
              return <button 
                    className={props.status === "active" ? styles.active : styles.disabled}>
                    <img className={styles.buttonImage} src={props.buttonImage}/>
                    {props.text}
                </button>
            case 'outline':
                return <div>outline</div>
            default:
              return null;
          }
}

export default HumanButton
