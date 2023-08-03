import React from 'react'
import Container from '../container/Container'
import Hadding from '../hadding/Hadding'
import Specil1 from '../../assets/specil1.png'
import Specil2 from '../../assets/specil2.png'
import Specil3 from '../../assets/specil3.png'
import Specil4 from '../../assets/specil4.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import NextArrow from '../arrows/NextArrow'
import PrevArrow from '../arrows/PrevArrow'
import Product from '../products/Product'

const SpecilOffer = () => {


    const settings = {
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              }
          },
      ]
    };

  return (
    <section className='mt-5 md:pt-32'>
        <Container>
            <Hadding title='Special Offers' className='mb-5'/>
            <Slider {...settings}>
               <Product img={Specil1}/>
               <Product img={Specil2}/>
               <Product img={Specil3}/>
               <Product img={Specil4}/>
               <Product img={Specil1}/>
            </Slider>
        </Container>
    </section>
  )
}

export default SpecilOffer