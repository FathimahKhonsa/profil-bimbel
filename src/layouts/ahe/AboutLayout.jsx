import React from 'react';
import { dataKeunggulanAhe } from '../../data/data';
import CardTwo from '../../fragments/card/CardTwo';

const AboutLayout = () => {
  return (
    <div className='container w-full mx-auto md:p-10 p-5'>
      <div className='lg:flex items-stretch lg:gap-10 md:gap-7'>
        <div className='lg:w-1/2'>
           <h1 className='lg:text-4xl sm:text-3xl text-2xl text-grey-dark font-semibold font-poppins'>Mengapa Belajar Membaca <span className='text-primary-blue'>dengan AHE</span></h1>
           <p className='md:text-lg sm:text-base text-sm font-thin font-lora text-grey-medium text-justify mt-5'>
              Les baca AHE merupakan bimbingan belajar dengan metode pembelajaran yang mudah dimengerti untuk anak usia dini. Les baca AHE diperuntukkan bagi siswa dimulai dari usia 4 tahun dengan metode membaca tanpa mengeja dan murid dilayani secara privat (satu abak satu grup) dengan sistem belajar yang teratur, terstruktur, asik dan menyenangkan. Les membaca Ahe dapat mengatasi masalah seperti: Anak kurang percaya diri, kurang inisiatif, kurang kreatif, tidak mandiri, kurang daya juang, kurang bertanggung jawab, kurang bersosialisasi, serta dapat mengatasi kemampuan konsentrasi yang rendah.
          </p>

          <div className='w-full h-[0.5px] bg-grey-medium my-5'></div>
          <div className='flex items-center gap-5'>
            <div className='w-1/2 overflow-hidden'>
              <img src='src/assets/images/ahe/modulAhe.png' className='w-full object-cover object-center'/>
            </div>
            <div className='w-1/2'>
              <h1 className='lg:text-4xl sm:text-3xl text-2xl text-grey-dark font-semibold font-poppins text-end'>Level <span className='text-primary-blue'>Baca AHE</span></h1>
              <p className='lg:text-lg sm:text-base text-sm text-justify mt-3'>Modul membaca AHE terdiri dari 10 level. Level dalam membaca berfungsi sebagai panduan bertahap supaya ananda dapat mengembangkan kemampuan membaca secara terstruktur dan efektif.</p>
            </div>
          </div>

        </div>
        <div className='lg:w-1/2 rounded-xl overflow-hidden shadow-2xl mt-5 lg:mt-0'>
          <img src='src/assets/images/ahe/EnamLangkahAhe.png' className='w-full object-cover object-left-bottom h-full'/>
        </div>
      </div>

      <div className='md:mt-20 mt-10'>
              <h1 className='md:hidden lg:block lg:text-4xl md:text-3xl text-2xl text-center text-grey font-semibold font-poppins'>Keunggulan <span className='text-primary-blue'>Membaca AHE</span></h1>
              <div className='md:hidden lg:flex sm:grid sm:grid-cols-2 md:grid-cols-3 sm:place-items-stretch sm:place-content-center md:justify-between mt-5'>
                {dataKeunggulanAhe.map((item, i) => (
                  <CardTwo>
                    <CardTwo.Header imgUrl={item.imgUrl}/>
                    <CardTwo.Title>{item.title}</CardTwo.Title>
                    <CardTwo.Body content={item.content} classname='hidden'/>
                  </CardTwo>
                ))}
              </div>
      
              <div className='hidden lg:hidden md:grid grid-cols-3 place-items-stretch'>
                {dataKeunggulanAhe.map((item, i) => (
                  <CardTwo>
                    <CardTwo.Header imgUrl={item.imgUrl}/>
                    <CardTwo.Title>{item.title}</CardTwo.Title>
                    <CardTwo.Body content={item.content} classname='hidden'/>
                  </CardTwo>
                ))}
      
                <h1 className='col-span-2 text-7xl font-bold text-end'>Keunggulan <span className='text-primary-blue'>Sempoa Asma</span></h1>
              </div>
      </div>
    </div>
  )
}

export default AboutLayout
