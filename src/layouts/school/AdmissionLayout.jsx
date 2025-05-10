import React from 'react';
import { LuRocket } from 'react-icons/lu';
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';
import { FaSchool } from 'react-icons/fa';

const AdmissionLayout = () => {
  return (
    <div className='container mx-auto w-full md:p-7 px-5'>
      <h1 className='text-center font-lora lg:text-xl text-lg'>ADMISSION</h1>
      <h1 className='text-center font-lora lg:text-3xl md:text-2xl text-xl text-black mt-2.5 font-bold'>Simple Steps to Join Cita Mutiara Islamic Global School</h1>

      <div className='md:flex gap-5 w-full h-fit mt-5'>
        <div className='bg-gray-200 p-5 md:w-1/2'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div className='lg:h-14 h-10 w-1 bg-black'></div>
                    <p className='font-semibold font-lora lg:text-2xl text-xl ml-5'>Syarat Pendaftaran</p>
                </div>
                <div className='p-2 rounded-full border border-black'>
                    <LuRocket className='lg:w-10 lg:h-10 w-8 h-8'/>
                </div>
            </div>
            <div className='p-5'> 
               <p className='font-medium lg:text-xl text-lg font-lora italic text-grey-medium'>
                    <span className='inline-flex mr-2'><VscDebugBreakpointLogUnverified/></span>Mengisi Formulir Pendaftaran
                </p>
                <p className='font-medium lg:text-xl text-lg font-lora italic text-grey-medium'>
                    <span className='inline-flex mr-2'><VscDebugBreakpointLogUnverified/></span>Fotokopi Akte Kelahiran
                </p>  
                <p className='font-medium lg:text-xl text-lg font-lora italic text-grey-medium'>
                    <span className='inline-flex mr-2'><VscDebugBreakpointLogUnverified/></span>Fotokopi Kartu Keluarga
                </p> 
                <p className='font-medium lg:text-xl text-lg font-lora italic text-grey-medium'>
                    <span className='inline-flex mr-2'><VscDebugBreakpointLogUnverified/></span>Pas foto 3 x 4 (2 lembar)
                </p> 
            </div>
        </div>
        <div className='bg-black p-5 md:w-1/2 my-5 md:my-0'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div className='lg:h-14 h-10 w-1 bg-white'></div>
                    <p className='font-semibold font-lora text-2xl ml-5 text-white'>Biaya Siswa</p>
                </div>
                <div className='p-2 rounded-full border border-white'>
                    <FaSchool className='lg:w-10 lg:h-10 w-8 h-8 text-white'/>
                </div>
            </div>
            <div className='p-5'> 
                    <p className='font-medium lg:text-xl text-lg font-lora italic text-white'>
                        <span className='inline-flex mr-2'><VscDebugBreakpointLogUnverified/></span>Biaya Pendaftaran : Rp 175.000,-
                    </p>
                    <p className='font-medium lg:text-xl text-lg font-lora italic text-white'>
                        <span className='inline-flex mr-2'><VscDebugBreakpointLogUnverified/></span>Seragam (4 Stel) : Rp 850.000,-
                    </p>  
                    <p className='font-medium lg:text-xl text-lg font-lora italic text-white'>
                        <span className='inline-flex mr-2'><VscDebugBreakpointLogUnverified/></span>Uang Gedung : -
                    </p> 
                    <p className='font-medium lg:text-xl text-lg font-lora italic text-white'>
                        <span className='inline-flex mr-2'><VscDebugBreakpointLogUnverified/></span>Total : Rp 1.225.000,-
                    </p> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdmissionLayout
