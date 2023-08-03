import React from 'react'

const TextItem = ({title,text}) => {
  return (
    < >
        <h4 className='font-dm font-bold text-2xl mb-3'>{title}</h4>
        <p className='font-dm font-normal text-base'>{text}</p>
    </>
  )
}

export default TextItem