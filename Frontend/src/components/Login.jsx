import "./Register.css"
import { useState } from "react";
import axios from "axios";
function Login(){
        const [student,setStudent]=useState({
                email:"",
                password:""
            })
function a(e){
setStudent({...student,[e.target.name]:e.target.value})
}

async function submit(){
      try{
        const response= await axios.post(`http://localhost:8080/login`,student);
   alert("User Login Successful")
}catch(err){
          alert("User Failed TO Login")

      }
}
            return(
            <>
   <div className="Third-div">
     <h1>Login Here</h1>
       <h3>Email</h3>
<input type="email"name="email"value={student.email}onChange={a}/>
       <h3>Password</h3>
<input type="password"name="password"value={student.password}onChange={a}
/>
<button onClick={submit}>Login</button>
<a href="/">New User || Register Here</a>
   </div>
   </>
            )
}
export default Login