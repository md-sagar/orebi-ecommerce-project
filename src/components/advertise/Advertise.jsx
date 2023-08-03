import React from 'react'
import Container from '../container/Container'
import Ad1 from '../../assets/ad1.png'
import Ad2 from '../../assets/ad2.png'
import Ad3 from '../../assets/ad3.png'
import Images from '../images/Images'
import { Link } from 'react-router-dom'

const Advertise = () => {
  return (
    <section className='pt-5 md:pt-36'>
        <Container>
            <div className="grid grid-cols-2 gap-x-5 lg:gap-x-9">
                <div className="col-span-1">
                    <Link to='#'>
                        <Images imgSrc={Ad1}/>
                    </Link>
                </div>
                <div className="col-span-1">
                    <Link to='#'>
                        <Images imgSrc={Ad2}/>
                    </Link>
                    <Link to='#'>
                        <Images className='mt-4 lg:mt-10 inline-block' imgSrc={Ad3}/>
                    </Link>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Advertise