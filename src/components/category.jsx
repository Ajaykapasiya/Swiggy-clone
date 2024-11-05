import React, { useEffect, useState } from 'react'
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
export default function Category() {
    
    const[slide , setSlide] = useState(0);

const[categories , setCategory] = useState([]);

const fetchCategory = async () => {
const response = await fetch("http://127.0.0.1:5500/data/category.json");
const data = await response.json();
setCategory(data);

}

useEffect(

    () => {
        fetchCategory();
    },[]
)

const nextSlide = () => {
    if(categories.length - 8 == slide) return false;
    setSlide(slide+3);
}

const prevSlide = () => {
    if(slide == 0) return false
 setSlide(slide-3);
}

    return (
        <div className='max-w-[1200px] mx-auto ' >
            <div className='flex items-center justify-between'>
                <div className='text-[30px] font-bold '>Ajay, what's on your mind?</div>
                <div className='flex'>
                    <div className=' cursor-pointer flex justify-center items-center w-[32px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={prevSlide}>
                        <HiArrowSmLeft size={24} /></div>

                    <div className=' cursor-pointer  flex justify-center items-center w-[32px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={nextSlide}>
                        <HiArrowSmRight size={24} /></div>
                </div>

            </div>

            <div className='flex border border-black-600 overflow-hidden'>

                {
                    categories.map(
                        (cat , index) => { 

                            return (
                                <div style={{

                                   transform:`translateX(-${slide * 100}%)` 

                                    }}
                                key={index} className='w-[150px] shrink-0 duration-500'>
                                 <img src={`http://127.0.0.1:5500/public/images/${cat.image}`} alt={cat.name} />
                                 <p>{cat.name}</p>
                                </div>
                            )

                        }
                    )
                }
            </div>
<hr className='my-6 border-[2px]'/>
        </div>

    )
}
