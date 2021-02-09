import React, { useEffect, useState } from 'react'
import { productsMock } from './productsMOCK'
import ItemsCarousel from 'react-items-carousel';
import "react-multi-carousel/lib/styles.css"
import { Col } from 'react-bootstrap'
import styles from './Products.module.scss'
import HumanButton from '../button/Button'
import { useViewport } from "../../customHooks"


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
                leftChevronWrapper: "leftChevronWrapper"}}
                >
            {productsMock.map(product =>
                <Col key={product.id} className={styles.card}>
                    <img className={styles.image} src={product.image} alt="product-image" />
                    <div className={styles.buttonContainer}>
                            <HumanButton
                                style={"mobile"}
                                text={"Je le veux!"}
                                buttonImage="shopping.png"
                                tooltip="Ajouter au panier" />
                            <HumanButton
                                style={"mobile"}
                                text={"Plus de détails"}
                                status="disabled"
                                buttonImage="stone.png"
                                tooltip="Voir les détails" />
                    </div>
                    <div className={styles.price}>€{product.price},00</div>
                </Col>
            )}
        </ItemsCarousel>
    )
}

export default Products
