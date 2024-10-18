import React, { useState } from 'react'
import { PiCaretDownBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";



function Header() {

  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    console.log('hlw');

    setToggle(true);
  }

  const hideSideMenu = () => {
    setToggle(false);
  }


  const links = [

    {
      icon: <FaSearch />,
      name: "Search"
    },

    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup:" New"
    },

    {
      icon: <IoHelpBuoyOutline />,
      name: "Help"
    },

    {
      icon: <IoPersonAdd />,
      name: "Sign in "
    },

    {
      icon: <FaCartArrowDown />,
      name: "Cart"
    }

  ]

  return (

    <>
      <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
      }}>

        <div onClick={(e) => {
          e.stopPropagation();
        }} className='w-[400px] bg-white h-full absolute  duration-[300ms]'

          style={{
            left: toggle ? '0%' : '-100%'
          }}
        ></div>

      </div>


      <header className="p-[15px] shadow xl">
        <div className='max-w-[1200px] mx-auto   flex items-center'>
          <div className='w-[80px]  '>
            <img src="images/logo.png" className='w-full' alt="" />
          </div>
          <div className=''>
            <span className=' font-bold  border-b-[3px]  '>Greater Noida</span> , Uttar pardesh  <PiCaretDownBold onClick={showSideMenu} fontSize={25} className='inline text- text-[#ff5200]' />
          </div>
          <nav className='flex list-none gap-4 ml-auto font-semibold text-[18px]'>

            {
              links.map(
                (link, index) => {
                  return <li key = {index} className='flex hover:text-[#fc8019] items-center gap-3 '>
                    {link.icon}
                    {link.name}
                    <sup>{link.sup}</sup>
                  </li>
                }
              )
            }



          </nav>


        </div>



      </header>
    </>
  )
}

export default Header;
