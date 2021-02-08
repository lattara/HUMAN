import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react"
import styles from './Products.module.scss'

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div  className={styles.buttonContainer}>
        <img onClick={previous} src={"left-arrow.png"} className={styles.arrowLeft} />
        <img onClick={next} src={"right-arrow.png"} className={styles.arrowRight}/>
    </div>
  );
};

export {
  CustomButtonGroupAsArrows,
};