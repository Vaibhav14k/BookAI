import React from 'react'

function Background() {
  return (
     (
        <div className="relative min-h-screen bg-gradient-to-r from-[#1e0533] to-[#110a1f] text-white overflow-hidden">
          <p className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quis atque commodi quod ut et rem, excepturi nulla ad aut nihil perferendis molestiae! Architecto animi repellat molestias! Omnis, corporis iure.
          </p>
    
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
            <div className="particle absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-[float_15s_infinite_ease-in-out]" style={{ top: '30%', left: '80%' }}></div>
            <div className="particle absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-[float_15s_infinite_ease-in-out]" style={{ top: '30%', left: '50%' }}></div>
            <div className="particle absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-[float_15s_infinite_ease-in-out]" style={{ top: '30%', left: '15%' }}></div>
            <div className="particle absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-[float_15s_infinite_ease-in-out]" style={{ top: '30%', left: '90%' }}></div>
            <div className="particle absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-[float_15s_infinite_ease-in-out]" style={{ top: '30%', left: '30%' }}></div>
            <div className="particle absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-[float_15s_infinite_ease-in-out]" style={{ top: '30%', left: '20%' }}></div>
          </div>
    
          {/* <div id="preloader" className="fixed top-0 left-0 w-full h-full bg-[#0b002da4] flex justify-center items-center z-[9999] transition-opacity duration-500 ease-out">
            <div className="loader border-4 border-white border-t-[#c6d1d8] rounded-full w-12 h-12 animate-spin"></div>
          </div> */}
    
          <canvas width="1232" height="151" className="block w-[1232px] h-[151px]"></canvas>
        </div>
      )
    )
    }
    
  


export default Background
