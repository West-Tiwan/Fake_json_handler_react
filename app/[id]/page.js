"use client"
import React, {useEffect, useState} from 'react'
import axios from "axios";
const Page = ({params}) => {
    const  {id} = params
    const [user, setUser] = useState("");
    const getdata = async ()=>{
        const res =  await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        setUser(res.data)
        console.log(res.data)
    }
    useEffect(() => {
        getdata()
    }, []);
    return (
        <>
            <ul className={"flex flex-col justify-center items-center min-h-44"}>
            <li>ID : {user.id}</li>
            <li>Username : {user.username}</li>
            <li>Name : {user.name}</li>
            <li>Phone number : {user.phone}</li>
            <li>Email : {user.email}</li>
            </ul>
        </>
    )
}
export default Page
