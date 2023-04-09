import React, {useState} from "react";
export default function Login (){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordType, setPasswordType] = useState("");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }


    function handleSubmit(e) {
        e.preventDefault();

        console.log(email,password)
        fetch("http://localhost:5000/login", {
            method:"POST",
            crossDomain:true,
            headers : {
                "Content-Type" : "application/json",
                Accept : "application/json",
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify({
                email,password
            }),
        })

        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userRegister");
            if(data.status == true){
                alert("Login Successfull");
                window.localStorage.setItem("token", data.data)
            }
        })
    }

    return(
        <div  className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit ={handleSubmit}>
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
              Login
            </button>
          </div>
          
                </form>
            </div>
        </div>
    )
}