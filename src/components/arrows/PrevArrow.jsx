import React from 'react'
import { FaLongArrowAltLeft} from "react-icons/fa";

const PrevArrow = ({onClick}) => {
  return (
    <div
          className='w-16 h-16 bg-secoundary text-white absolute rounded-full flex justify-center items-center cursor-pointer top-2/4 left-0 translate-y-[-50%] z-10'
          onClick={onClick}
        ><FaLongArrowAltLeft/>
    </div>
  )
}

export default PrevArrow