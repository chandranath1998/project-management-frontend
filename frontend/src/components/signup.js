import React, {Component,useState} from 'react'
import { isValid, isValidEmail, checkPassword } from '../validations/validation'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function SignUp () {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const [passwordType, setPasswordType] = useState("");


    const togglePassword = () => {
      if (passwordType === "password") {
          setPasswordType("text")
          return;
      }
      setPasswordType("password")
  }
 

    const handleSubmit =  (e) =>{
       
      
            console.log(name,email,password);
            fetch("https://task-managemetn.glitch.me/createUser",{
                method:"POST",
                crossDomain : true,
                headers: {
                    "Content-Type" : "application/json",
                    Accept : "application/json",
                    "Access-Control-Allow-Origin" : "*",
                },
                body : JSON.stringify({
                    name,email,password,role
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if(data.status == true){
                    alert("Registration Successful");
                }else{
                  
                    alert("Something Went Wrong")
                }
            });
    }
        
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit ={handleSubmit}>
                    <h3>Sign Up</h3>
                    <div>
                        Register As 
                         <input type='radio'name='Role' value="User"
                        onChange={(e) => setRole(e.target.value)} /> User
                        <input type='radio' name='Role' value= "Manager" 
                        onChange={(e) => setRole(e.target.value)}   /> Manager
                    </div>
          

<div className="mb-3">
            <label>Name : </label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label><br/>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
           

          <div className="mb-3">
            <label >Password : </label>
            <input
              type= {passwordType}
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            /> <label className="ShowPass"onClick={togglePassword}>
            {passwordType === "password" ? <h4>Show Password</h4> : <h4>Hide Password</h4>}</label>
          </div>
                    <div className="d-grid">
            <button  type="submit" className="btn1">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered ?<a href="/sign-in">sign in</a>
          </p>
                </form>
            </div>
        </div>
    )
}
