import React from 'react'

function Button({text,type,onClick}) {
    const basestyle= "text-white font-bold px-3 py-2 rounded"

    const color={
        red : "bg-red-500 px-3 py-2 hover:opacity-80 rounded ",
        blue : "bg-blue-500 px-3 py-2 hover:opacity-80 rounded ",
        green : "bg-green-500 px-3 py-2 hover:opacity-80 rounded ",
        orange : "bg-orange-500 px-3 py-2 hover:opacity-80 rounded "
    }
    return (
        <button className={`${basestyle} ${color[type]}`} onClick={onClick}>{text}</button>
    )
}

export default Button
