// import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "..//App.css";
import InputText from "./InputText";
import Buttons from "./Buttons";
import Tables from "./Tables";
import Image from "./Image";
import 'react-toastify/dist/ReactToastify.css';
import { toast ,ToastContainer} from "react-toastify";
import axios from "axios";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(items));
  },[items]);

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
    const findValue = items.find((value)=>value === id)
    setInputData(findValue)
  }

  //final edit btn

  const editFinal = (e)=>{
    setInputData(inputData)
    setItems([...items, inputData])
  }

  const editnew = ()=>{
    axios.put(inputData)
    .then((result)=>setItems(inputData))
    .catch((error)=>console.log(error))
  }
  return (
    <>
      <div className="container mainClass">
        <br />
        <Image />
        <br />
        <InputText inputdata={inputData} setinputdata={setInputData} adddata={addItems} />
        <br />
        <br />
        <Buttons additems={addItems} removeall={removeAll} editfinal={editnew}/>
        <Tables items={items} ondelete={onDelete} setInputData={setInputData}  />
        <ToastContainer />

      </div>
    </>
  );
}
export default Todo;
