// import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "..//App.css";
import InputText from "./InputText";
import Buttons from "./Buttons";
import Tables from "./Tables";
import Image from "./Image";
import 'react-toastify/dist/ReactToastify.css';
import { toast ,ToastContainer} from "react-toastify";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(items));
  });

  //addData Function
  const addItems = () => {
    if(inputData.length === 0 ){
        console.log("Please Add Some Text")
        toast.error("Bhai, Bina Kisi Data Ke Kese Kru ADD!!",{position:"top-right"})
    }
    else{
      toast.success("Data Added Succesfully",{position:"top-right"})
      setItems([inputData, ...items]);
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
    toast.warning("Data Cleared",{position:"top-center"})
    setItems([]);
  };

  //edit function
  const editHandler = (id)=>{
    const findValue = items.filter((value)=>value === id)
    setInputData(findValue)
  }

  return (
    <>
      <div className="container">
        <br />
        <Image />
        <br />
        <InputText inputdata={inputData} setinputdata={setInputData} adddata={addItems} />
        <br />
        <br />
        <Buttons additems={addItems} removeall={removeAll} />
        <Tables items={items} ondelete={onDelete} edit={editHandler} />
        <ToastContainer />

      </div>
    </>
  );
}
export default Todo;
