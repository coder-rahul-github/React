import React, { useCallback, useEffect, useState } from 'react'
import Button from './Button';




function Password() {
    const[password,setPassword]=useState("");
    const[length,setLength]=useState(8);
    const[numallowed,setNumallowed]=useState(false);
    const[lowerallowed,setLowerallowed]=useState(false);
    const[symallowed,setSymallowed]=useState(false);

    const generatePassword= useCallback(()=> {
        let character= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let newPassword=""
        if(numallowed){
            character+="1234567890"
        }
        if(symallowed){
            character+="!@#$%^&*()"
        }
        if(lowerallowed){
            character+="abcdefghijklmnopqrstuvwxyz"
        }
        for(let i=0;i< length;i++){
            const Index= Math.floor(Math.random()*(character.length+1));
            newPassword+=character.charAt(Index);
        }
        setPassword(newPassword);
    },[length,numallowed,symallowed,lowerallowed]);
    useEffect (()=>{
        generatePassword();

    },[length,numallowed,symallowed,lowerallowed]);
    
    return (
        <div className='max-w-md mx-auto mt-20 bg-white rounded-xl shadow-lg p-6'>
            <div className='relative'>
                <input type='text'
                value={password}
                readOnly
                className='w-full border rounded-lg px-4 py-2'/>
                <button className="absolute right-2 top-1 bg-blue-400 text-white px-2 py-1 rounded cursor-pointer">copy</button>
                
                
            </div>
            
            <div className='justify-between flex mt-6'>
                
                <p className='flex gap-3'>Length
                    <input type="range"
                    min={8}
                    max={30}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e)=> setLength(e.target.value)} />
                    <input type='text'
                    value={length}
                    readOnly />
                </p>
            </div>
            <div className='justify-between flex mt-4'>
                <p>symbols</p>
                <input type='checkbox' 
                defaultChecked={symallowed}
                onChange={()=> setSymallowed(!symallowed)}/>
            </div>
            <div className='justify-between flex mt-4'>
                <p>lowercase</p>
                <input type='checkbox' 
                defaultChecked={lowerallowed}
                onChange={()=> setLowerallowed(!lowerallowed)}/>
            </div>
            
            <div className='justify-between flex mt-4'>
                <p>Number</p>
                <input type='checkbox'
                defaultChecked={numallowed}
                onChange={()=> setNumallowed(!numallowed)} />
            </div>
            <Button text="Generate Password" 
            onClick={generatePassword}/>
        </div>
    );
}

export default Password;
