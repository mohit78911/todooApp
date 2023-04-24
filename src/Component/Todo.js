// import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "..//App.css";
import InputText from "./InputText";
import Buttons from "./Buttons";
import Tables from "./Tables";
import Image from "./Image";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(items));
  });

  //addData Function
  const addItems = () => {
    if(inputData == 0 ){
        alert("Bhai, Bina Kisi Data Ke Kese Kru ADD!!")
    }
    else{setItems([inputData, ...items]);
        setInputData("");}
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
        <Image />
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
