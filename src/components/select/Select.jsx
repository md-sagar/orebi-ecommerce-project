import React from 'react'
import Flex from '../flex/Flex'

const Select = ({selictName,children}) => {
  return (
    <>
    <Flex className='items-center gap-3'>
        <p class="text-sm font-medium font-dm text-gray-900 "> {selictName}</p>
        {children}
    </Flex>
    </>
  )
}

export default Select