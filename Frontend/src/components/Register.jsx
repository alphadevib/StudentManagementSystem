
import "./Register.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register(){
const navigate=useNavigate();
    const [student,setStudent]=useState({
        name:"",
        email:"",
        password:""
    })
function a(e){
setStudent({...student,[e.target.name]:e.target.value})
}

async function submit(){
      try{
        const response= await axios.post(`http://localhost:8080/register`,student);
   alert("User Registered Successfully")
   navigate("/login")
}catch(err){
          alert("User Failed TO register")

      }
}
    return(
    <>

    <div className="Third-div">
           <h1>Register Here</h1>
       <h3>UserName</h3>
    <input type="text" name="name" id="" onChange={a}  />
       <h3>Email</h3>
    <input type="text" name="email" id="" onChange={a}  />
       <h3>Password</h3>
    <input type="password" name="password" id="" onChange={a}/>
    <button onClick={submit}>Register</button>
    <a href="/login">Do you already Have An Account ?</a>
    </div>
    </>
    )
}
export default Register