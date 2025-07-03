import React from 'react';
import CardThree from '../../fragments/card/CardThree';
import { dataCabang } from '../../data/data';
import { fadeIn } from '../../animation/animation';
import { motion } from 'motion/react';

const CabangLayout = () => {
  return (
    <div id='idCabang' className='container mx-auto w-full lg:py-10'>
      <p className='text-3xl lg:text-4xl font-semibold font-poppins text-center text-grey-dark'>Cabang Cita Mutiara</p>
      <p className='text-base lg:text-lg font-lora font-light mx-5 lg:mx-20 mt-5 text-grey-medium text-justify'>
        Cita Mutiara akan terus berkembang untuk memberikan layanan pendidikan terbaik kepada siswa - siswi dengan menghadirkan cabang di berbagai lokasi strategis. Berikut ini daftar cabang Cita Mutiara:
      </p>

      <motion.div className='flex flex-col items-center md:flex-row md:items-stretch md:justify-between lg:px-20 mx-5 mt-5'
        variants={fadeIn('right', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.5}}
      >
        {dataCabang.map((item, i) => (
          <CardThree key={item.id} classname='hover:scale-105 mt-5 w-fit bg-blue-100 '>
            <CardThree.Header imgUrl={item.imgUrl} classname='w-20 md:w-20 lg:w-24'/>
            <CardThree.Body title={item.cabang} content={item.address} classname='md:max-w-30 sm:max-w-56 lg:max-w-52 max-w-50'/>
          </CardThree>
        ))}
      </motion.div>

      <p className='hidden md:block text-justify lg:mx-20 mt-5 font-lora font-light lg:text-lg text-grey-medium text-base mx-5'>
        Kami akan terus berupaya memperluas jangkauan layanan Kami untuk lebih dekat dengan siswa dan orang tua. Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut, jangan ragu untuk menghubungi cabang terdekat Kami.
      </p>
    </div>
  )
}

export default CabangLayout
