import React, {useState,Component}from "react";

export default function login () {
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    function handleSubmit(e){
        e.preventDefault();
    }
    console.log(email,password)
    fetch("http://localhost:5000/login",{
        method:"POST",
        crossDomain:true,
        headers: {
            "Content-Type" : "application/json",
            Accept : "application/json",
            "Access-Control-Allow-Origin" : "*",
        },
        body : JSON.stringify({
            email,
            password
        })
        
    })
}