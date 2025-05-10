import React from 'react';
import { PiStarFour } from 'react-icons/pi';
import { pembiasaan } from '../../data/data';
import ReactImageGallery from 'react-image-gallery';
import { pembiasaanImg } from '../../data/data';

const AboutLayout = () => {
  const data = [
    {
      id : '01',
      text : 'Menguasai Dua Bahasa (Inggris dan Indonesia)'
    },
    {
      id : '02',
      text : 'Memiliki karakter yang mandiri dan gemar belajar',
      style : 'bg-base-yellow'
    },
    {
      id : '03',
      text : 'Memiliki wawasan / pengetahuan yang luas'
    },
    {
      id : '04',
      text : 'Menyukai hal baru dan ilmu pengetahuan baru',
      style : 'bg-base-yellow'
    },
    {
      id : '05',
      text : 'Memiliki kecakapan hidup yang dibutuhkan dan mampu beradaptasi dengan lingkungan',
      style : 'bg-base-yellow'
    },
    {
      id : '06',
      text : 'Tidak tertinggal dengan perkembangan teknologi modern'
    },
    {
      id : '07',
      text : 'Memiliki kemampuan literasi dan numerasi yang baik',
      style : 'bg-base-yellow'
    },
    {
      id : '08',
      text : 'Mampu berpikir kritis dan dapat menyelesaikan permasalahan dengan baik'
    },
  ]


  return (
    <div className='container mx-auto w-full'>
      <div className='flex justify-center items-center md:gap-7 gap-3'>
        <div className='text-center'>
          <p className='font-bold lg:text-xl md:text-lg text-base font-lora'>PROGRAM</p>
          <p className='font-semibold lg:text-lg md:text-base text-sm font-lora italic text-grey-medium'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Goals<span className='inline-flex ml-2'><PiStarFour/></span>
          </p>
        </div>
        <div className='md:hidden mt-5'>
          <p className='text-5xl font-bold font-poppins text-primary-blue '>TK</p>
        </div>
        <div className='hidden md:block'>
          <p className='lg:text-5xl md:text-4xl font-bold font-poppins text-primary-blue '>Taman Kanak - Kanak</p>
        </div>
      </div>
      <p className='text-center font-bold text-primary-blue font-poppins lg:text-5xl md:text-4xl text-3xl'>
          Cita Mutiara Islamic Global School
      </p>  

      <div className='grid md:grid-cols-4 grid-cols-2 md:p-10 p-3 gap-5 md:gap-0'>
        {data.map((item, i) => (
          <div key={item.id} className={`${item.style} p-5`}>
            <p className='font-lora lg:text-4xl text-3xl font-semibold text-grey-dark'>{item.id}</p>
            <p className='font-lora lg:text-xl text-md font-light text-grey-medium'>{item.text}</p>
          </div>
        ))}
      </div>

      <div className='hidden bg-black p-10 lg:flex items-center rounded-2xl mb-10 justify-between mx-5'>
        <div>
          <p className='text-white font-bold lg:text-4xl md:text-3xl font-poppins'>Pembiasaan</p>
          <p className='text-white font-bold lg:text-4xl md:text-3xl font-poppins'>Siswa</p>
        </div>
        {pembiasaan.map((item,i) => (
           <div key={item.id} className='h-56 w-44 bg-cover rounded-xl'
            style={{backgroundImage: `url(${item.imgUrl})`}}>
            <div className='h-full w-full bg-black/40 p-3'>
              <p className='text-white font-lora font-semibold text-lg'>
                 {item.text}
              </p>
            </div>
           </div>
          ))}
      </div>

      <div className='hidden bg-black p-5 md:grid grid-cols-3 lg:hidden items-center rounded-xl gap-5 mx-5'>
        <div>
          <p className='text-white font-bold lg:text-4xl md:text-3xl font-poppins'>Pembiasaan</p>
          <p className='text-white font-bold lg:text-4xl md:text-3xl font-poppins'>Siswa</p>
        </div>
        {pembiasaan.map((item,i) => (
           <div key={item.id} className='h-56 w-44 bg-cover rounded-xl'
            style={{backgroundImage: `url(${item.imgUrl})`}}>
            <div className='h-full w-full bg-black/40 p-3'>
              <p className='text-white font-lora font-semibold text-lg'>
                 {item.text}
              </p>
            </div>
           </div>
          ))}
      </div>

      <div className='md:hidden bg-black p-3 mx-3 rounded-lg'>
        <p className='text-white font-semibold text-center text-3xl font-poppins'>Pembiasaan Siswa</p>
        <div className='md:w-2/3 mt-5 md:mt-0 overflow-hidden'>
          <ReactImageGallery  
            items={pembiasaanImg}
            showFullscreenButton={false}
            showPlayButton={false} 
          />
        </div>
      </div>

      <div className='md:flex items-center justify-between '>
        <div className='p-5'>
          <div className='flex'>
            <img src='src/assets/images/pin.png' className='lg:h-10 h-8 rotate-270 mr-3'/>
            <h1 className='text-primary-blue font-poppins font-bold lg:text-4xl text-3xl'>Program Unggulan</h1>
          </div>
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium mt-5'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Bilingual School
          </p>
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Small Class System
          </p>
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Project Based Learning
          </p> 
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Student Active Learning
          </p>
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Tahsin & Tahfidz Qur'an
          </p>  
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium'>
            <span className='inline-flex mr-2'><PiStarFour/></span>STEAM (Science, Technology, Engineering, Art, Math)
          </p>
        </div>

        <div className='flex p-5'>
          <div className='overflow-hidden w-80 lg:w-80 md:w-60 h-fit -rotate-5 rounded-xl shadow-xl'>
            <img src='/images/HeroImg.jpg' className='object-cover object-center'/>
          </div>
          <div className='overflow-hidden w-80 lg:w-80 md:w-60 border-2 border-gray-100 h-fit mt-7 -mx-1 rotate-5 rounded-xl shadow-xl'>
            <img src='/images/STEAM.jpg' className='object-cover object-center'/>
          </div>
        </div>
      </div>

      <div className='md:flex items-center justify-between mt-5 mb-10'>
        <div className='hidden md:flex p-5'>
          <div className='overflow-hidden w-80 lg:w-80 md:w-60 h-fit -rotate-5 rounded-xl shadow-xl'>
            <img src='/images/teachers.jpeg' className='object-cover object-center'/>
          </div>
          <div className='overflow-hidden w-80 lg:w-80 md:w-60 h-fit mt-7 -mx-1 rotate-5 rounded-xl shadow-xl'>
            <img src='/images/classroom.png' className='object-cover object-center'/>
          </div>
        </div>

        <div className='p-5'>
          <div className='flex md:justify-end'>
            <img src='/images/pin.png' className='lg:h-10 h-8 rotate-270 mr-3'/>
            <h1 className='text-primary-blue font-poppins font-bold lg:text-4xl text-3xl'>Fasilitas Sekolah</h1>
          </div>
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium mt-5 md:text-end'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Komputer
          </p>
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium md:text-end'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Pojok Membaca
          </p>
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium md:text-end'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Ruang Multimedia
          </p> 
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium md:text-end'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Alat Peraga Sains
          </p>
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium md:text-end'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Ruang Kelas yang Nyaman
          </p>  
          <p className='font-semibold lg:text-2xl md:text-lg text-xl font-lora italic text-grey-medium md:text-end'>
            <span className='inline-flex mr-2'><PiStarFour/></span>Tenaga Pengajar yang Professional
          </p>

          <div className='flex mt-7 md:hidden'>
          <div className='overflow-hidden w-80 h-fit -rotate-5 rounded-xl shadow-xl'>
            <img src='/images/teachers.jpeg' className='object-cover object-center'/>
          </div>
          <div className='overflow-hidden w-80 border-2 border-gray-100 h-fit mt-7 -mx-1 rotate-5 rounded-xl shadow-xl'>
            <img src='/images/classroom.png' className='object-cover object-center'/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutLayout
