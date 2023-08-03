import React from 'react'

const Dropdow = ({children,className,dopRef}) => {
  return (
    <div ref={dopRef} className={className}>
        {children}
    </div>
  )
}

export default Dropdow