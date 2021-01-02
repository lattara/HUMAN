import React from 'react'
import Slider from "react-slick"
import { productsMock } from './productsMOCK'
import styles from './Products.module.scss'


function Product() {
    // it is necessary to load images dynamically to resolve a bug in the Slick Slider package

    const carouselSettings = {
        dots: true,
        autoplay: false,
        infinite: false,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: Math.min(productsMock.length, 4),
        rows: 1,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: Math.min(productsMock.length, 4),
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(productsMock.length, 5),
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    return (
        <>
        <Slider {...carouselSettings} className={styles.container}>
            {
                productsMock.map(product =>
                    
                        <ul className={styles.card}>
                            <li><img className={styles.image} key={product.id} src={product.image} /></li>
                            <li className={styles.name}>{product.name}</li>
                            <li className={styles.description}>{product.description}</li>
                            <li className={styles.price}>{product.price},00€</li>
                            <li className={styles.tags}>{product.tags.map(tag => <span className={styles.tag} key={product.tags.indexOf(tag)}>{` ${tag}`}</span>)}</li>
                            <li className={styles.buttons}><button>Buy</button> <button>More details</button></li> 
                        </ul>
                )
            }
        </Slider>
        </>
    )
}

export default Product
