import React from 'react'
import Container from '../components/container/Container'
import BreadCrumb from '../components/bread-crumb/BreadCrumb'
import Hadding from '../components/hadding/Hadding'
import Flex from '../components/flex/Flex'
import BreadItem from '../components/bread-crumb/BreadItem'
import {FaAngleRight} from 'react-icons/fa'
import Button from '../components/button/Button'

const Contact = () => {
  return (
    <section className='mt-5 md:mt-28'>
      <Container>
        <BreadCrumb>
            <Hadding title='Contact'/>
            <Flex className='gap-2 items-center font-dm font-normal text-xs text-secoundary mt-2.5'>
                <BreadItem href='/' title='Home' />
                <FaAngleRight/> 
                <BreadItem href='#' title='Contact' />
            </Flex>
        </BreadCrumb>
        {/* contact form */}
        <div className='mt-10 '>
            <Hadding className='mb-5' title='Fill up a Form'/>
            <form action="">
                <div>
                    <p className='text-2xl font-bold mb-3'>NAME </p>
                    <input className='px-5 py-2 border border-solid border-secoundary' type="text" name="name" placeholder='Your name here' />
                </div>
                <div className='my-5'>
                    <p className='text-2xl font-bold mb-3'>Email </p>
                    <input className=' px-5 py-2 border border-solid border-secoundary' type="text" name="name" placeholder='Your email here' />
                </div>
                <div>
                    <p className='text-2xl font-bold mb-3'>Message </p>
                    <textarea className='px-5 py-2 border border-solid border-secoundary' type="text" name="name" placeholder='Your message here' />
                </div>
                <div className='mt-10'>
                    <Button text='Post'/>
                </div>
            </form>
        </div>
        
      </Container>
    </section>
  )
}

export default Contact