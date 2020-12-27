import React from 'react'
import Slider from "react-slick"
import { productsMock } from './productsMOCK'
import styles from './Products.module.scss'


function Product() {

    const carouselSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...carouselSettings} className={styles.container}>
            {
                productsMock.map(product =>
                    <div className={styles.cardContainer}>
                        <img className={styles.image} key={product.id} src={product.image} />
                        <ul>
                            <li>{product.name}</li>
                            <li>{product.description}</li>
                            <li>{product.price}</li>
                            <li>{product.tags}</li>
                        </ul>
                    </div>
                )
            }
        </Slider>
    )
}

export default Product
