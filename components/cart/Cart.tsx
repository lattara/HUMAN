import React from 'react'
import styles from "./Cart.module.scss"
import { Col, Row, Table } from 'react-bootstrap'
import { TableBody, TableRow, TableCell } from '@material-ui/core'
import HumanButton from '../button/Button'
import { articles } from './Cart.MOCKUP'

function Cart() {
    const user = {
        firstname: "Charlotte",
        lastname: "Smith"
    }
    return (
        <Row className={styles.cartBlock}>
            <Row noGutters>
                <Col className={styles.greeting}>Bonjour <em>{user.firstname},</em> bienvenue dans votre panier</Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Row>
                        <Table className={styles.table}>
                            {articles.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">€ {row.price}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow className={styles.tableRowTotal}>
                                <TableCell className={styles.total}>Total</TableCell>
                                <TableCell align="right">€103.00</TableCell>
                            </TableRow>
                            <TableRow className={styles.tableRow}>
                                <TableCell> Livraison</TableCell>
                                {/* if order more than 50 euro postage is free add this */}
                                <TableCell align="right">€4.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> Total à payer</TableCell>
                                <TableCell align="right">€104.00</TableCell>
                            </TableRow>
                        </Table>
                    </Row>
                </Col>
                <Col className={styles.button}>
                    <HumanButton style={"full"}
                        text={"Vérifier et payer"}
                        buttonImage="send.png"
                    />
                </Col>
            </Row>
        </Row>
    )
}

export default Cart
