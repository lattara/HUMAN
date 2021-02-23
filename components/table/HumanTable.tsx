import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { Box, Collapse, IconButton, Paper, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import styles from "./HumanTable.module.scss"
import { Col, Row } from 'react-bootstrap';



function HumanTable(data) {
    const [headers, setHeaders] = useState([])
    const [rows, setRows] = useState([])

    useEffect(() => {
        setHeaders(Object.keys(data.data[0]))
        setRows(data.data.map(row => row))
    }, [])

    return (
        <TableContainer component={Paper} >
            <Table>
            <TableHead>
                <TableRow key={headers.indexOf()}>
                    {headers.map(header => <TableCell className={styles.headers}>{header}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, rowIndex) =>
                    <TableRow key={rowIndex}>
                        {Object.values(row).map(col => <TableCell key={row.name}>
                            {typeof col === "object" ? 
                            <span> {Object.keys(col).length} <img onMouseOver={e => (e.currentTarget.src = "/eye-hoover.png")}
                            onMouseLeave={e => (e.currentTarget.src = "/eye.png")} className={styles.icon} src="/eye.png"/> </span>: col}
                        </TableCell>)}
                    </TableRow>)
                }
            </TableBody>
            </Table>
        </TableContainer>
    )
}

export default HumanTable
