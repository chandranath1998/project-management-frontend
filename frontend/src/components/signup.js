import React, {Component,useState} from 'react'

export default function SignUp () {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const [secretKey, setSecretKey] = useState("");
    const [passwordType, setPasswordType] = useState("");

    const handleSubmit = (e) =>{
        if(role == "Manager" && secretKey != "Chandranath"){
            e.preventDefault();
            alert("Invalid Manager");
        }else{
            e.preventDefault();

            console.log(name,email,password);
            fetch("http://localhost:5000/createUser",{
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
    };
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit ={handleSubmit}>
                    <h3>Sign Up</h3>
                    <div>
                        Register As 
                         <input style ={{paddingTop : "10px", paddingRight : "10px"}}type='radio'name='Role' value="User"
                        onChange={(e) => setRole(e.target.value)} /> User
                        <input type='radio' name='Role' value= "Manager" 
                        onChange={(e) => setRole(e.target.value)}   /> Manager
                    </div>
                    {role == "Manager" ? (
            <div className="mb-3">
              <label style ={{paddingTop : "10px", paddingRight : "10px"}}>Secret Key</label>  
              <input
               style ={{paddingTop : "10px", paddingRight : "10px"}} type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

<div className="mb-3">
            <label style ={{paddingTop : "10px", paddingRight : "10px"}}>Name : </label>
            <input style ={{marginBottom : "10px"}}
              type="text"
              className="form-control"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label style ={{paddingTop : "10px", paddingRight : "10px"}}>Email address</label>
            <input style ={{marginBottom : "10px"}}
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label style ={{paddingTop : "10px", paddingRight : "10px"}}>Password : </label>
            <input style ={{marginBottom : "10px"}}
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
                    <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
                </form>
            </div>
        </div>
    )
}
