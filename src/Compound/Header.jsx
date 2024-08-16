import React from 'react'
import { FaCircle } from "react-icons/fa";
function Header() {
  return (
    <div>
        <header className='flex text-white  flex-wrap items-center justify-between h-24 bg--300  mx-auto  max-w-7xl	 ' >
            <div className='flex logo gap-1' >
                <FaCircle className='text-2xl  m-auto' />
                <img src="logo.png" className='h-8 text-3xl' />
                <p className='text-2xl font-semibold' >BookAI</p>
            </div>
            <nav className='text-lg  flex flex-wrap gap-4  '  >
                <a href="Feature">Feature</a>
                <a href="How To Work">How to Work </a>
                <a href="Roadmap">Roadmap</a>
                <a href="API">API</a>
                <a href="Roadmap">Roadmap</a>
                <button className='bg-blue-400 h-8 w-36 rounded-md text-white	 ' >Login/Sign up</button>
            </nav>
        </header>
    </div>
  )
}

export default Header
