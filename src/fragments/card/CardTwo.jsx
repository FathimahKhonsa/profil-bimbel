import React from 'react';
import Button from '../../components/button';
import { GoArrowUpRight } from 'react-icons/go';
import { useNavigate } from 'react-router';

const CardTwo = (props) => {
  const {children, classname} = props;

  return (
    <div className={`${classname} h-fit w-fit rounded-xl p-3`}>
      {children}
    </div>
  )
}

const Header = (props) => {
    const {imgUrl} = props;
    return(
        <div className=' w-full md:max-w-52 lg:max-w-60 md:h-52 rounded-2xl shadow-xl hover:scale-105 '>
            <img src={imgUrl} className='w-full  md:max-w-52 lg:max-w-60 md:h-52 rounded-2xl object-cover'/>
        </div>
    )
}

const Title = (props) => {
    const {children} = props;
    return(
        <div className='lg:max-w-60 md:max-w-52  mt-5'>
            <p className='font-lora font-semibold  text-base text-grey-dark'>
                {children}
            </p>
        </div>
    )
}

const Body = (props) => {
    const {content, classname, link} = props;
    const navigate = useNavigate();
    const handleClick = () => {
       if (link) navigate(link)
    }

    return(
        <div className='lg:max-w-60 md:max-w-52  w-full'>
            <p className='font-lora text-sm  text-grey-medium font-light'>{content}</p>
            <div className= {classname}>
                <Button onClick={handleClick} text='See More' icon={<GoArrowUpRight className='ml-5'/>} classname='text-black text-base lg:text-lg font-light hover:bg-white hover:border-2 hover:border-secondary-yellow bg-secondary-yellow py-1 px-7 rounded-xl mt-5 shadow w-full'/>
            </div>
        </div>
    )
}

CardTwo.Header = Header;
CardTwo.Title = Title;
CardTwo.Body = Body;

export default CardTwo;
