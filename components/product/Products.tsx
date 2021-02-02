import React from 'react'
import Slider from "react-slick"
import HumanButton from '../button/Button'
import { productsMock } from './productsMOCK'
import styles from './Products.module.scss'
import { Row, Col } from 'react-bootstrap'

function Products() {

    return (
        <Row noGutters className={styles.productContainer} >
            {
                productsMock.map(product =>
                    <Col xs={10} sm={2} md={2} lg={4} xl={4} key={product.id} className={styles.card}>
                        <Row noGutters className={product.id % 2 == 0 ? styles.inner: null}>
                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <img className={styles.image} src={product.image} alt="product-image" />
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} xl={6} className={styles.details}> 
                            <span className={styles.price}>€{product.price}</span>
                            <span>{product.name}</span>
                            <p>{product.description}</p>
                            <div className={styles.buttonContainer}>
                            <HumanButton
                                style={"mobile"}
                                text={"Je le veux!"}
                                buttonImage="shopping.png"
                            />
                            <HumanButton
                                style={"mobile"}
                                text={"Plus de détails"}
                                status="disabled"
                                
                                buttonImage="stone.png" />
                            </div>
                            </Col>
                        
                        </Row>
                    </Col>

                )
            }
        </Row>
    )
}

export default Products
