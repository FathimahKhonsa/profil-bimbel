import React from 'react';
import Button from '../../components/button';

const HeroLayout = () => {
  const handleWa = () => {
    window.open("https://wa.me/6285224585840", "_blank");
  };

  return (
    <div className='container w-full h-fit mx-auto md:p-10 bg-yellow-50'>
      <div className='md:flex lg:gap-10 gap-5 items-stretch  h-full'>
        <div className='md:w-1/2 shadow-2xl rounded-2xl'>
            <img src='src/assets/images/sempoa.jpg' className='w-full h-full object-cover object-center md:rounded-2xl'/>
        </div>
        <div className='md:w-1/2 p-5 md:p-0'>
            <h1 className='lg:text-6xl md:text-3xl text-2xl md:mt-0 text-grey-dark font-bold font-poppins'>Maksimalkan Potensi Kecerdasan Anak Bersama <span className='text-primary-blue'>Sempoa Asma</span></h1>
            <p className='lg:text-lg sm:text-base text-sm font-light text-justify text-grey-medium font-lora mt-5'>
                Pembelajaran Mental Aritmatika merupakan sebuah pembelajaran berhitung cepat dengan menggunakan metode dan alat bantu sempoa. Metode yang digunakan dengan menyedikitkan hafalan dan mengubahnya menjadi logika - logika matematika. Sehingga anak mengerjakannya seperti sedang bermain game dan menjadikan matematika sebagai hal yang mengasyikkan.
            </p>
            <div className='md:mt-10 mt-5 flex justify-center md:justify-start'>
                <Button onClick={handleWa} classname='rounded-full text-grey-dark bg-secondary-yellow py-1.5 px-5 hover:bg-white hover:border-2 hover:border-secondary-yellow  w-64' text='Daftar Sekarang'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroLayout
