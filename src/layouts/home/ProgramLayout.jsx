import React from 'react';
import CardTwo from '../../fragments/card/CardTwo';
import { dataProgram } from '../../data/data';
import { Navigate, useNavigate } from 'react-router';

const ProgramLayout = () => {
  return (
    <div id='idProgram' className='container mx-auto w-full h-fit lg:px-7'>
      <div className='px-5 md:flex md:justify-between md:items-center'>
        <div className='md:w-1/3'>
          <h1 className='font-poppins font-semibold text-3xl lg:text-4xl text-grey-dark'>Rumah Belajar Cita Mutiara</h1>
        </div>
        <div className='hidden md:block lg:h-20 md:h-24 border-l bg-black w-[0.5px] mx-5'></div>
        <div className='md:w-2/3'>
          <p className='text-justify font-light font-lora text-sm lg:text-lg text-grey-medium mt-3 md:mt-0'>
            Rumah Belajar Cita Mutiara merupakan tempat bimbingan belajar yang hadir untuk mendampingi anak - anak dalam proses belajar dengan pendekatan yang menyenangkan, interaktif, dan penuh kasih sayang. Dengan program - program yang disediakan, kami berkomitmen membantu anak - anak mengembangkan potensi mereka secara optimal.
          </p>
        </div>
      </div>

      <div className='hidden sm:flex mt-3 justify-center lg:gap-14 md:gap-5'>
        {dataProgram.map((item, i) => (
          <CardTwo key={item.id} classname={i % 2 === 0 ? 'mt-0' : 'mt-10'}>
            <CardTwo.Header imgUrl={item.imgUrl}/>
            <CardTwo.Title>{item.title}</CardTwo.Title>
            <CardTwo.Body content={item.content} link={item.link}/>
          </CardTwo>
        ))}
      </div>

      <div className='sm:hidden px-5 '>
        {dataProgram.map((item, i) => (
          <CardTwo key={item.id} classname='w-full'>
            <CardTwo.Header imgUrl={item.imgUrl}/>
            <CardTwo.Title>{item.title}</CardTwo.Title>
            <CardTwo.Body content={item.content} link={item.link}/>
          </CardTwo>
        ))}
      </div>
    </div>
  )
}

export default ProgramLayout
