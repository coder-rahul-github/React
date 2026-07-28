import React from "react";

function button({text,type}){
    let buttonStyle="";
    if(type==="Primary"){
        buttonStyle= "bg-blue-500 px-3 py-2 text-white";
    }
    else if(type==="secondary"){
        buttonStyle="bg-green-500 px-3 py-2 text-white";
    }
    else{
        buttonStyle="bg-red px-3 py-2 text-white";
    }
    return(
        <button className={`${buttonStyle}`}>{text}</button>
    )

}