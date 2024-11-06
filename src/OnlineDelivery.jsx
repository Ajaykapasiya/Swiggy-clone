import React, { useEffect, useState } from 'react'
import Card from './components/Card';

export default function OnlineDelivery() {
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
    return (
        <div className=' max-w-[1200px] mx-auto px-2  ' >
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[30px] font-bold '>Restaurants with online food delivery in Noida</div>


            </div>

            <div className='  md:grid grid-cols-4 gap-3' >
                {
                    data.map(
                        (d,i) => {

                      return <Card  {...d}/>

                        }
                    )
                }
            </div>
        </div>

    )
}
