import React from 'react';
import Button from '../../components/button';
import { GoArrowUpRight } from 'react-icons/go';
import { useNavigate } from 'react-router';

const SchoolLayout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/school');
  }

  return (
    <div id='idSchool' className='container mx-auto px-5 lg:px-7'>
      <div className='md:flex w-full h-full items-stretch md:gap-5'>
        <div className='md:w-2/3 lg:p-5'>
          <h1 className='font-poppins text-3xl lg:text-4xl font-semibold text-grey-dark md:mt-7'>Cita Mutiara Islamic Global School</h1>
          <div className='bg-black w-full h-[0.5px] mt-5'></div>
          <p className='text-sm md:text-base lg:text-lg font-lora font-extralight text-grey-medium text-justify mt-5'>
            Cita Mutiara Islamic Global School didirikan tahun 2025 oleh Mrs. sulastri dengan mengusung pengembangan kurikulum Islamic School, Bilingual School, Science, Technology, dan Social Active Students dengan pembelajaran Islamic, semi Internasional dan pembelajaran berbasis proyek. Angkatan pertama akan dilaksanakan di tahun ajarang baru 2025 - 2026.
          </p>
          <Button onClick={handleClick} text='See More' icon={<GoArrowUpRight className='ml-5'/>} classname='text-white lg:text-lg text-base font-semibold hover:text-primary-blue hover:bg-white hover:border-2 hover:border-primary-blue bg-primary-blue py-1 px-7 rounded-full mt-5 shadow w-full md:max-w-56 sm:max-w-56'/>
        </div>
        <div className='md:w-1/3  sm:h-72 md:h-80 lg:h-72 h-52 w-full mt-5 rounded-xl shadow-xl overflow-hidden'>
          <img src='/images/TK.jpeg' className=' object-cover w-full h-full object-center rounded-xl'/>
        </div>
      </div>
    </div>
  )
}

export default SchoolLayout
