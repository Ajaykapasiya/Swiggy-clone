import React from 'react'

export default function Card() {
  return (

    <div className = ' w-[200px] overflow-hidden '>
        <div className =' w-full h-[182px] rounded-[15px] overflow-hidden relative'>
      <img className='w-full h-full object-cover ' src="http://127.0.0.1:5500/public/images/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg" alt="" />
      <div className='image-overlay absolute w-full h-full '></div>
      </div>
    </div>
  )
}
