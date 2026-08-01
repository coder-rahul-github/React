import Button from "./components/Button";
import Nav from "./nav";

//import { useState } from "react";

function App() {
  // const[count,setCount]=useState(0);
  // function inc(){
  //   setCount(count+1);
  // }
  // function dec(){
  //   setCount(count-1);
  // }

  return (
    <>
      {/* <h1>Counter</h1>
      <h2>{count}</h2>
      <button className="border-2 bg-green-500 px-5 rounded-full" onClick={inc}>Increase +</button>
      <break> </break>
      <button className="border-2 bg-red-500 px-5 rounded-full" onClick={dec}>decrease -</button> */}
      {/* <Button text="Primary" type="Primary"/>
      <Button text="Secondary" type="Secondary"/>
      <Button text="Danger" type="Danger" />
      <Button text="no where" /> */}
      <Nav />
    </>
  )
}

export default App;
