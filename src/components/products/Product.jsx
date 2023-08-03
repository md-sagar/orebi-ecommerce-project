import React from 'react'
import Images from '../images/Images'
import Button from '../button/Button'
import Flex from '../flex/Flex'
import { FaHeart,FaShoppingCart,FaSyncAlt,} from "react-icons/fa";

const Product = ({className,img}) => {

  return (
    <div className={className}>
        <div className='group mx-5'>
        <div className='relative overflow-hidden'>
            <Images imgSrc={img} className='w-full'/>
            <Button text='New' className='absolute top-5 left-5'/>
            <div className='h-3/6 group-hover:bottom-0 duration-700 bg-white p-8 w-full absolute bottom-[-50%] left-0'>
                <Flex className='justify-end mb-3 items-center'>
                <p className='mr-2 text-secoundary font-normal text-base'>Add to Wish List</p>
                <FaSyncAlt/>
                </Flex>
                <Flex className='justify-end mb-3  items-center'>
                <p className='mr-2 text-secoundary font-normal text-base'>Compare</p>
                <FaHeart/>
                </Flex>
                <Flex className='justify-end mb-3  items-center'>
                <p className='mr-2 text-secoundary font-normal text-base'>Add to Wish List</p>
                <FaShoppingCart/>
                </Flex>
            </div>
        </div>
        <Flex className='justify-between my-5'>
            <h5 className='font-dm font-bold text-xl'>Basic Crew Neck Tee</h5>
            <p className='text-base font-dm font-normal text-secoundary'>$44.00</p>
        </Flex>
        <p className='text-base font-dm font-normal text-secoundary'>Black</p>
        </div>
    </div>
  )
}

export default Product