// import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ".//App.css";
import { TextField, Button } from "@mui/material";

function App() {
  const [inputData, setInputData] = useState("");
  // const [id, setId] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  //getLocalStorage in console start
  const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);
  };
  //getLocalStorage in console end

  //addData Function
  const addItems = () => {
    setItems([inputData, ...items]);
    setInputData("");
  };

  //Delete Data fucntion
  const deleteData = (id) => {
    console.log(id);
    alert(id);
    setItems((current) => current.filter((list) => list.id !== id));
  };

  //Remove All fucntion
  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    getLocalItems();
  });
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
              <th>{i + 1}</th>
              <th>{value}</th>
              <th>
                <Button variant="outlined" onClick={() => deleteData(i + 1)}>
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
