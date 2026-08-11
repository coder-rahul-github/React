import React from 'react'
import Button from './Button';


function Navbar({menu}) {
    //const menu =["Home","About","Contact","blog"];
    return (
        <nav className=" px-3 py-2 rounded bg-blue-500 text-white">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <h1>My Website</h1>
                <ul className="md:flex gap-6">
                    {menu.map((item)=>(
                        <li key={item.name} className="cursor-pointer hover:text-red-500"
                        onClick={()=>
                            alert(item.message)}
                        >{item.name}</li>
                    ))}
                    {/* <li className="cursor-pointer hover:text-red-500">Home</li>
                    <li className="cursor-pointer hover:text-red-500">About</li>
                    <li className="cursor-pointer hover:text-red-500">Contact</li> */}
                </ul>
            </div>
            <div className='flex gap-2'>
                <Button
                text="Login"
                onClick={() => 
                alert("log in successfull")
                //console.log(`${text}`)
                } />
                <Button 
                text="Sign In"
                onClick={() => 
                alert("Sign In successfull")
                //console.log(`${text}`)
                } />
            </div>
                
        </nav>
    );
}

export default Navbar;
