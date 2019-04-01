import React from 'react'

const TableFooter = ({ dates, pointedHours  }) => {
    if (dates.length > 0) {
      return (
        <tfoot style={ {backgroundColor: "pink" } }>
          <tr>
            <td>{ pointedHours  }</td>
          </tr>
        </tfoot>
      )
    }

    return null
  }

  export default TableFooter