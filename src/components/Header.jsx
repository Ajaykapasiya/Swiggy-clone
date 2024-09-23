import React from 'react'
import { PiCaretDownBold } from "react-icons/pi";

function Header() {
  return (
    <header className="p-[15px] shadow xl">
      <div className='max-w-[1200px] mx-auto border border-blue-500  flex items-center'>
        <div className='w-[80px] border '>
          <img src="images/logo.png" className='w-full' alt="" />
        </div>
        <div className=''>
          <span className='font-bold border-b-[3px] border-[black]'>Greater Noida</span> , Uttar pardesh  <PiCaretDownBold fontSize={25} className='inline text- text-[#ff5200]' />
        </div>

      </div>

    </header>
  );
}
 
export default Header;
