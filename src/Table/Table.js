import React from 'react'
import TableCell from './TableCell'
import TableFooter from './TableFooter'

const Table = ({ appointments, pointedHours }) => (
    <table>
        <thead>
            <tr>
                <th>Horário</th>
            </tr>
        </thead>
        <tbody>
            <TableCell
                appointments={appointments}
            />
        </tbody>
        <TableFooter
            dates={appointments}
            pointedHours={pointedHours}
        />
    </table>
)

export default Table