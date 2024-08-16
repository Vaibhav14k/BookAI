import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
function Step_container2() {
  return (
    <div  className='my-20 text-white ' >
        <div className='w-full text-center mt-20 text-2xl font-semibold ' >
            <h1>Roadmap</h1>
        </div>
        <div className='flex mx-14 gap-10 flex-wrap  my-10 ' >
            <div className='flex gap-4 items-center ' >
                <FaUserCircle  className='w-10 h-10 rounded-full ' />
                <div className='' >
                    <h3>Advanced Character Development</h3>
                    <p>AI-powered tool for creating deep, complex characters.</p>
                </div>
            </div>
            <div className='flex gap-4 items-center ' >
                <IoStorefront   className='w-10 h-10 rounded-full ' />
                <div className='' >
                    <h3>E-book Platform Integration</h3>
                    <p>Seamless publishing to popular e-book platforms.</p>
                </div>
            </div>
            <div className='flex gap-6 items-center ' >
                <FaUsers className='w-10 h-10 rounded-full ' />
                <div className='' >
                    <h3>Collaborative Writing</h3>
                    <p>Co-create stories with other authors or AI assistants.</p>
                </div>
            </div>
            <div className='flex gap-3 items-center ' >
                <FaPaintbrush  className='w-10 h-10 rounded-full ' />
                <div className='' >
                    <h3>AI Cover Art Generation</h3>
                    <p>Create stunning book covers with AI-generated art.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Step_container2
