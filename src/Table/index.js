import React from 'react'
import TableBody from './TableCell'
import TableFooter from './TableFooter'

const Table = ({ appointments, pointedHours, handleTextUpdate }) => (
    <table className='table'>
        <thead>
            <tr>
                <th>Horário</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <TableBody
            appointments={appointments}
            handleTextUpdate={handleTextUpdate}
        />
        <TableFooter
            dates={appointments}
            pointedHours={pointedHours}
        />
    </table>
)

export default Table