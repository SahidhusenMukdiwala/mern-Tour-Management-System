import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import gallaryImgages from './gallaryImages.js'

function MasonryImagesGallery() {
  return (
    <ResponsiveMasonry columnCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter='1rem'>
        {
          gallaryImgages.map((item, index) => (
            <img className='masonry__image' src={item} alt="#" key={index} style={{ width: '100%', display: 'block', borderRadius: '10px' }} />
          ))
        }
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery