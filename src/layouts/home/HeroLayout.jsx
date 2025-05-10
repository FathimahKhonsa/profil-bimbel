import React from 'react';
import Students from '../../fragments/Students';
import Button from '../../components/button';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const HeroLayout = () => {
  const handleInstagram = () => {
    window.open('https://www.instagram.com/bimbelcitamutiara','_blank')
  }

  const handleClickTikTok = () => {
    window.open('https://www.tiktok.com/@ibulastri06', '_blank');
  };
  
  const handleClickYouTube = () => {
    window.open('https://www.youtube.com/@rumahbelajarcitamutiara5348', '_blank');
  };

  return (
    <div className='container mx-auto h-fit w-full p-5 md:p-7 lg:p-10 bg-radial from-secondary-yellow from-5% to-white to-50%'>
      <div className="md:flex items-center justify-center w-full h-full mt-5 ">
        <div className='md:w-1/2 py-7 px-3 lg:py-20 lg:px-10 text-justify'>
          <p className='text-md lg:text-lg md:text-base text-grey-medium font-normal font-lora '>Raih Prestrasi Terbaik Bersama</p>
          <h1 className='md:text-5xl lg:text-8xl text-4xl text-grey-dark font-bold font-poppins hover:scale-110 hover:text-primary-blue'>CITA MUTIARA</h1>
          <p className='text-base lg:text-lg text-grey-medium font-normal font-lora'>Bimbingan Belajar dan Sekolah Berkualitas untuk meraih Masa Depan Gemilang.</p>
          <img src='src/assets/images/newStudents.png' className='w-full sm:px-10 sm:py-5 mt-3 md:hidden' alt='Image Hero'/>
          <div className='flex flex-col items-end w-full md:mt-5'>
              <p className='text-md text-grey-medium font-lora'>
                Get to know us:
              </p>
              <div className='flex gap-1.5'>
                <Button icon={<FaInstagram className='w-4 h-4'/>} classname='rounded-full text-white p-1.5 bg-grey-dark hover:bg-white hover:text-grey-dark' onClick={handleInstagram}/>
                <Button icon={<FaTiktok className='w-4 h-4'/>} classname='rounded-full text-white p-1.5 bg-grey-dark hover:bg-white hover:text-grey-dark' onClick={handleClickTikTok}/>
                <Button icon={<FaYoutube className='w-4 h-4'/>} classname='rounded-full text-white p-1.5 bg-grey-dark hover:bg-white hover:text-grey-dark' onClick={handleClickYouTube}/>
              </div>
          </div>

    

          <div className='flex mt-10 lg:gap-5 gap-3'>
              <div>
                <img src='src/assets/images/icSchool.png' className='h-12 lg:h-14'/>
                <p className='font-lora text-sm md:text-base font-light'>School,</p>
                <p className='font-semibold text-sm lg:text-base font-poppins'>Cita Mutiara Islamic Global School</p>
              </div>
              <div className='h-30 border-l border-grey-light w-1.5 mx-5'></div>
              <div>
                <img src='src/assets/images/iconEducation.png' className='h-12 lg:h-14'/>
                <p className='font-lora text-sm md:text-base font-light'>Bimbel,</p>
                <p className='font-semibold text-sm lg:text-base font-poppins'>Rumah Belajar Cita Mutiara</p>
              </div>
          </div>
      
        </div>
        <div className='hidden md:block w-1/2 lg:p-10 md:px-3'>
          <img src='src/assets/images/newStudents.png' className='w-full' alt='Image Hero'/>
        </div>
      </div>
    </div>
  )
}

export default HeroLayout
