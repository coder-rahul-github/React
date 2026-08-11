import React from 'react'

function Button({text,onClick}) {
    const size={
        small:"px-2 py-1 bg-grey-200"
    }

    return (
        <button
        onClick={onClick}
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 ">
            {text}
        </button>
        
    );
}

export default Button
