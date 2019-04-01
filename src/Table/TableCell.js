import React from 'react'
import { format } from 'date-fns'

const TableCell = ({ appointments }) => {
    return (
        (appointments.length % 2 === 0
            ? appointments
            : appointments).map((appointment, index) =>
                <tr key={index}>
                    <td>{format(appointment.date, 'YYYY-MM-DD HH:mm:ss')}</td>
                </tr>
            )
    )
}

export default TableCell