import React from 'react'
import { productsMock } from './productsMOCK'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Row, Col } from 'react-bootstrap'
import styles from './Products.module.scss'
import HumanButton from '../button/Button'
import {CustomButtonGroupAsArrows} from "./CustomArrows";

//https://www.npmjs.com/package/react-multi-carousel

function Products() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 922 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 922, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            showDots: true
        }
    };
    
    return (
        <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
        >

            {productsMock.map(product =>
                <Col key={product.id} className={styles.card}>
                    <img className={styles.image} src={product.image} alt="product-image" />

                    <Col className={styles.buttonContainer}>
                        <HumanButton
                            style={"mobile"}
                            text={"Je le veux!"}
                            buttonImage="shopping.png"
                        />
                        <HumanButton
                            style={"mobile"}
                            text={"Plus de détails"}
                            status="disabled"
                            buttonImage="stone.png" />
                        <div className={styles.price}>€{product.price},00</div>
                        <div className={styles.divider}></div>
                    </Col>

                </Col>

            )}
        </Carousel>
    )
}

export default Products
