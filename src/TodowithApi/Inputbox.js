    import React from 'react'
    import {TextField ,Button} from "@mui/material"
    import "./Todoo.css" 


    export default function InputField(props) {
      return (
        <div>
            <form onKeyDown={(e) => {
        if (e.key === "Enter") {
          props.addDataHandler();
        }
      }} className='container setWidth'  >
        <TextField fullWidth className='m-2' label="Title" value={props.title} onChange={(e) => props.setTitle(e.target.value)} />
        <TextField fullWidth className='m-2' label="Description" value={props.description} onChange={(e) => props.setDesciption(e.target.value)} /><br />
        <Button onClick={() => props.addDataHandler()}>Add Data</Button>
        <Button onClick={() => props.editHandler()}>edit</Button>
        <Button onClick={() => props.nullValueHandler()}>Clear Box's</Button>

      </form>
        </div>
      )
    }
    