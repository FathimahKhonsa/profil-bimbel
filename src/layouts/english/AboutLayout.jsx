import React from 'react';
import { dataKeunggulanEng, dataLevelEng } from '../../data/data';
import CardTwo from '../../fragments/card/CardTwo';
import CardThree from '../../fragments/card/CardThree';

const AboutLayout = () => {
  const paddingLvl = ['pl-5', 'pl-15', 'pl-25'];

  return (
    <div className='container mx-auto w-full h-fit mt-5'>
      <h1 className='lg:text-4xl sm:text-3xl text-2xl px-5 md:px-0 font-semibold font-poppins text-center text-grey-dark'>Mengapa Belajar <span className='text-primary-blue'>Bahasa Inggris ?</span></h1>
      <div className='md:flex md:py-10 lg:px-20 md:px-10 gap-10 w-full h-fit items-center'>
        <div className='md:w-1/2 mt-5 md:mt-0'>
          <div className='h-fit bg-blue-100 shadow-xl md:rounded-xl'>
            <div className='p-5'>
              <h1 className='lg:text-2xl text-xl font-semibold font-lora'>Membuka Pintu Ke Dunia Baru</h1>
              <p className='lg:text-lg text-base font-light font-lora text-grey-medium mt-5'>
                Bahasa Inggris merupakan bahasa Internasional yang sangat penting untuki dipelajari di zaman ini. Dengan mempelajari Bahasa Inggris kita akan mendapatkan banyak kesempatan di kancah internasional dan menjangkau jaringan global. Rumah Belajar Cita Mutiara memfalitasi anak untuk meningkatkan skill Bahasa Inggris dengan tutor yang berpengalaman.
              </p>
            </div>
            <div className='flex justify-end'>
              <img src='/images/world.png' className='md:h-28 h-24'/>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 mt-5 md:mt-0'>
          <div className='h-fit bg-yellow-100 shadow-xl rounded-xl'>
            <div className='p-5'>
              <h1 className='lg:text-2xl text-xl font-semibold font-lora'>Karir yang Lebih Cemerlang</h1>
              <p className='lg:text-lg text-base font-light font-lora text-grey-medium mt-5'>
                Bahasa Inggris merupakan kunci menuju peluang kerja internasional
              </p>
            </div>
            <div className='flex md:justify-end'>
              <img src='/images/goodCareer.png' className='md:h-28 h-24'/>
            </div>
          </div>

          <div className='h-fit bg-yellow-100 mt-5 shadow-xl rounded-xl'>
            <div className='p-5'>
              <h1 className='lg:text-2xl text-xl font-semibold font-lora'>Komunikasi Global</h1>
              <p className='lg:text-lg text-base font-light font-lora text-grey-medium mt-5'>
                Bahasa Inggris merupakan bahasa utama dalam komunikasi secara global
              </p>
            </div>
            <div className='flex justify-end'>
              <img src='/images/networking.png' className='md:h-28 h-24'/>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden md:block w-full bg-primary-blue p-10'>
        <div className='bg-white w-full p-5 rounded-xl'>
          <h1 className='lg:text-4xl sm:text-3xl text-2xl font-poppins font-semibold text-center text-grey-dark'>Keunggulan <span className='text-primary-blue'>Bahasa Inggris</span> Rumah Belajar Cita Mutiara</h1>
          <div className='lg:flex md:grid md:grid-cols-2 lg:justify-between md:place-items-center lg:items-stretch mt-5'>
            {dataKeunggulanEng.map((item, i) => (
              <CardTwo>
                <CardTwo.Header imgUrl={item.imgUrl}/>
                <CardTwo.Title>{item.title}</CardTwo.Title>
                <CardTwo.Body content={item.content} classname='hidden'/>
              </CardTwo>
            ))}
          </div>
        </div>
      </div>

      <div className='p-3 mt-5 md:hidden'>
        <h1 className='lg:text-4xl sm:text-3xl text-2xl font-poppins font-semibold text-center text-grey-dark'>Keunggulan <span className='text-primary-blue'>Bahasa Inggris</span> Rumah Belajar Cita Mutiara</h1>

        <div className='grid grid-cols-2 place-items-stretch content-stretch'>
          {dataKeunggulanEng.map((item, i) => (
              <CardTwo>
                <CardTwo.Header imgUrl={item.imgUrl}/>
                <CardTwo.Title>{item.title}</CardTwo.Title>
                <CardTwo.Body content={item.content} classname='hidden'/>
              </CardTwo>
            ))}
        </div>
      </div>

      <div className='w-full md:py-10 py-5'>
        <h1 className='lg:text-4xl sm:text-3xl text-2xl text-center font-semibold font-poppins text-grey-dark'>Level <span className='text-primary-blue'>Bahasa Inggris</span></h1>
        <p className='font-lora text-grey-medium font-light lg:text-xl sm:text-base text-sm text-justify px-5 mt-5'>
          Berdasarkan standarisasi sumber belajar Bahasa dari Eropa yang telah diakui oleh seluruh dunia (CEFR), kemampuan Bahasa Inggris bisa diukur dengan tiga katagori sebagai berikut:
        </p>

        {dataLevelEng.map((item, i) => (
          <div key={i} className={`hidden md:flex w-full gap-5 mt-5 ${paddingLvl[i]}`}>
            <div className='w-1/2'>
              <CardThree classname='bg-blue-200 p-3'>
                <CardThree.Header imgUrl={item.imgUrl} classname='max-w-28'/>
                <CardThree.Body content={item.content}/>
              </CardThree>
            </div>
            <div className='w-1/2 bg-slate-100 flex items-center'>
              <p className='text-4xl font-poppins font-semibold text-grey-medium ml-10'>{item.title}</p>
            </div>
          </div>
        ))}

        {dataLevelEng.map((item, i) => (
          <div key={i} className={`md:hidden w-full px-5`}>
            <div className='mt-5 flex flex-col items-center w-full'>
              <p className='text-2xl font-poppins font-semibold text-grey-medium'>{item.title}</p>
              <CardThree classname='w-fit bg-blue-200 p-3'>
                <CardThree.Header imgUrl={item.imgUrl} classname='w-20 sm:w-24'/>
                <CardThree.Body content={item.content} classname='max-w-56'/>
              </CardThree>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutLayout
