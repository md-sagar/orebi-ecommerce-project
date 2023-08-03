import React from 'react'
import Container from '../container/Container'
import Hadding from '../hadding/Hadding'
import Best1 from '../../assets/best1.png'
import Best2 from '../../assets/best2.png'
import Best3 from '../../assets/best3.png'
import Best4 from '../../assets/best4.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import NextArrow from '../arrows/NextArrow'
import PrevArrow from '../arrows/PrevArrow'
import Product from '../products/Product'

const Bestseller = () => {


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
            <Hadding title='Our Bestsellers' className='mb-5'/>
            <Slider {...settings}>
                <Product img={Best1}/>
                <Product img={Best2}/>
                <Product img={Best3}/>
                <Product img={Best4}/>
                <Product img={Best1}/>
            </Slider>
        </Container>
    </section>
  )
}

export default Bestseller