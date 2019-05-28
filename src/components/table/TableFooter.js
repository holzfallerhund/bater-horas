import React from 'react'

const TableFooter = ({ dates, pointedHours }) => {
    if (dates.length > 0) {
        return (
            <tfoot>
                <tr>
                    <th>Total de horas:</th>
                    <th>{ pointedHours }</th>
                </tr>
            </tfoot>
        )
    }

    return null
}

export default TableFooter
