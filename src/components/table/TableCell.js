import React from 'react'
import { format } from 'date-fns'

const TableBody = ({ appointments, handleTextUpdate }) => {
    return (
        <tbody>
            { (appointments.length % 2 === 0 ? appointments : appointments).map(
                (appointment, index) => (
                    <tr key={ index } id={ appointment.id }>
                        <th>
                            { format(appointment.date, 'YYYY-MM-DD HH:mm:ss') }
                        </th>
                        <th>
                            <input
                                className='input'
                                type='text'
                                id={ appointment.id }
                                placeholder='Justifique'
                                onChange={ handleTextUpdate }
                                value={ appointment.description }
                            />
                        </th>
                    </tr>
                )
            ) }
        </tbody>
    )
}

export default TableBody
