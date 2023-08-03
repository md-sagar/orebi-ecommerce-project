import React from 'react'
import Container from '../components/container/Container'
import BreadCrumb from '../components/bread-crumb/BreadCrumb'
import Hadding from '../components/hadding/Hadding'
import Flex from '../components/flex/Flex'
import BreadItem from '../components/bread-crumb/BreadItem'
import {FaAngleRight,FaCaretDown} from 'react-icons/fa'
import Images from '../components/images/Images'
import cardImg1 from '../assets/card.png'
import cardImg2 from '../assets/product-card.png'
import stars from '../assets/Stars.png'
import Button from '../components/button/Button'



const Product = () => {
  return (
    <section className='mt-5 md:mt-28'>
        <Container>
            <BreadCrumb>
                <Hadding title='Products'/>
                <Flex className='gap-2 items-center font-dm font-normal text-xs text-secoundary mt-2.5'>
                    <BreadItem href='/' title='Home' />
                    <FaAngleRight/> 
                    <BreadItem href='#' title='Products' />
                </Flex>
            </BreadCrumb>
                <div className="grid grid-cols-2 gap-5 mt-10">
                    <div className="col-span-1">
                        <Images imgSrc={cardImg2}/>
                    </div>
                    <div className="col-span-1">
                        <Images imgSrc={cardImg1}/>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div className="col-span-1">
                        <Images imgSrc={cardImg1}/>
                    </div>
                    <div className="col-span-1">
                        <Images imgSrc={cardImg2}/>
                    </div>
                </div>
                <div className='mt-10'>
                    <Hadding title='Product'/>
                    <Images className='my-3' imgSrc={stars}/>
                    <p className='font-dm font-normal text-base text-secoundary'>$88.00 <span className='text-2xl text-black ml-5'>$44.00</span></p>
                </div>
                <div className='mt-10'>
                    <Flex className='items-center gap-6 font-bold'>
                        <p>COLOR : </p>
                        <Flex className='gap-3'>
                            <div className='w-5 h-5 bg-red-500 rounded-full'></div>
                            <div className='w-5 h-5 bg-green-500 rounded-full'></div>
                            <div className='w-5 h-5 bg-blue-500 rounded-full'></div>
                            <div className='w-5 h-5 bg-yellow-500 rounded-full'></div>
                            <div className='w-5 h-5 bg-purple-500 rounded-full'></div>
                        </Flex>
                    </Flex>
                    <Flex className='items-center gap-10 mt-5 font-bold'>
                        <p>SIZE :</p>
                        <Flex className='w-36 box-border px-5 py-2 justify-between border border-solid border-black items-center'>
                            <p>S</p>
                            <FaCaretDown/>
                        </Flex>
                    </Flex>
                    <Flex className='items-center gap-10 mt-5 font-bold'>
                        <p>QUANTITY: </p>
                        <Flex className='w-36 box-border px-5 py-2 justify-between border border-solid border-black items-center font-2xl'>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </Flex>
                    </Flex>
                    <Flex className='items-center gap-10 mt-5 font-bold'>
                        <p>STATUS:</p>
                        <p className='text-secoundary'>In stock</p>
                    </Flex>
                    <Flex className='items-center gap-2 md:gap-5 mt-5'>
                        <Button text='Add to Wish List'/>
                        <Button text='Add to Cart'/>
                    </Flex>
                    <div className='my-7 text-xl font-dm font-bold'>
                        <h3 className='my-5'>FEATURES & DETAILS</h3>
                        <h3>SHIPPING & RETURNS</h3>
                    </div>
                    <p className='w-full lg:w-2/5 font-dm font-normal text-xl text-secoundary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className='mt-10'>
                    <Hadding className='mb-5' title='Add a Review'/>
                    <form action="">
                        <div>
                            <p className='text-2xl font-bold mb-3'>NAME :</p>
                            <input className='px-5 py-2 border border-solid border-secoundary' type="text" name="name" placeholder='Your name here' />
                        </div>
                        <div className='my-5'>
                            <p className='text-2xl font-bold mb-3'>Email :</p>
                            <input className=' px-5 py-2 border border-solid border-secoundary' type="text" name="name" placeholder='Your email here' />
                        </div>
                        <div>
                            <p className='text-2xl font-bold mb-3'>Review :</p>
                            <textarea className='px-5 py-2 border border-solid border-secoundary' type="text" name="name" placeholder='Your review here' />
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

export default Product