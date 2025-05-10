import React from 'react';
import Button from '../../components/button';

const HeroLayout = () => {
  const handleWa = () => {
    window.open("https://wa.me/6285224585840", "_blank");
  };

  return (
    <div className='container w-full h-fit mx-auto md:p-10 bg-yellow-50 '>
      <div className='md:flex gap-10 items-stretch h-full'>
        <div className='md:w-1/2 shadow-2xl rounded-2xl'>
            <img src='/images/sempoa.jpg' className='w-full h-full object-cover object-center md:rounded-2xl'/>
        </div>
        <div className='md:w-1/2 p-5 md:p-0'>
            <h1 className='lg:text-5xl text-2xl md:mt-0 text-grey-dark font-bold font-poppins'>Asyiknya Belajar Membaca Bersama <span className='text-primary-blue'>AHE (Anak Hebat) </span></h1>
            <p className='md:text-lg text-base text-justify text-grey-medium font-lora mt-5'>
                Membaca merupakan salah satu keterampilan dasar yang sangat penting dalam kehidupan manusia. Sejak usia dini, kita diajarkan untuk membaca karena aktivitas ini menjadi pintu gerbang menuju pengetahuan yang lebih luas. Belajar membaca bukan sekedar mengenal huruf dan kata, melainkan memahami isi, makna dan pesan dari apa yang dibaca. Kemampuan membaca yang baik dapat miningkatkan wawasa, memperluas imajinasi, serta melatih kemampuan berpikir kritis dan analitis.
            </p>
            <div className='md:mt-10 mt-5 flex justify-center md:justify-start'>
                <Button onClick={handleWa} classname='rounded-full text-grey-dark bg-secondary-yellow py-1.5 px-5 hover:bg-white hover:border-2 hover:border-secondary-yellow w-64' text='Daftar Sekarang'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroLayout;
