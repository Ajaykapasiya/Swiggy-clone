import React, { useEffect, useState } from 'react'
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
export default function Category() {

const[categories , setCategory] = useState([]);

const fetchCategory = async () => {
const response = await fetch(" http://127.0.0.1:5500/data/categories");
const data = await response.json();
setCategory(data);

}

useEffect(

    () => {
        fetchCategory();
    },[]
)


            <div className='flex'>

                {
                    categories.map(
                        (cat , index) => { 

                            return (
                                <div key={index} className='w-[150px] shrink-0'>
                                   <img src={"http://127.0.0.1:5000/data/public/images/${cat.image}" + cat.image} alt={''}/>
                                </div>
                            )

                        }
                    )
                }
            </div>

        </div>

    )
}
