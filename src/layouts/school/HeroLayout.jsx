import React from 'react';
import Point from '../../components/text/point';
import { FaCheck } from 'react-icons/fa';
import Button from '../../components/button';

const HeroLayout = () => {
  const data = [
    {
        id: 1,
        text: 'Science'
    },
    {
        id: 2,
        text: 'Technology'
    },
    {
        id: 3,
        text: 'Engineering'
    },
    {
        id: 4,
        text: 'Art'
    },
    {
        id: 5,
        text: 'Mathematics'
    },
  ];

  const handleWa = () => {
    window.open("https://wa.me/6285224585840", "_blank");
  };

  return (
    <div className='container w-full mx-auto'>
      <div className='w-full md:p-10 p-5 bg-primary-blue rounded-br-4xl'>
        <div className='md:flex justify-between'>
            <img src='src/assets/images/plane.png' className='lg:h-20 h-14 -rotate-12'/>
            <h1 className='text-2xl lg:text-3xl font-semibold text-black font-poppins lg:max-w-1/2 md:max-w-2/3 text-center'>Shape Your <span className='text-white'>Kid's Future</span> With <span className='text-white'>Cita Mutiara Islamic Global School</span></h1>
            <img src='src/assets/images/shootingStar.png' className='hidden md:block lg:h-20 h-14'/>
        </div>

        <div className='flex flex-wrap justify-center gap-3 md:gap-7 mt-3'>
            {data.map((item, i) => (
                <Point
                    key={item.id} 
                    icon={<FaCheck className='md:w-3 md:h-3 w-2 h-2 text-white'/>}
                    classname='bg-black p-1 rounded-full'
                    text={item.text}
                    textCustom='ml-2 lg:text-lg md:text-base text-sm font-light'
                />
            ))}
        </div>

        <div className='md:flex md:mt-10 mt-5 items-center gap-5 md:mb-14'>
            <div className='lg:w-1/3 md:w-1/2  rounded-4xl overflow-hidden shadow-xl'>
                <img src='src/assets/images/TK.jpeg' className='object-cover object-center'/>
            </div>
            <div className='lg:w-1/3 md:w-1/2 flex flex-col items-center'>
                <p className='font-lora text-white text-center lg:text-lg md:text-base md:text-justify text-sm mt-5 md:mt-0'>
                    Cita Mutiara Islamic Global School didirikan tahun 2025 oleh Ibu Sulastri Muji Rahayu, S. Ikom dengan mengusung pengembangan Social Active students dengan kurikulum Islami, Bilingual, dan Science Technology School. Angkatan pertama akan dilaksanakan di tahun ajaran baru 2025 - 2026.
                </p>
                <Button onClick={handleWa} classname='rounded-full text-white bg-black py-1 px-10 hover:bg-white  hover:text-black text-center mt-5 lg:text-lg md:text-base w-fit' text='Daftar Sekarang'/>
            </div>
            <div className='hidden lg:block lg:w-1/3 rounded-4xl overflow-hidden shadow-xl'>
                <img src='src/assets/images/TK2.jpeg' className='object-cover object-center'/>
            </div>
        </div>
      </div>

      <div className='hidden  bg-black rounded-tr-4xl md:flex  w-fit p-5 lg:gap-7  gap-3 shadow mb-7 -translate-y-14'>
            <div className='flex items-center gap-3'>
               <img src='src/assets/images/mosque.png' className='lg:max-h-16 max-h-14 '/>
               <p className='text-white lg:text-2xl text-xl font-poppins font-semibold'>Islamic Learning</p>
            </div>
            <div className='h-16 w-[0.5px] bg-white'></div>
            <div className='flex items-center gap-3'>
               <img src='src/assets/images/flag.png' className='lg:max-h-16 max-h-14'/>
               <p className='text-white lg:text-2xl text-xl font-poppins font-semibold'>Semi International</p>
            </div>
            <div className='h-16 w-[0.5px] bg-white'></div>
            <div className='flex items-center gap-3 mr-5'>
               <img src='src/assets/images/project.png' className='lg:max-h-16 max-h-14'/>
               <p className='text-white lg:text-2xl text-xl font-poppins font-semibold'>Project Based</p>
            </div>
      </div>
    </div>
  )
}

export default HeroLayout
