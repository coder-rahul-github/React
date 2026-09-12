import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pageComponent/Contact'
import About from '../pageComponent/About'
import Home from '../pageComponent/Home'

function Header() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='About' element={<About/>} />
                <Route path='Contact' element={<Contact/>} />
            </Routes>
        </div>
    )
}

export default Header
