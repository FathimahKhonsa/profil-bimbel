import React from 'react';

const point = (props) => {
const {icon, text, classname, textCustom} = props;

  return (
    <div className='flex items-center'>
      <div className={`flex items-center justify-center h-fit ${classname}`}>
        {icon}
      </div>
      <p className={`font-lora text-white ${textCustom}`}>{text}</p>
    </div>
  )
}

export default point;
