import React from 'react'

const Option = ({optionName,value}) => {
  return (
    <>
        <option value={value}>{optionName}</option>
    </>
  )
}

export default Option