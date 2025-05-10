import React from 'react';
import Button from '../../components/button';

const HeroLayout = () => {
  const handleWa = () => {
    window.open("https://wa.me/6285224585840", "_blank");
  };

  return (
    <div className='container w-full h-full mx-auto'>
        <div className='md:flex md:flex-col w-full '>
            <div className='lg:h-96 md:h-80 h-60 bg-[url(/images/bigben.jpg)] bg-cover bg-center'>
                
            </div>
            <div className='p-5 md:flex items-stretch lg:gap-10 md:gap-5 '>
                <div className='md:w-2/3'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-poppins font-semibold text-grey-dark'>Mahir <span className='text-primary-blue'>Berbahasa Inggris </span> Bersama Rumah Belajar Cita Mutiara</h1>
                    <p className='lg:text-lg sm:text-base text-sm font-light text-grey-medium font-lora text-justify mt-5'>
                        Bahasa Inggris merupakan bahasa internasional yang penting di era globalisasi saat ini. Dengan mempelajari Bahasa Inggris, kita akan mendapatkan banyak kesempatan di kancah internasional dan menjangkau jaringan global. Rumah belajar cita mutiara memfalitasi anak untuk meningkatkan skill Bahasa Inggris Ananda dengan tutor yang berbakat dan berpengalaman di bidangnya.
                    </p>
                    <div className='lg:mt-10 mt-5 flex justify-center md:justify-start'>
                        <Button onClick={handleWa} classname='rounded-full text-primary-blue border-primary-blue border-2 py-1.5 px-5 text-sm sm:text-base lg:text-lg hover:text-grey-medium hover:border-grey-medium w-64' text='Daftar Sekarang'/>
                    </div>
                </div>
                <div className='hidden md:block w-1/3 rounded-xl'>
                    <img src='/images/english.jpg' className='object-cover object-center w-full h-full rounded-xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroLayout
