import { useState } from "react";
import "./Home.css"
import axios from "axios";
function Home(){
const [users,setUsers]=useState([]);
  async  function getusers(){
                const reponse=   await  axios.get(`http://localhost:8080/get`);
             setUsers(reponse.data);
             console.log(users)
    }
    return (

         <>
         <h1>DashBoard WElcome User</h1>

         <button className="get" onClick={getusers}>getUser</button>

         <table>
             <thead>
                    <tr>
                         <th>ID</th>
                         <th>UserName</th>
                         <th>Email</th>
                    </tr>
             </thead>
             <tbody>
               {users.map((user)=>(
                 <tr>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td><button className="up">Update</button></td>
                      <td><button className="de">Delete</button></td>
                 </tr>
               ))}
             </tbody>
         </table>
         </>
    )
}
export default Home