import React, { useEffect, useState } from 'react'
import Card from './Card';
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
export default function TopRes() {

    const [slide, setSlide] = useState(0);

    const [data, setData] = useState([]);

    const fetchTopRestaurant = async () => {
        const response = await fetch('http://127.0.0.1:5500/data/restaurantChains.json')
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(

        () => {
            fetchTopRestaurant();
        }, []
    )

    const nextSlide = () => {
        if (data.length - 8 == slide) return false;
        setSlide(slide + 3);
    }

    const prevSlide = () => {
        if (slide == 0) return false
        setSlide(slide - 3);
    }

    return (
        
            <div className=' max-w-[1200px] mx-auto mb-4 ' >
                <div className='flex my-5 items-center justify-between'>
                    <div className='text-[30px] font-bold '>Top restaurant chains in Noida
                    </div>
                    <div className='flex'>
                        <div className=' cursor-pointer flex justify-center items-center w-[32px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={prevSlide} >
                            <HiArrowSmLeft  size={24} /> </div>

                        <div className=' cursor-pointer  flex justify-center items-center w-[32px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={nextSlide}>
                            <HiArrowSmRight  size={24} /> </div>
                    </div>

                </div>

                <div className='flex gap-3 overflow-hidden'>
                   {
                    data.map(
                        (d , i) => {
                            return <Card {...d} key={i}/>
                        }
                    )
                   }
                    
                  
                </div>

            </div>
       
    )
}
