"use client"
import React, {useEffect, useState} from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function notify(){ toast.warn('Personal Data', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});}
const Page = ({params}) => {
    const  {id} = params
    const [user, setUser] = useState("");
    const getdata = async ()=>{
        const res =  await axios.get("https://jsonplaceholder.typicode.com/users/"+id).then(notify())
        setUser(res.data)
        console.log(res.data)
    }
    useEffect(() => {
        getdata()
    }, []);
    return (
        <div onLoad={notify}>
            <ul className={"flex flex-col justify-center items-center min-h-44"}>
            <li>ID : {user.id}</li>
            <li>Username : {user.username}</li>
            <li>Name : {user.name}</li>
            <li>Phone number : {user.phone}</li>
            <li>Email : {user.email}</li>
            </ul>
            <ToastContainer/>
        </div>
    )
}
export default Page
