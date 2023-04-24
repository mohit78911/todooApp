// import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ".//App.css";
import { TextField, Button } from "@mui/material";

function App() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  } );
  
  //getLocalStorage in console start
  const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);
  };
  useEffect(() => {
    getLocalItems();
  },[getLocalItems]);
  //getLocalStorage in console end

  //addData Function
  const addItems = () => {
    setItems([inputData, ...items]);
    setInputData("");
  };

  //Delete Data fucntion
  const onDelete = (id) => {
 
    setItems((value)=>{
      return value.filter((arrElem,index)=>{
        return index !== id;
      })
    })
  };

  //Remove All fucntion
  const removeAll = () => {
    setItems([]);
  };

 

  return (
    <>
      <div className="container">
        <br />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/1200px-Google_Tasks_2021.svg.png"
          width={100}
        />
        <br />
        <br />
      
        &nbsp;
        <TextField
          label="ADD YOUR DATA"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        &nbsp;&nbsp;
        <Button variant="outlined" className="me-2" onClick={() => addItems()}>
          Add
        </Button>
        <Button variant="outlined"  onClick={() => removeAll()}>
         Clear All
        </Button>
        <table className="table">
          <br />
          {items.map((value, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{value}</th>
              <th>
                <Button variant="outlined" onClick={() => onDelete(index )}>
                  Delete
                </Button>
              </th>
            </tr>
          ))}
        </table>
      </div>
       
    </>
  );
}

export default App;
