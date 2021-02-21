import React, { useState } from 'react'
import Table from '../../components/table/HumanTable'
import { dataMOCK } from "../../components/table/data.MOCK"
import { Row, Col, Tab, Tabs } from 'react-bootstrap'
import DashProductForm from '../../components/dashboard/DashProductForm';


function products() {
    const [key, setKey] = useState('new');



    return (

        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="list" title="Liste de produits déjà ajoutée">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h2>Des produits</h2>
                        <dd>Ici tu peux modifier / supprimer ton produits</dd>
                    </Col>
                    <Col style={{ overflow: "scroll" }}>
                        <Table data={dataMOCK} />
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="new" title="Ajouter de nouveaux produits">
                <Row >
                    <Col>
                        <Row>
                            <h2>Des produits</h2>
                            <dd>Ici tu peux ajouter un nouveau produit</dd>
                            <Col xs={12} sm={12} md={10} lg={12} xl={12}><DashProductForm /></Col>
                        </Row>
                    </Col>
                </Row>

            </Tab>
        </Tabs>



    )
}

export default products
