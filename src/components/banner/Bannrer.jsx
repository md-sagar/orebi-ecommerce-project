import React, { useState } from 'react'
import Slider from "react-slick";
import Images from '../images/Images';
import BannerImg from '../../assets/banner.png'
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router-dom';

const Bannrer = () => {

  let [dotActive, setDotActive] = useState(0);
        const settings = {
          dots: true,
          beforeChange: (prev, next) => {
            setDotActive(next);
          },
          arrows: false,
          autoplay: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: dots => (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '8%',
                transform: 'translateY(-50%)',
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
            style={
                i === dotActive 
                ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: '10px 0',
              } 
              : {
                width: "30px",
                color: "#262626",
                borderRight: "3px white solid",
                padding: '10px 0',
                color: "transparent",
              }}
            >
              0{i + 1}
            </div>
          ),
          responsive: [
            {
              breakpoint: 576,
              settings: {
                dots: false,
                appendDots: dots => (
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '2%',
                        transform: 'translateY(-50%)',
                      }}
                    >
                      <ul style={{ margin: "0px" }}> {dots} </ul>
                    </div>
                  ),
                  customPaging: i => (
                    <div
                    style={
                        i === dotActive 
                        ? {
                        width: "30px",
                        color: "#262626",
                        borderRight: "3px #262626 solid",
                        fontSize: '14px',
                      } 
                      : {
                        width: "30px",
                        color: "#262626",
                        borderRight: "3px white solid",
                        color: "transparent",
                        fontSize: '14px',
                      }}
                    >
                      0{i + 1}
                    </div>
                  ),
              }
            },
          ]
        };
  return (
    <section className=''>
         <div>
        <Slider {...settings}>
            <div>
            <Link to='#'>
                <Images className='w-full' imgSrc={BannerImg} />
            </Link>
            </div>
            <div>
            <Link to='#'>
                <Images className='w-full' imgSrc={BannerImg} />
            </Link>
            </div>
            <div>
            <Link to='#'>
                <Images className='w-full' imgSrc={BannerImg} />
            </Link>
            </div>
            

        </Slider>
      </div>
    </section>
  )
}

export default Bannrer