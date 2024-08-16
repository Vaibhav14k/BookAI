import React , { useState } from 'react'
function Letter() {
  return (
    <div className='p-10 text-white rounded-md' >
        <div className=' text-center  mb-4 text-xl font-mediam  ' >
            <h2 className='font-semibold ' >Stay Updated</h2>
            <p className='mx-auto' >Subscribe to our newsletter for the latest AI writing tips and BookAI updates</p>
            
        </div>
        <form action="" className=''>
                <input type="text" value="Enter Your Email"  className='border-2 text-black  rounded-md w-72 h-10 ' />
            </form>
            <button className='bg-blue-700 w-full h-8 mt-2 rounded-md  hover:translate-y-[-6px]  duration-500 delay-75 ' >Subscribe</button>
    </div>
  )
}

export default Letter
