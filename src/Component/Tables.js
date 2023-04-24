import React from 'react'
 
import "../App.css"

 function Table(props) {
  return (
    <div>
          <table className="table">
           <tbody>
          {props.items.map((value, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{value}</th>
              <th>
                <button className='btn btn-primary' onClick={() => props.ondelete(index  )}>
                  Delete
                </button>
              </th>
            </tr>
          ))}
          </tbody>
        </table>
    </div>
  )
}
export default Table;