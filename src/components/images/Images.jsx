import React from 'react'

const Images = ({imgSrc,className}) => {
  return (
    <img className={className} src={imgSrc} alt="img" />
  )
}

export default Images