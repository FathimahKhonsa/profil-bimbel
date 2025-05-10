import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6';
import { fadeIn } from '../../animation/animation';
import { motion } from 'motion/react';

const CardOne = (props) => {
  const {children, classname} = props;

  return (
    <div className={`rounded-lg bg-yellow-100 shadow-xl ${classname}`}>
      {children}
    </div>
  )
}

const Header = (props) => {
    const {title, classname} = props;
    return(
        <div className='flex lg:w-[220px] md:w-[150px] items-center justify-between p-3'>
            <p className='text-black  font-lora font-semibold text-sm lg:text-lg'>{title}</p>
            <div className='flex  justify-center'>
                <FaCircleCheck className='text-black md:w-8 md:h-8 w-6 h-6' />
            </div>
        </div>
    )
}

const Body = (props) => {
    const {children} = props;
    return(
        <div className='p-3 font-lora text-black text-xs lg:text-base font-light lg:w-[220px] md:w-[150px]'>
            <p>{children}</p>
        </div>
    )
}

CardOne.Header = Header;
CardOne.Body = Body;

export default CardOne;
