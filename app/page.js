"use client"
import React, {useEffect, useState} from 'react'
import axios from "axios";
import Page from "@/app/[id]/page";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const notify = ()=>{toast.success('Data received', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});}

const index = () => {
  const [user, setUser] = useState([]);
  const getdata = async ()=>{
    const res =  await axios.get("https://jsonplaceholder.typicode.com/users").then(notify())
    setUser(res.data)
    console.log(res.data)
  }
    useEffect(() => {
        getdata()
    }, []);

    return (
      <>
          <div className={"flex justify-center items-center m-4"}>
              <button onClick={getdata} className={"border-2 border-blue-300"}>Get Data</button>
              <ToastContainer/>
          </div>
          <div className={"flex justify-center items-center"}>
          <ol className={"list-decimal"}>{user.map((e, index) => {
              return <li key={index}>{e.username}  ------  <a href={`/${e.id}`}>get data</a></li>
          })}</ol>
          </div>
      </>
  )
}
export default index
