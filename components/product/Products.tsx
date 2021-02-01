import React from 'react'
import Slider from "react-slick"
import HumanButton from '../button/Button'
import { productsMock } from './productsMOCK'
import styles from './Products.module.scss'
import { Row, Col } from 'react-bootstrap'

function Products() {
    const carouselSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 922,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                // settings: "unslick"
            }

        ]
    };

    return (
        <Slider {...carouselSettings} >
            {
                productsMock.map(product =>
                    <Row>
                        <img className={styles.image} src={product.image} alt="product-image"/>
                        <Col className={styles.overlay}>
                        <img className={styles.detailsIcon} src={"/details.png"} alt="product-image"/>
                        <span> €{product.price}</span><button>Details</button><button>Ajouter au panier</button>
                        </Col>
                    </Row>       
                )
            }
        </Slider>
    )
}

export default Products
