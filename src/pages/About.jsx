import React from 'react'
import Container from '../components/container/Container'
import BreadCrumb from '../components/bread-crumb/BreadCrumb'
import Hadding from '../components/hadding/Hadding'
import Flex from '../components/flex/Flex'
import BreadItem from '../components/bread-crumb/BreadItem'
import cardImg1 from '../assets/card.png'
import cardImg2 from '../assets/product-card.png'
import {FaAngleRight} from 'react-icons/fa'
import Images from '../components/images/Images'
import TextItem from '../components/text-item/TextItem'
import Button from '../components/button/Button'

const About = () => {
  return (
    <section className='mt-5 md:mt-28'>
        <Container>
          <BreadCrumb>
            <Hadding title='About'/>
            <Flex className='gap-2 items-center font-dm font-normal text-xs text-secoundary mt-2.5'>
                <BreadItem href='/' title='Home' />
                <FaAngleRight/> 
                <BreadItem href='#' title='About' />
            </Flex>
          </BreadCrumb>
          {/*===== about img ==== */}
          <div className="grid grid-cols-2 gap-5 mt-20">
            <div className="col-span-1">
              <Images imgSrc={cardImg1}/>
            </div>
            <div className="col-span-1">
              <Images imgSrc={cardImg2}/>
            </div>
          </div>
          <p className='font-dm font-semibold text-4xl my-10 md:my-28'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
          {/* about text item */}
          <div className='grid grid-cols-3 gap-5'>
              <div className="col-span-3 md:col-span-1">
                 <TextItem title='Our Vision' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
              </div>
              <div className="col-span-3 md:col-span-1">
              <TextItem title='Our Story' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."/>
              </div>
              <div className="col-span-3 md:col-span-1">
              <TextItem title='Our Brands' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
              </div>
          </div>
        </Container>
    </section>
  )
}

export default About