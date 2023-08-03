import React, { useState,useEffect } from 'react'
import BreadCrumb from '../components/bread-crumb/BreadCrumb'
import Container from '../components/container/Container'
import Pagination from '../components/pagination/Pagination'
import BreadItem from '../components/bread-crumb/BreadItem'
import Flex from '../components/flex/Flex'
import { FaTh,FaThList,FaAngleRight,FaTimes } from "react-icons/fa";
import {BsFilter } from "react-icons/bs";
import Hadding from '../components/hadding/Hadding'
import Select from '../components/select/Select'
import Option from '../components/select/Option'
import SightBar from '../components/sightbar/SightBar'

const Shop = () => {
    const [itemNumber,setItemNumber]=useState(12)
    const [barToggle,setBarToggle]=useState(true)

    useEffect(()=>{
        const scroolWidth =()=>{
            if(window.innerWidth < 640){
                setBarToggle(false)
            }else{
                setBarToggle(true)
            }
        }
        console.log(window.innerWidth);
        scroolWidth()
        window.addEventListener("resize",scroolWidth)
    },[]);





  return (
    <section className='mt-5 md:mt-28'>
        <Container>
            <BreadCrumb>
                <Hadding title='Shop'/>
                    <Flex className='gap-2 items-center font-dm font-normal text-xs text-secoundary mt-2.5'>
                        <BreadItem href='/' title='Home' />
                        <FaAngleRight/> 
                        <BreadItem href='#' title='Shop' />
                    </Flex>
            </BreadCrumb>
            <div className="grid grid-cols-12 gap-5 mt-16 lg:mt-32 relative">
                    {barToggle &&
                        <div className='col-span-3 p-5 w-full absolute sm:static top-0 left-0 z-10 sm:p-0 bg-white'>
                        <FaTimes className='text-3xl cursor-pointer' onClick={()=>setBarToggle(false)} />
                        <SightBar/>
                    </div>
                    }
                <div className={barToggle ? `col-span-9`:`col-span-12`}>
                    <div className='flex justify-between mb-7 sm:mb-14 items-center'>
                        {!barToggle &&
                            <BsFilter className='text-3xl cursor-pointer' onClick={()=>setBarToggle(true)} />
                        }
                        <Flex className='gap-5 cursor-pointer hidden lg:flex'>
                            <FaTh/>
                            <FaThList/>
                        </Flex>
                        <div className='sm:flex gap-2 mt-5 lg:mt-0'>
                            <Select selictName='Sort by :'>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-black block w-52 p-2.5 mb-2 md:mb-0">
                                    <Option value='selected' optionName='Featured'/>
                                    <Option value='us' optionName='United States'/>
                                    <Option value ='ca' optionName='Bangladesh'/>
                                </select>
                            </Select>
                            <Select selictName='Show :'>
                                <select onChange={(e)=>setItemNumber(+e.target.value)} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-black block w-32 p-2.5">
                                    <Option selected value='12' optionName='12'/>
                                    <Option value='24' optionName='24'/>
                                    <Option value ='48' optionName='48'/>
                            </select>
                            </Select>
                        </div>
                    </div>
                    <Pagination itemsPerPage={itemNumber}/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Shop