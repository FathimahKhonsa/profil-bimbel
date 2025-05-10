import React from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import Button from '../../components/button';
import { dataImg } from '../../data/data';
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { fadeIn } from '../../animation/animation';
import { motion } from 'motion/react';

const ActivitiesLayout = () => {
  return (
    <div className='container mx-auto h-fit w-full'>
      <div className='md:flex p-5 h-full items-center'>
        <div className='md:w-2/3 lg:w-1/3 md:rounded-xl  mx-5'>
          <h1 className='md:text-6xl lg:text-7xl  text-4xl font-semibold text-grey-dark font-poppins'>Activities In Cita Mutiara</h1>
        </div>

        <div className='md:w-1/3 lg:w-2/3 mt-5 md:mt-0 overflow-hidden'>
          <ReactImageGallery  
            items={dataImg}
            showFullscreenButton={false}
            showPlayButton={false} 
          />
        </div>
      </div>
    </div>
  )
}

export default ActivitiesLayout
