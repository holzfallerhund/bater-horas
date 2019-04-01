import React from 'react'
import TableBody from './TableCell'
import TableFooter from './TableFooter'

const Table = ({ appointments, pointedHours }) => (
    <table className='table'>
        <thead>
            <tr>
                <th>Horário</th>
            </tr>
        </thead>
        <TableBody
            appointments={appointments}
        />
        <TableFooter
            dates={appointments}
            pointedHours={pointedHours}
        />
    </table>
)

export default Table