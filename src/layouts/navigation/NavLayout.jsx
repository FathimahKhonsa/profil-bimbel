import React from 'react'
import Logo from '../../components/logo';
import NavBar from '../../fragments/navigation/NavBar';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../../components/button';

const NavLayout = () => {
  const handleWa = () => {
    window.open("https://wa.me/6285224585840", "_blank");
  };

  return (
    <div className='px-10 py-1 w-full fixed top-0 z-50 bg-white'>
      <div className='container mx-auto flex w-full items-center justify-between'>
        <div className='md:w-1/4'>
          <Logo/>
        </div>
        <div className='md:w-1/2 hidden md:block'>
          <NavBar/>
        </div>
        <div className='md:w-1/4 flex justify-end'>
          <Button icon={<FaWhatsapp className='w-6 h-6'/>} classname='rounded-full text-white p-1.5 bg-grey-medium hover:bg-white hover:text-black' onClick={handleWa}/>
        </div>
      </div>
    </div>
  )
}

export default NavLayout;
