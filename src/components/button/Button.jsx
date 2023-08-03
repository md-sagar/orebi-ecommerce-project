import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`${className} px-10 py-4 font-bold font-dm text-bold text-white bg-btcolor hover:bg-white border border-solid border-btcolor hover:text-btcolor duration-500
    `}>{text}</button>
  )
}

export default Button