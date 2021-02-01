import React from 'react'
import Slider from "react-slick"
import HumanButton from '../button/Button'
import { productsMock } from './productsMOCK'
import styles from './Products.module.scss'
import { Row, Col } from 'react-bootstrap'

function Products() {
    const carouselSettings = {
        infinite: true,
        slidesToShow: 6,
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
                    slidesToShow: 2,
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
                        <img className={styles.image} src={product.image} alt="product-image" />
                        <Col className={styles.overlay}>
                            <span>€{product.price}</span><button>Plus d'info</button><button>Ajouter au panier</button>
                        </Col>
                        <Col className={styles.desktopOverlay}>
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
                    </Row>
                )
            }
        </Slider>
    )
}

export default Products
