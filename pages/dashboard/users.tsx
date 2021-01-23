import React from 'react'
import Table from '../../components/table/HumanTable'
import { dataMOCK } from "../../components/table/data.MOCK"
import { Row, Col } from 'react-bootstrap'

function users() {
    return (
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h2>Liste de tous les utilisateurs </h2>
                <dd>
                    Les utilisateurs ne peuvent pas être supprimés. 
                    Si tu veux voir l'command de chaque utilisateur, cliquez sur l'icône en forme d'œil.</dd>
            </Col>
            <Col>
                <Table data={dataMOCK} />
            </Col>
        </Row>
    )
}

export default users
