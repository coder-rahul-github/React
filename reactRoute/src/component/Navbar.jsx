import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className='flex gap-2 justify-end'>
                <Link to ="/">Home</Link>
                <Link to ="/About">About</Link>
                <Link to ="/Contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
