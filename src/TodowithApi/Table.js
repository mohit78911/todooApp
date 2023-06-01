import React from 'react'
import { Button } from '@mui/material'
import "./Todoo.css"
export default function Table(props) {
  return (
    <div>
         <table className='table container setWidth wrap'  >
        <tbody>
          <tr>
            <th>S.No.</th>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Operaion</th>
          </tr>
          {
            props.data.map((value, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.description}</td>
                <td><Button onClick={() => props.deleteHandler(value.id)}>Delete</Button> <Button onClick={() => {
                  props.setId(value?.id)
                  props.setTitle(value?.title)
                  props.setDesciption(value?.description)
                }}>Edit</Button></td>
                <td></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
