import React from 'react'
import Table from '../../components/table/HumanTable'
import { dataMOCK } from "../../components/table/data.MOCK"
import { Row, Col } from 'react-bootstrap'

function orders() {
    return (
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h2>Des commandes</h2>
                <dd>Voir toutes les commandes</dd>
            </Col>
            <Col>
                <Table data={dataMOCK} />
            </Col>
        </Row>
    )
}

export default orders
