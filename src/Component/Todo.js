// import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "..//App.css";
import { TextField, Button, Table } from "@mui/material";
import InputText from "./InputText";
import Buttons from "./Buttons";
import Tables from "./Tables";
import Image from "./Image";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  });

  //getLocalStorage in console start
  const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);
  };
  useEffect(() => {
    getLocalItems();
  }, [getLocalItems]);
  //getLocalStorage in console end

  //addData Function
  const addItems = () => {
    setItems([inputData, ...items]);
    setInputData("");
  };

  //Delete Data fucntion
  const onDelete = (id) => {
    setItems((value) => {
      return value.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  //Remove All fucntion
  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="container">
        <br />
       <Image/>
        <br />  
        <InputText inputdata={inputData} setinputdata={setInputData} />
        <br />
        <br />
        <Buttons additems={addItems} removeall={removeAll} />
        <Tables items={items} ondelete={onDelete} />
      </div>
    </>
  );
}

export default Todo;
