import React from 'react'
import { HiArrowSmRight , HiArrowSmLeft } from "react-icons/hi";
export default function Category() {
    return (
        <div className='max-w-[1200px] mx-auto ' >
            <div className='flex items-center justify-between'>
                <div className='text-[30px] font-bold '>Ajay, what's on your mind?</div>
                <div className='flex'>
                    <div className=' cursor-pointer flex justify-center items-center w-[32px] h-[30px] bg-[#02060c26] rounded-full mx-2'><HiArrowSmLeft size={24} /></div>
                    <div className=' cursor-pointer  flex justify-center items-center w-[32px] h-[30px] bg-[#02060c26] rounded-full mx-2'><HiArrowSmRight size={24} /></div>
                </div>

            </div>

        </div>
    )
}
