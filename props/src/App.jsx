import { useState } from "react"
import Student from "./component/Student"
import User from "./component/user"

function App() {
  const userObject={
    name:"Rahul das",
    age:25,
    email:"rahul@google.com"
  }
  const[students,setStudents]=useState("bhaskar");

  return (
    <div className='bg-linear-to-b from-indigo-500 to-purple-600  min-h-screen'>
      <p>props learning</p>
      {/* <User data={userObject}/> */}
      <Student name={students} />
      <button onClick={()=>setStudents("Sam")}>change Student</button>
    </div>
  )
}

export default App
