import React from 'react'

const BreadCrumb = ({children,className}) => {
  return (
    <div className={className}>
       {children}
    </div>
  )
}

export default BreadCrumb