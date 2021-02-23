import React, { useEffect, useState } from 'react'
import styles from './ProductModal.module.scss'
import { Modal, Col, Row } from 'react-bootstrap';
import HumanButton from '../button/Button';
import ModalSlider from './ModalSlider';


function ProductModal(props) {

console.log(props)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName={styles.modal}
        >
            <Modal.Header className={styles.header} closeButton>
            </Modal.Header>
            <Modal.Body>
                <Row className={styles.modalBody} >
                    <Col lg={6}>
                        {/* <img src="/presentation1.png" alt=""   /> */}
                        <ModalSlider />
                    </Col>
                     {/* <Col lg={4}>
                        <h4>{props.product.name}</h4>
                        <p> {props.product.description}</p>
                        <p>{props.product.price},00€</p>
                        <Row>{props.product.tags.map(tag => <div key={props.product.tags.indexOf(tag)} className={styles.tag}>{tag}</div>)}</Row>
                    </Col>  */}
                </Row>
            </Modal.Body>
            <Modal.Footer className={styles.header}>
                <HumanButton
                    style={"full"}
                    text={"Fermer la fenêtre"}
                    status="disabled"
                    buttonImage="magic.png"
                    tooltip="Voir les détails"
                    onClick={props.onHide}
                />
                <HumanButton
                    style={"full"}
                    text={"Ajouter au panier"}
                    status="disabled"
                    buttonImage="cart.png"
                    tooltip="Voir les détails"
                    onClick={props.onHide}
                />
            </Modal.Footer>
        </Modal>
    );
}
export default ProductModal
