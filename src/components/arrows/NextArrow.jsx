import React from 'react'
import { FaLongArrowAltRight} from "react-icons/fa";

const NextArrow = ({onClick}) => {
    
    return (
        <div
          className='w-16 h-16 bg-secoundary text-white absolute rounded-full flex justify-center items-center cursor-pointer top-2/4 right-0 translate-y-[-50%]'
          onClick={onClick}
        ><FaLongArrowAltRight/></div>
      );
}
export default NextArrow