import React, { useState } from 'react'
import { PiCaretDownBold } from "react-icons/pi";

function Header() {

  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    console.log('hlw');

    setToggle(true);
  }

  const hideSideMenu = () => {
    setToggle(false)
  }

  return (

    <>
      <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
      }}>

        <div className='w-[400px] bg-white h-full absolute  duration-[300ms]'

          style={{
            left: toggle ? '0%' : '-100%'
          }}
        ></div>

      </div>


      <header className="p-[15px] shadow xl">
        <div className='max-w-[1200px] mx-auto border border-blue-500  flex items-center'>
          <div className='w-[80px] border '>
            <img src="images/logo.png" className='w-full' alt="" />
          </div>
          <div className=''>
            <span className='font-bold border-b-[3px] border-[black]'>Greater Noida</span> , Uttar pardesh  <PiCaretDownBold onClick={showSideMenu} fontSize={25} className='inline text- text-[#ff5200]' />
          </div>

        </div>


      </header>
    </>
  )
}

export default Header;
