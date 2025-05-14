import React from 'react';
import CardOne from '../../fragments/card/CardOne';
import { dataAbout } from '../../data/data';
import Students from '../../fragments/Students';
import { fadeIn } from '../../animation/animation';
import { motion } from 'motion/react';

const AboutLayout = () => {
  return (
    <div id='idAbout' className='container mx-auto w-full h-fit'>
      <div className='bg-primary-blue w-full p-5 md:p-7'>
        <p className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white font-poppins'>About Us</p>
        <div className='md:flex justify-between items-center gap-10'>
          <div className='md:w-3/4'>
            <p className='text-white text-base lg:text-lg font-light font-lora mt-5 text-justify'>Cita Mutiara merupakan sebuah yayasan yang menaungi Cita Mutiara Islamic School dan Rumah Belajar Cita Mutiara yang merupakan sebuah tempat dimana pendidikan berkualitas bertemu dengan dedikasi tinggi untuk mencetak generasi unggul dan berakhlak mulia. Kami merupakan lembaga pendidikan yang menggabungkan sistem pembelajaran formal sekolah dengan Bimbingan belajar yang terstruktur dan inovatif.</p>
          </div>
          <div className='md:w-1/4 flex md:justify-center justify-start'>
              <Students
                classname="xl:mt-8 md:mt-5 mt-3" 
                modif="xl:h-18 h-14 -mx-1.5 shadow" 
                textBig="font-semibold text-white font-lora text-sm xl:text-3xl md:text-base" 
                textSmall="xl:text-md md:text-sm text-xs font-lora text-white"
              />
          </div>
        </div>
      </div>

      <p className='text-center mt-10 text-2xl md:text-3xl lg:text-4xl text-grey-dark font-poppins font-bold'>Why You Choose Us?</p>
      <motion.div className='md:flex md:justify-between md:items-stretch lg:px-20 grid grid-cols-2 gap-3 px-3 place-items-stretch'
         variants={fadeIn('right', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.5}}>
        {dataAbout.map((item, i) => (
          <CardOne classname='mt-5'>
            <CardOne.Header title={item.title}/>
            <CardOne.Body>
              {item.content}
            </CardOne.Body>
          </CardOne>
        ))}
      </motion.div>

      <motion.div className='md:flex md:items-center px-5 md:px-5 md:mt-10 lg:p-10 lg:gap-10 md:gap-5'
         variants={fadeIn('left', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.5}}>
        <div className='hidden md:block md:w-1/3 h-full sm:h-full rounded-lg shadow overflow-hidden lg:h-80'>
          <img src='/images/Founder.jpeg' alt='Founder' className='h-full w-full object-cover rounded-lg'/>
        </div>
        <div className='md:w-2/3'>
          <p className='text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-grey-dark mt-10 md:mt-0'>Meet The Founder</p>
          <div className='w-full bg-grey-light h-[0.5px] my-2'></div>
          <img src='/images/Founder.jpeg' alt='Founder' className='md:hidden h-52 sm:h-60 w-full object-cover rounded-lg my-5'/>
          <p className='font-lora text-sm lg:text-base text-justify font-light text-grey-medium h-fit'>
            Berangkat dari kepedulian terhadap kualitas pendidikan di Indonesia, khusunya bagi anak -anak yang membutuhkan dukungan lebih, Saya mendirikan Rumah Belajar Cita Mutiara yang menjadi cikal bakal lahirnya Yayasan Cita Mutiara Al Mahira. Dengan tekad untuk memberikan akses pendidikan yang lebih merata, lembaga ini berkembang dari bimbingan belajar informal menjadi institusi pendidikan formal yang berfokus pada bidang STEAM (Science, Technology, Engineering, Arts, and Mathematics), pembentukan karakter, serta pengembangan potensi anak secara holistik. Sebagai pendiri, saya percaya bahwa setiap anak memiliki mutiara dalam dirinya yang perlu diasah melalui pendidikan yang bermakna, insklusif, dan penuh cinta. Yayasan ini lahir dari mimpi sederhana : Menciptakan ruang belajar yang bukan hanya mengajar, tetapi juga menginspirasi dan membentuk generasi hebat, berdaya, dan berakhlak.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutLayout
