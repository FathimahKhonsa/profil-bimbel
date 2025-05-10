import React from 'react';
import Button from '../../components/button';
import { BiSolidChevronRightSquare } from 'react-icons/bi';
import { FaInstagram, FaTiktok, FaYoutube, FaPhone } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';
import { LuCopyright } from 'react-icons/lu';

const ContactLayout = () => {
  const handleInstagram = () => {
    window.open('https://www.instagram.com/bimbelcitamutiara','_blank')
  }

  const handleClickTikTok = () => {
    window.open('https://www.tiktok.com/@ibulastri06', '_blank');
  };
  
  const handleClickYouTube = () => {
    window.open('https://www.youtube.com/@rumahbelajarcitamutiara5348', '_blank');
  };

  const handleWa = () => {
    window.open("https://wa.me/6285224585840", "_blank");
  };

  return (
    <div id='idContact' className='w-full bg-primary-blue h-fit container mx-auto md:p-10 p-5'>
      <div className='md:flex justify-between items-center w-full'>
        <p className='text-4xl md:text-6xl font-lora text-white font-bold'>CITA MUTIARA</p>
        <div>
          <p className='font-lora text-white text-md font-light mt-5 md:mt-0'>Ingin menjadi bagian Cita Mutiara?</p>
          <Button
            text='Daftar Sekarang' onClick={handleWa} icon={<BiSolidChevronRightSquare className='ml-7 w-8 h-8'/>} classname='text-black lg:text-lg text-base font-semibold font-lora hover:text-primary-blue hover:bg-white hover:border-2 hover:border-primary-blue bg-white py-1 px-7 rounded-lg mt-3 shadow'
          />
        </div>
      </div>

      <div className='w-full h-[0.5px] bg-white mt-5'></div>

      <div className='flex justify-center w-full md:mt-10 mt-5'>
        <p className='text-white font-lora text-sm md:text-base lg:text-lg lg:max-w-1/2 md:max-w-2/3 text-center'>"Bimbingan Belajar dan Sekolah untuk mempersiapkan peserta didik yang berakhlak mulia, cerdas, tanggap, aktif, berpikir kritis untuk meraih masa depan yang gemilang"</p>
      </div>

      <div className='w-full flex justify-center mt-3'>
        <div className='flex gap-1.5'>
          <Button icon={<FaInstagram className='w-6 h-6'/>} classname='rounded-full text-white p-1.5 bg-grey-dark hover:bg-white hover:text-grey-dark' onClick={handleInstagram}/>
          <Button icon={<FaTiktok className='w-6 h-6'/>} classname='rounded-full text-white p-1.5 bg-grey-dark hover:bg-white hover:text-grey-dark' onClick={handleClickTikTok}/>
          <Button icon={<FaYoutube className='w-6 h-6'/>} classname='rounded-full text-white p-1.5 bg-grey-dark hover:bg-white hover:text-grey-dark' onClick={handleClickYouTube}/>
        </div>
      </div>

      <div className='md:flex mt-10 md:justify-between'>
        <div className='flex items-center justify-center'>
          <LuCopyright className='text-white'/>
          <p className='text-white text-md font-lora'>2025 Cita Mutiara - All rights reserved</p>
        </div>
        
        <div>
          <div className='hidden md:flex md:items-center'>
            <FaSquarePhone className='text-white w-6 h-6 mr-3'/>
            <p className='text-white text-md font-lora'>+6281222406063</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactLayout
