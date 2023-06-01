
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from './Table';
import Inputbox from "./Inputbox"
import "./Todoo.css"
import { Button } from '@mui/material';


export default function TodoApi() {
    const [data, setData] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDesciption] = useState("")
    const [id, setId] = useState("")
    const [darkMode,setDataMode] =useState(true)

    const getData = () => {
        axios.get("https://64193b3c29e7e36438f8acd6.mockapi.io/To-DoApp")
            .then((result) => setData(result.data))
            .catch((error => console.log(error)))
    }
    useEffect(() => {
        getData()
    }, [])

    //add data function (handler)
    const addDataHandler = () => {
        if (title.length === 0 || description.length === 0) {
            toast.error("please fill the input", { position: "top-right" })
        }
        else {
            toast.success("Data Added Successfully", { position: "top-right" })
            let newData = {
                id: id,
                title: title,
                description: description
            }
            axios.post("https://64193b3c29e7e36438f8acd6.mockapi.io/To-DoApp", newData)
                .then(() => getData(), nullValueHandler())
                .catch((error) => console.log(error))
        }
    }

    //delete function
    const deleteHandler = (id) => {
        axios.delete(`https://64193b3c29e7e36438f8acd6.mockapi.io/To-DoApp/${id}`)
            .then(() => getData())
            .catch((error) => console.log(error))
    }


    //null value handler
    const nullValueHandler = () => {
        if (title.length === 0 || description.length === 0) {
            toast.info("Already Value is null")
        }
        else {
            setDesciption("")
            setTitle("")
            toast.warning("Data Clear Success", { position: "top-right" })
        }

    }

    //edit handler
    const editHandler = () => {
        let newDataEdit = {
            id: id,
            title: title,
            description: description
        }
        axios.put(`https://64193b3c29e7e36438f8acd6.mockapi.io/To-DoApp/${id}`, newDataEdit)
            .then(() => getData(), nullValueHandler(), toast.success("Data Edited Successfully", { position: "top-right" }))
            .catch((error) => console.log("not edit"))
    }

const darkModeHanlder = () =>{
    if(darkMode){
        setDataMode(false)
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    }
    else{
        setDataMode(true)
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
}
    return (
        <div className='setWidth'>
            <br/>
            <h1 className='setWidth' style={{fontFamily:"Rubik Puddles, cursive"}}>Todo List</h1>
            {/* <Button onClick={()=>darkModeHanlder()} className='darkbtn'>DarkMode</Button> */}
            <Inputbox title={title} setTitle={setTitle} description={description} setDesciption={setDesciption} addDataHandler={addDataHandler} editHandler={editHandler} nullValueHandler={nullValueHandler} />
            <hr className='container setWidth'  />
            <br />
            <Table setId={setId} data={data} setDesciption={setDesciption} deleteHandler={deleteHandler} setTitle={setTitle} />

            <ToastContainer />
        </div>
    )
}
