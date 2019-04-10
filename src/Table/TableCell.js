import React from 'react'
import { format } from 'date-fns'

const TableBody = ({ appointments }) => {
    return (
        <tbody>
            {(appointments.length % 2 === 0
                ? appointments
                : appointments).map((appointment, index) =>
                    <tr key={index} id={appointment.id}>
                        { console.log(appointment) }
                        <th>{format(appointment.date, 'YYYY-MM-DD HH:mm:ss')}</th>
                        <th>
                        <input
                            className="input"
                            type="text"
                            placeholder="Justifique"
                            value={ appointment.description }
                        />
                        </th>
                    </tr>
                )}
        </tbody>
    )
}

export default TableBody