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
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        centerPadding: '40px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    swipeToSlide: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                }
            }
        ]
    };
    return (
        <Slider {...carouselSettings} className={styles.container}>
            {
                productsMock.map(product =>
                        <img key={product.id} src={product.image} />
                )
            }
        </Slider>
    )
}

export default Product
