import styles from "../button/Button.module.scss"
import React from 'react'
import Tooltip from "@material-ui/core/Tooltip";


const HumanButton = (props) => {

    type style = "full" | "outline" | "warning" | "mobile";
    
    type props = {
        style: style,
        text: "",
        callback: Event,
        icon: String,
        tooltip: String,
        onClick: Function,
    }
        switch (props.style) {
            case 'full':
              return <button type="submit"
                    onClick={props.onClick}
                    className={styles.full}>
                    {props.text}
                    <img className={styles.buttonImage} src={props.buttonImage}/>                   
                </button>
            case 'outline':
                return <button type="submit"
                onClick={props.onClick}
                className={styles.outline}>
                {props.text}
                <img className={styles.buttonImage} src={props.buttonImage}/>
            </button>

            case "mobile":
                return <Tooltip title={props.tooltip} placement="top">
                <button type="submit"
                onClick={props.onClick}
                className={styles.mobile}>
                <img className={styles.buttonImageMobile} src={props.buttonImage}/>
            </button>
            </Tooltip>
            case 'warning':
                return <button type="submit" onClick={props.onClick}
                className={styles.warning}>
                {props.text}
                <img className={styles.buttonImage} src={props.buttonImage}/>
                </button>
                
            default:
              return null;
          }
}

export default HumanButton
