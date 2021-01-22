import React from 'react'
import Table from '../../components/table/HumanTable'
import {dataMOCK} from "../../components/table/data.MOCK"

function products() {
    return (
        <div>
            <Table data={dataMOCK} />
        </div>
    )
}

export default products
