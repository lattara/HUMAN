import React from 'react'
import styles from '../styles/Cart.module.scss'
import { Row, Col } from 'react-bootstrap'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import HumanButton from '../components/button/Button';

function cart() {
    const articles = [

        {
            id: 1,
            name: 'Product 1',
            description: 'Description of the product in 2 lines of fext in 2 lines of fext ',
            isSold: false,
            category: 'necklace',
            tags: ['tag1', 'tag2', 'tag3'],
            price: "37.00",
            image: 'https://picsum.photos/id/163/250/300'
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description of the product in 2 lines of fext in 2 lines of fext ',
            isSold: false,
            category: 'necklace',
            tags: ['tag1', 'tag2', 'tag3'],
            price: "32.00",
            image: 'https://picsum.photos/id/163/250/300',

        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description of the product in 2 lines of fext in 2 lines of fext ',
            isSold: false,
            category: 'necklace',
            tags: ['tag1', 'tag2', 'tag3'],
            price: "31.00",
            image: 'https://picsum.photos/id/163/250/300',

        },
    ]

    const user = {
        id: 1,
        firstname: 'Charlotte',
        lastname: 'Blub'
    }
    return (
        <Row noGutters className={styles.panierContainer}>
           <Col xs={12} sm={12} lg={6} xl={5}><img src="/panier-presentation.png" alt=""/></Col>

            <Col xs={11} sm={11} lg={6} xl={5} className={styles.cartBlock}>
                <Col className={styles.greeting}>
                    <span>Bonjour <em>{user.firstname}</em>,</span>
                    <span>  bienvenue dans votre panier</span>
                </Col>
                <TableContainer className={styles.table}>
                    <Table aria-label="simple table">
                        <TableBody>
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
                                {/* if order more than 50 euro postage is free add this */}
                                <TableCell align="right">€104.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Col>
                    <HumanButton style={"full"}
                        text={"Vérifier et payer"}
                        buttonImage="send.png"
                    /></Col>
            </Col>
        </Row>
    )
}

export default cart
