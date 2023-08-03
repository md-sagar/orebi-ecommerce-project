import React from 'react'
import Container from '../container/Container'
import Hadding from '../hadding/Hadding'
import NewImg1 from '../../assets/new1.png'
import NewImg2 from '../../assets/new2.png'
import NewImg3 from '../../assets/new3.png'
import NewImg4 from '../../assets/new4.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import NextArrow from '../arrows/NextArrow'
import PrevArrow from '../arrows/PrevArrow'
import Product from '../products/Product'

const Newarrivals = () => {


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
            <Hadding title='New Arrivals' className='mb-5'/>
            <Slider {...settings}>
                <Product img={NewImg1}/>
                <Product img={NewImg2}/>
                <Product img={NewImg3}/>
                <Product img={NewImg4}/>
                <Product img={NewImg1}/>
            </Slider>
        </Container>
    </section>
  )
}

export default Newarrivals