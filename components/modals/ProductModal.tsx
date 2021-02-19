import React from 'react'
import styles from './ProductModal.module.scss'
import { Modal, Col, Row } from 'react-bootstrap';
import HumanButton from '../button/Button';


function ProductModal(props) {
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
                <Row>
                    <Col lg={6}>
                   <img src="/presentation1.png" alt=""   />
                    </Col>
                    <Col lg={4}>
                        <h4>{props.product.name}</h4>
                        <p> {props.product.description}</p>
                        <p>{props.product.price},00€</p>
                        <Row>{props.product.tags.map(eachTag=> <div key ={props.product.tags.indexOf(eachTag)} className={styles.tag}>{eachTag}</div>)}</Row>
                    </Col>
                    </Row>
            </Modal.Body>
            <Modal.Footer className={styles.header}>
            <HumanButton
                                style={"full"}
                                text={"Fermer"}
                                status="disabled"
                                buttonImage="magic.png"
                                tooltip="Voir les détails" 
                                onClick={props.onHide}
                                />
            </Modal.Footer>
        </Modal>
    );
}
export default ProductModal
