import React from 'react'
import Slider from "react-slick"
import { productsMock } from './productsMOCK'
import styles from './Products.module.scss'


function Product() {

    const carouselSettings = {
        dots: true,
        autoplay: false,
        infinite: false,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 6,
        rows: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    rows: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
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
