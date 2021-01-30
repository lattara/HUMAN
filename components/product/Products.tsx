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
        arrows: true,
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
                        <div className={styles.card}>
                            <img src={product.image} alt="product-image" />
                            <HumanButton
                                    style={"mobile"}
                                    text={"Je le veux!"}
                                    buttonImage="shopping.png"
                                />
                            <div className={styles.details}>
                                <div className={styles.price}>{product.price}€</div>
                                
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className={styles.tags}>{product.tags.map(tag => <span className={styles.tag} key={product.tags.indexOf(tag)}>{` ${tag}`}</span>)}</div>
                               
                            </div>
                        </div>
                    </Row>

                )
            }
        </Slider>
    )
}

export default Products
