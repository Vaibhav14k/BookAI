import React from 'react'
import { FaMagic } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Step_container() {
  return (
    <div  >
        <div className='w-full text-center mt-20 text-xl font-semibold ' >
            <h1>HOW IT WORKS</h1>
        </div>
        <div className='flex mx-14 gap-10 flex-wrap bg-green-300 my-10 ' >
            <div className='flex gap-4 items-center ' >
                <FaMagic className='w-10 h-10 rounded-full ' />
                <div className='' >
                    <h3>Choose Your Genre</h3>
                    <p>Select from a wide range of genres or create a custom blend.</p>
                </div>
            </div>
            <div className='flex gap-4 items-center ' >
                <FaPencil  className='w-10 h-10 rounded-full ' />
                <div className='' >
                    <h3>Provide Key Details</h3>
                    <p>Input main characters, plot points, or themes to guide the AI.</p>
                </div>
            </div>
            <div className='flex gap-3 items-center ' >
                <FaCogs className='w-10 h-10 rounded-full ' />
                <div className='' >
                    <h3>AI Generation</h3>
                    <p>Our advanced AI creates your book based on your inputs..</p>
                </div>
            </div>
            <div className='flex gap-3 items-center ' >
                <IoIosCheckmarkCircle  className='w-10 h-10 rounded-full ' />
                <div className='' >
                    <h3>Review and Download</h3>
                    <p>Review your generated book and download in your preferred format.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Step_container
