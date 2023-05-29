import React from "react";
import { TextField, Button } from "@mui/material";
import "../App.css"

function InputText(props) {
  return (
    <>
      <TextField fullWidth 
        label="ADD YOUR DATA"
        value={props.inputdata}
        onChange={(e) => props.setinputdata(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key === "Enter"){
            props.adddata()
          }
        }}
      />
    </>
  );
}
export default InputText;
