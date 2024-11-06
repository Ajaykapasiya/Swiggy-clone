import React from 'react'

export default function Card(props) {
    return (

        <div className='  w-[273px] shrink-0 grow '>
            <div className='h-[182px] rounded-[15px] overflow-hidden relative '>

                <img className='object-cover w-full h-full ' src="http://127.0.0.1:5500/public/images/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg" alt="" />

                <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[20px] text-white font-bold tracking-tighter cursor-pointer'>
                Items at ₹179
                </div>
            </div>
        </div>
    )
}
