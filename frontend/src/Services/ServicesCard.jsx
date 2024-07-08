import React from 'react'
import './ServicesCard.css'

const ServicesCard = ({item}) => {

    const {imgUrl,title,desc} = item
  return<div className='services__item'>
    <div className="services_img">
        <img src={imgUrl} alt="#" />
    </div>

    <h5>{title}</h5>
    <p>{desc}</p>
  </div>
  
}

export default ServicesCard