import React from 'react'
import Container from '../container/Container'
import Flex from '../flex/Flex'
import{PiNumberTwoBold} from 'react-icons/pi'
import{FaBabyCarriage} from 'react-icons/fa'
import{AiOutlineReload} from 'react-icons/ai'

const BannerBottom = () => {
  return (
    <section className='py-8'>
        <Container>
            <Flex className='justify-between'>
                <Flex className='items-center gap-2'>
                    <PiNumberTwoBold className='text-[10px] sm:text-3xl'/>
                    <p className='text-dm font-normal text-[10px] sm:text-base'>Two years warranty</p>
                </Flex>
                <Flex className='items-center gap-2'>
                    <FaBabyCarriage className='text-[10px] sm:text-3xl'/>
                    <p className='text-dm font-normal text-[10px] sm:text-base'>Free shipping</p>
                </Flex>
                <Flex className='items-center gap-2'>
                    <AiOutlineReload className='text-[10px] sm:text-3xl'/>
                    <p className='text-dm font-normal text-[10px] sm:text-base'>Return policy in 30 days</p>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default BannerBottom