import React from 'react'
import Button from './components/Button'

function Nav() {
    function handleNav(){
        console.log(Onclick)
    }
    return(
        <>
            <nav flex justify-between bg-black-500 text-white p-3>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
            <Button Onclick={handleNav} text="Login" size='small' type="secondary" />
        </>
    )
}

export default Nav;
