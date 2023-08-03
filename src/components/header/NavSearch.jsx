
import React, { useEffect, useRef, useState } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { FaSearch,FaUserAlt,FaAngleDown,FaShoppingCart } from "react-icons/fa";
import { ImCross} from "react-icons/im";
import Container from '../container/Container'
import Dropdow from '../dropdown/Dropdow'
import List from '../list/List';
import ListItem from '../list-item/ListItem';
import Button from '../button/Button';
import CardImg from '../../assets/card.png'
import Images from '../images/Images';

const NavSearch = () => {
  const [toggle1,setToggle1]=useState(false);
  const [toggle2,setToggle2]=useState(false);
  const [toggle3,setToggle3]=useState(false);
  const dopref1 =useRef()
  const dopref2 =useRef()
  const dopref3 =useRef()

  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      if(dopref1.current.contains(e.target)){
        setToggle1(true)
      }else{
        setToggle1(false)
      }
      if(dopref2.current.contains(e.target)){
        setToggle2(true)
      }else{
        setToggle2(false)
      }
      if(dopref3.current.contains(e.target)){
        setToggle3(true);
      }else{
        setToggle3(false)
      }
    })
  },[])

  return (
    <section className='bg-[#F5F5F3] py-6'>
      <Container>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-3">
            <Dropdow dopRef={dopref1} className='relative z-10' >
              <p className='flex items-center gap-2.5 cursor-pointer'><HiMenuAlt4/><span className='hidden md:inline-block'>Shop by Category</span></p>
              {toggle1 && <List className='absolute top-16 left-0 bg-btcolor w-52 text- ml-5 box-border pl-5 py-4 inline-block cursor-pointer text-[#767676] font-dm font-normal'>
                <ListItem className="mt-3 hover:text-white hover:ml-3 duration-500" itemName="Accesories" />
                <ListItem className="mt-3 hover:text-white hover:ml-3 duration-500" itemName="Furniture" />
                <ListItem className="mt-3 hover:text-white hover:ml-3 duration-500" itemName="Electronics" />
                <ListItem className="mt-3 hover:text-white hover:ml-3 duration-500" itemName="Clothes" />
                <ListItem className="mt-3 hover:text-white hover:ml-3 duration-500" itemName="Bags" />
                <ListItem className="mt-3 hover:text-white hover:ml-3 duration-500" itemName="Home Appliances" />
              </List>}
            </Dropdow>
          </div>
          <div className="col-span-6 text-center relative">
            <input className='w-full py-4 px-5' type="text" placeholder='Search Products'   />
            <FaSearch className='absolute top-5 right-3 sm:right-7 translate-x-1/2'/>
          </div>
          <div className="col-span-3 flex justify-end items-center">
            <Dropdow dopRef={dopref2} className='relative z-10'>
              <div className='flex mr-3 sm:mr-10 cursor-pointer'><FaUserAlt/> <FaAngleDown className='ml-1'/> </div>
              {toggle2 && <List className='absolute top-16 right-0 w-52 bg-btcolor text-[#767676] text- ml-5 box-border inline-block cursor-pointer font-dm font-normal shadow-md pl-5 py-4 '>
              <ListItem className="mt-3 hover:text-white hover:ml-3 duration-500" itemName="My Account" />
                <ListItem className="mt-3 hover:text-white hover:ml-3 duration-500" itemName="Log Out" />
              </List>}
            </Dropdow>
            <Dropdow dopRef={dopref3} className='relative z-10' >
              <FaShoppingCart className='cursor-pointer'/>
              {toggle3 && <div className='bg-white absolute top-10 right-0 w-[360px] shadow-lg  box-border border border-solid border-[#f0f0f0]'>
                    <div className='flex py-5 gap-3 bg-[#f5f5f3] px-3 relative'>
                      <div className="w-10 h-10 ">
                        <Images imgSrc={CardImg} />
                      </div>
                      <div className="text">
                        <p>black smart watch</p>
                        <p>$4400</p>
                      </div>
                      <button className='absolute bottom-7 right-5'><ImCross/></button>
                    </div>
                    <div className='p-5'>
                      <p className='pb-3 font-dm font-normal '>Subtotal$4400</p>
                      <div className="flex gap-1">
                        <Button text='Vew Card'/>
                        <Button  text='Vew Card'/>
                      </div>
                    </div>
                </div>}
            </Dropdow>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NavSearch