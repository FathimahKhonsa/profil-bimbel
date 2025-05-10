import React from 'react'

const Button = (props) => {
  const {icon, text, classname, customize, onClick} = props;

  return (
    <button onClick={onClick} className={`flex items-center justify-center font-semibold ${classname}`}>
        {text}
        {icon && <span className={customize}>{icon}</span>}
    </button>
  )
}

export default Button;
