import React from 'react'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { Paper, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import styles from "./HumanTable.module.scss"

function HumanTable(data) {
    const headers = Object.keys(data.data[0])
    const rows = data.data.map(row=>row)

    return (
        <TableContainer component={Paper} >
            <Table>
            <TableHead>
                <TableRow key={headers.indexOf(rows)}>
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
