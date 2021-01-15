import React from 'react'
import Slider from "react-slick"
import { productsMock } from './productsMOCK'
import styles from './Products.module.scss'
import { Row, Col } from 'react-bootstrap';


function Products() {
    const carouselSettings = {
        dots: true,
        autoplay: false,
        infinite: false,
        autoplaySpeed: 3000,
        arrows: false,
        // it is necessary to load images dynamically to resolve a bug in the Slick Slider package
        slidesToShow: Math.min(productsMock.length, 4),
        rows: 1,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: Math.min(productsMock.length, 6),
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(productsMock.length,2),
                    slidesToScroll: 1,
                    rows: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: Math.min(productsMock.length, 2),
                    slidesToScroll: 1,
                    rows: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: Math.min(productsMock.length, 1),
                    slidesToScroll: 1,
                    rows: 1,
                }
            }
    
        ]
    };

    return (
        <Col  xs={12} sm={12} md={12} lg={{span: 10, offset:1}} xl={{span: 10, offset:1}} className = {styles.productsContainer}>
        <Slider {...carouselSettings} >
            {
                productsMock.map(product =>
                        <Row noGutters className={styles.card}>
                            <Col className={styles.image}><img key={product.id} src={product.image} />
                                <div className={styles.overlay}>
                                     <button>Details</button>
                                    <button>I want it</button>
                                </div>
                            </Col>
                            <Col className={styles.name}>{product.name}</Col>
                            <Col className={styles.description}>{product.description}</Col>
                            <Col className={styles.price}>{product.price},00€</Col>
                            <Col className={styles.tags}>{product.tags.map(tag => <span className={styles.tag} key={product.tags.indexOf(tag)}>{` ${tag}`}</span>)}</Col>
                            <Col className={styles.buttons}><button>Buy</button> <button>More details</button></Col> 
                        </Row>
                )
            }
        </Slider>
        </Col>
    )
}

export default Products
