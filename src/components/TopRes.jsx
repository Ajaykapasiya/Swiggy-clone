import React, { useEffect, useState } from 'react'
import Card from './Card';
export default function TopRes() {
const [data , setData] = useState([]);

const fetchTopRestaurant =async () => {
const response = await fetch ('http://127.0.0.1:5500/data/restaurantChains.json')
const apiData = await response.json ();
setData(apiData);
}

useEffect (

    () => {
    fetchTopRestaurant();
    } , []
) 

  return (
    <div>
       <div className='max-w-[1200px] mx-auto ' >
            <div className='flex items-center justify-between'>
                <div className='text-[30px] font-bold '>Top Resturant in Greater Noida </div>
                <div className='flex'>
                    <div className=' cursor-pointer flex justify-center items-center w-[32px] h-[30px] bg-[#02060c26] rounded-full mx-2' >
                       </div>

                    <div className=' cursor-pointer  flex justify-center items-center w-[32px] h-[30px] bg-[#02060c26] rounded-full mx-2' >
                        </div>
                </div>

            </div>
       </div>
       <div className = 'flex'>
                <Card/>
            </div>
    </div>
  )
}
