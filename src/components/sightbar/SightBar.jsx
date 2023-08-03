import React from 'react'
import SightBarItem from './SightBarItem'
import { category,colors,brands,prices} from '../../data/Data'

const SightBar = () => {
  return (
    <>
        <SightBarItem title="Shop by Category" data={category} dropdown={false}/>
        <SightBarItem title="Shop by Color" data={colors} dropdown={true}/>
        <SightBarItem title="Shop by Brand" data ={brands} dropdown={true}/>
        <SightBarItem title="Shop by Price" data={prices} dropdown={false}/>
    </>
  )
}

export default SightBar