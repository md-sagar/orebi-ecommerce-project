import React, { useEffect, useState } from 'react'
import Logo from '../../assets/Logo.png'
import Images from '../images/Images'
import List from '../list/List'
import ListItem from '../list-item/ListItem'
import { FaBars } from "react-icons/fa6";
import Container from '../container/Container'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggle,setToggle] = useState(true);
    useEffect(()=>{
        const scroolWidth =()=>{
            if(window.innerWidth < 768){
                setToggle(false)
            }else{
                setToggle(true)
            }
        }
        scroolWidth()
        window.addEventListener("resize",scroolWidth)
    },[]);
  return (
    <nav className='py-8 bg-white'>
        <Container>
            <div className="grid grid-cols-12 items-center=">
                <div className='col-span-4'>
                    <Link to='#'>
                        <Images  imgSrc={Logo} />
                    </Link>
                </div>
            
                <div className='col-span-12 md:col-span-8'>
                    <FaBars onClick={()=>setToggle(!toggle)} className='md:hidden absolute top-8 right-1.5 cursor-pointer'/>
                    {toggle && 
                    <List className='inline-block pt-5 md:pt-0 md:flex justify-end md:gap-x-10 font-dm text-sm font-normal cursor-pointer'>
                        <ListItem href='/' className="hover:font-bold my-2 md:my-0" itemName="Home"/>
                        <ListItem href='/shop' className="hover:font-bold my-2 md:my-0" itemName="Shop"/>
                        <ListItem href='/product' className="hover:font-bold my-2 md:my-0" itemName="Products"/>
                        <ListItem href='/about' className="hover:font-bold my-2 md:my-0" itemName="About"/>
                        <ListItem href='/contact' className="hover:font-bold my-2 md:my-0" itemName="Contacts"/>
                        <ListItem className="hover:font-bold my-2 md:my-0" itemName="Journal"/>
                    </List>}
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar