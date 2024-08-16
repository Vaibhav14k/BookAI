import React from 'react'
import { FaRobot } from "react-icons/fa6";
import { ImBook } from "react-icons/im";
import { FaDownload } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";

function Cards() {
  return (
    <div className='flex justify-between my-14   flex-wrap gap-2 ' >
        <div className='w-60 h-auto block text-center gap-4 text-white  ' >
            <div className='' ><FaRobot className='mx-auto w-14 bg-#701BBB  h-14 border-2 rounded-full bg-purple  '  />
            </div>
        <h1>AI-POWERDED WRITING</h1>
        <h1>Generate high-quality content with advanced AI technolgy </h1>
        </div>
        <div className='w-60 h-auto block text-center gap-4 text-white mb-4 ' >
        <ImBook  className='mx-auto  w-14 bg-#701BBB  h-14 border-2 rounded-full  '  />
        <h1>Custom Genres</h1>
        <h1>Create stories in any genre or blend multiple styles. </h1>
        </div>
        <div className='w-60 h-auto block text-center gap-4 text-white mb-4 ' >
        <FaDownload className='mx-auto  w-14 bg-#701BBB  h-14 border-2 rounded-full  '  />
        <h1>Instant Download</h1>
        <h1>Get your completed book in various formats instantly. </h1>
        </div>
        <div className='w-60 h-auto block text-center gap-4 text-white mb-4 ' >
        <FaLanguage  className='mx-auto  w-14 bg-#701BBB  h-14 border-2 rounded-full '  />
        <h1>Multilingual</h1>
        <h1>Generate content in multiple languages effortlessly. </h1>
        </div>
    </div>
  )
}

export default Cards
