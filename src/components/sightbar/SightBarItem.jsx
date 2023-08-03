import React, { useState } from 'react'
import {FaCaretDown,FaCaretUp} from 'react-icons/fa'
import SightbarItemContent from './SightbarItemContent'

const SightBarItem = ({dropdown,title,data}) => {

    const [dropDown,setDropDown] = useState(dropdown)
    const [itemToggle, setItemToggle] = useState(false)

  return (
    <>
        {dropDown ?
            <div onClick={()=>setItemToggle(!itemToggle)} className=' flex  cursor-pointer items-center justify-between'>
                <h3 className='font-dm text-xl font-bold my-5'>{title}</h3>
                {itemToggle ?
                    <FaCaretUp className='text-2xl'/>
                    :
                    <FaCaretDown className='text-2xl'/>
                }
            </div>
            :
                <div>
                    <h3 className='cursor-pointer font-dm text-xl font-bold my-5'>{title}</h3>
                </div>
        }

        {itemToggle && 
            <div>
                {data.map((item,index)=>(
                    <div key={index}>
                        {item.color&&
                            <div>
                                <SightbarItemContent title={item.color} color={item.bgColor} />
                            </div>

                        }
                        {item.brand &&
                            <SightbarItemContent title={item.brand}/>
                        }
                    </div>
                ))}
            </div>
        
        }
        {!dropDown &&
             <div>
                {data.map((item,index)=>(
                    <div key={index}>
                        {item.cname &&
                            <SightbarItemContent title={item.cname} subname={item.subName}/>
                        }

                        {item.price &&
                            <SightbarItemContent title={item.price}/>
                        }
                    </div>
                ))}
         </div>
        }
    </>
  )
}

export default SightBarItem