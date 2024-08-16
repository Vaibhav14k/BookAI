import React from 'react'
import { FaRobot } from "react-icons/fa6";
import { ImBook } from "react-icons/im";
import { FaDownload } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";

function Cards() {
  return (
    <div className='flex justify-between my-10   flex-wrap gap-2 ' >
        <div className='w-60 h-auto block text-center gap-4 bg-green-400  ' >
        <FaRobot className='mx-auto w-10  h-10 border-2 rounded-full bg-white '  />
        <h1>AI-POWERDED WRITING</h1>
        <h1>Generate high-quality content with advanced AI technolgy </h1>
        </div>
        <div className='w-60 h-auto block text-center gap-4 bg-green-400 mb-4 ' >
        <ImBook  className='mx-auto w-10  h-10 border-2 rounded-full bg-white '  />
        <h1>Custom Genres</h1>
        <h1>Create stories in any genre or blend multiple styles. </h1>
        </div>
        <div className='w-60 h-auto block text-center gap-4 bg-green-400 mb-4 ' >
        <FaDownload className='mx-auto w-10  h-10 border-2 rounded-full bg-white '  />
        <h1>Instant Download</h1>
        <h1>Get your completed book in various formats instantly. </h1>
        </div>
        <div className='w-60 h-auto block text-center gap-4 bg-green-400 mb-4 ' >
        <FaLanguage  className='mx-auto w-10  h-10 border-2 rounded-full bg-white '  />
        <h1>Multilingual</h1>
        <h1>Generate content in multiple languages effortlessly. </h1>
        </div>
    </div>
  )
}

export default Cards
