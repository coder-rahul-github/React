import React from "react";
import Navbar from "./component/Navbar";
import Password from "./component/Password";

function App () {
  const menu=[{name:"Menu", message:"welcome to Home"},
    {name:"About", message:"About Us"},
    {name:"Contact", message:"Contct Page"}];
  return (
    <>
    <div className="bg-blue-200">

      <div className="overlow-x-hidden">
        <Navbar menu={menu}/>
      </div>
      <div>
        <Password />
      </div>
    </div>
    </>
  );
};
export default App;
