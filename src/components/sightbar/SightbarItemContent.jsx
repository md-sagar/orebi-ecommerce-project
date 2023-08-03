import React, { useState } from 'react'
import {FaPlus,FaWindowMinimize} from 'react-icons/fa'

const SightbarItemContent = ({title,subname,color}) => {

  const [subDropDown,setSubDropDown] = useState(true)
  const [itemToggle, setItemToggle] = useState(false)
  const [subText,setSubText]=useState(subname)
  console.log(color);
  return (
    <>
      {subText &&
        subDropDown ?

          <div onClick={()=>setItemToggle(!itemToggle)} className='flex items-center justify-between cursor-pointer border-solid border-b border-secoundary py-3'>
            <p className='font-dm font-normal text-base text-secoundary'>{title}</p>
            {itemToggle ? <p><FaWindowMinimize/></p> : <p className='text-2xl'><FaPlus/></p>}
  
          </div>
          :
          <div className='font-dm font-normal text-base text-secoundary border-solid border-b border-secoundary py-3'>
            {color &&
              <span className='w-4 h-4 rounded-full inline-block mr-5' style={{background:color}}></span>
            }
            <p className='inline-block'>{title}</p>
          </div>
        }

      {itemToggle &&
          <div>
          {subText.map((subItem,index)=>(
            <div key={index}>
                  {subItem &&
                    <p className='font-dm font-normal text-base text-secoundary border-solid border-b border-secoundary py-3 ml-3' key={index}>{subItem.subName}</p>
                  }
            </div>
          ))}
        </div>
      }

    </>
  )
}

export default SightbarItemContent