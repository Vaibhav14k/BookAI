import React from 'react'

function Sub_cards() {
  return (
    <div>
        <div className='w-full flex text-white text-center justify-evenly flex-wrap gap-2 mt-10 border-2 border-purple-700 rounded-md  ' >
                <div className='h-auto hover:translate-y-[-20px]  duration-500 delay-75  w-72 px-8 py-10  block justify-center items-center  ' >
                        <img src="paradox.png" className='h-60 mx-auto ' />
                        <p className='text-lg font-semibold  my-4 ' >Science Fiction</p>
                        <p>"As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands..."</p>
                        <a href="Read More">Read More</a>
                </div>
                <div className='h-auto hover:translate-y-[-20px] duration-700 delay-75  w-72 px-8 py-10  block justify-center items-center  ' >
                        <img src="mist.png" className='h-60 mx-auto ' />
                        <p className='text-lg font-semibold my-4 ' >Mystery</p>
                        <p>"The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light..."</p>
                        <a href="Read More">Read More</a>
                </div>
                <div className='h-auto hover:translate-y-[-20px] duration-700 delay-75  w-72 px-8 py-10  block justify-center items-center  ' >
                        <img src="ecos.png" className='h-60 mx-auto my-4 ' />
                        <p className='text-lg font-semibold ' >Fantasy</p>
                        <p>"The ancient prophecy spoke of a child born with starlight in their eyes. As the comet blazed overhead, the kingdom held its breath..."</p>
                        <a href="Read More"  className='hover:text-white' >Read More</a>
                </div>
        </div>
    </div>
  )
}

export default Sub_cards
