import React, { useEffect, useState } from 'react'
import { productsMock } from './productsMOCK'
import ItemsCarousel from 'react-items-carousel';
import "react-multi-carousel/lib/styles.css"
import { Row, Col } from 'react-bootstrap'
import styles from './Products.module.scss'
import HumanButton from '../button/Button'
import { useViewport } from "../../customHooks"

//https://www.npmjs.com/package/react-multi-carousel

function Products() {
    const [numberOfSlides, setNumberOfSlides] = React.useState(0);
    const { width } = useViewport();
    const breakpoint = 922;
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    useEffect(() => {
        if (width < breakpoint) {
            setNumberOfSlides(1)
        } else {
            setNumberOfSlides(6)
        }
    }, [width])

    return (
        <ItemsCarousel
            infiniteLoop={false}
            gutter={10}
            alwaysShowChevrons={true}
            numberOfCards={numberOfSlides}
            slidesToScroll={2}
            showSlither={true}
            firstAndLastGutter={true}
            activeItemIndex={activeItemIndex}
            requestToChangeActive={setActiveItemIndex}
            rightChevron={width > breakpoint ? <img src={"right-arrow.png"} className={styles.arrowLeft} /> : null}
            leftChevron={width > breakpoint ? <img src={"left-arrow.png"} className={styles.arrowLeft} /> : null}
            classes={{
                wrapper: "wrapper",
                itemsWrapper: "itemsWrapper",
                rightChevronWrapper: "rightChevronWrapper",
                leftChevronWrapper: "leftChevronWrapper"
            }
            }
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
        </ItemsCarousel>
    )
}

export default Products
