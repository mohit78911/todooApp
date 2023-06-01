import React from 'react'
import "../App.css"

 function Table(props) {
  const editHandler = (id)=>{
    const findlist = props.items.find((value)=>value === id)
    props.setInputData(findlist)
  }
  return (
    <div>
          <table className="table">
           <tbody>
          {props.items.map((value, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th><b>{value}</b></th>
              <th>
                <button className='btn btn-warning' onClick={()=>editHandler(value)}><b>Edit</b></button>
              </th>
              <th>
                <button className='btn btn-primary' onClick={() => props.ondelete(index  )}>
                <b>Delete</b>
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