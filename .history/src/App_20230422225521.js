import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ".//App.css";

function App() {
  const [inputData, setInputData] = useState("");
  const [id, setId] = useState("");
  const [items, setItems] = useState([]);

  //   const getLocalItems = ()=>{
  // 	let list = localStorage.getItem("lists")
  // 	console.log(list)
  // 

  const addItems = () => {
    if (!inputData) {
    } else {
      setItems([inputData, ...items]);
      setInputData("");
    }
  };

  const deleteData = (id) => {
    console.log(id);
    const updateItems = items.filter((elem, ind) => {
      return ind === id;
    });
  };

  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
  //   useEffect(()=>{
  // 	getLocalItems()
  //   })
  return (
    <>
      <div className="center">
        <br />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/1200px-Google_Tasks_2021.svg.png"
          width={100}
        />
        <br />
        <br />
        {/* <TextField
          label="Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        /> */}
        &nbsp;
        <TextField
          label="ADD YOUR DATA"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        &nbsp;&nbsp;
        <Button variant="outlined" onClick={() => addItems()}>
          Add
        </Button>
        <Button variant="outlined" onClick={() => removeAll()}>
          remove
        </Button>
        <table className="table">
          <br />
          {items.map((value, i) => (
            <tr key={i}>
              <th>{value}</th>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
export default App;
