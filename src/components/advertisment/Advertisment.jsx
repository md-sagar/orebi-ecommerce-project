import React from 'react'
import Container from '../container/Container'
import Images from '../images/Images'
import AdsImg from '../../assets/Ads_2.png'
import { Link } from 'react-router-dom'

const Advertisment = () => {
  return (
    <section className='mt-10 md:mt-32'>
        <Container>
            <Link>
                <Images imgSrc={AdsImg} />
            </Link>
        </Container>
    </section>
  )
}

export default Advertisment