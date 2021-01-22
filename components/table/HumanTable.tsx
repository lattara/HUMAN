import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { Paper, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';


function HumanTable(data) {
    // const tableHeaders = Object.keys(data.data[0])
    const [headers, setHeaders] = useState([])
    const [rows, setRows] = useState([])
    const [columns, setColumns] = useState([])

    useEffect(() => {
        setHeaders(Object.keys(data.data[0]))
        setRows(data.data.map(row => row))
        setColumns(rows.map(cell=>Object.values(cell)))
    }, [])


    console.log(columns)


    return (

        <TableContainer component={Paper}>
            <TableHead>
                <TableRow>
                    {headers.map(header => <TableCell>{header}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, rowIndex) =>
                    <TableRow key={rowIndex}>
                        {Object.values(row).map(col=><TableCell>
                            { typeof col==="object" ? Object.keys(col).length : col}
                            </TableCell>)}  
                    </TableRow>)
                }
            </TableBody>

        </TableContainer>

    )
}

export default HumanTable
