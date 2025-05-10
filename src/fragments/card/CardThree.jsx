import React from 'react'

const CardThree = (props) => {
  const {children, classname} = props;

  return (
    <div className={`${classname}  rounded-lg p-1.5 shadow-xl flex items-stretch justify-center gap-3`}>
      {children}
    </div>
  )
}

const Header = (props) => {
  const {imgUrl, classname} = props;
  return(
    <div className={`rounded-lg  overflow-hidden ${classname}`}>
      <img src={imgUrl} className={`rounded-lg object-cover object-center h-full w-full `}/>
    </div>
  )
}

const Body = (props) => {
  const {title, content, classname} = props;
  return(
    <div className={classname}>
      <p className='text-grey-dark font-lora font-medium lg:text-lg md:text-base text-sm'>{title}</p>
      <p className='text-grey-medium font-lora font-light lg:text-base text-xs'>{content}</p>
    </div>
  )
}

CardThree.Header = Header;
CardThree.Body = Body;

export default CardThree;
