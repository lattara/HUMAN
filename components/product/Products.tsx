import React from 'react'
import { productsMock } from './productsMOCK'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Row, Col } from 'react-bootstrap'
import styles from './Products.module.scss'
import HumanButton from '../button/Button'


//https://www.npmjs.com/package/react-multi-carousel


function Products() {
    const carouselSettings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: true,

    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            ssr={true} // render carousel on server-side.
            infinite={true}>

            {productsMock.map(product =>
                <Col key={product.id} className={styles.card}>
                    <img className={styles.image} src={product.image} alt="product-image" />
                    <span className={styles.desktopPrice}>€{product.price}</span>
                    <HumanButton
                        style={"full"}
                        text={"Je le veux!"}
                        buttonImage="shopping.png"
                    />
                    <HumanButton
                        style={"full"}
                        text={"Plus de détails"}
                        status="disabled"
                        buttonImage="stone.png" />
                </Col>

            )}
        </Carousel>

    )
}

export default Products
