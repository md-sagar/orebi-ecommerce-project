import React from 'react'
import { Link } from 'react-router-dom'

const BreadItem = ({title,href}) => {
  return (
    <Link to={href}>
       {title}
    </Link>
  )
}

export default BreadItem