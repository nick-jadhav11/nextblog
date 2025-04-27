import Image from 'next/image'
import React from 'react'

const WhyChooseCard = ({ image, title, linkText }) => {
  return (
    <div className=''>
        <Image src={image} alt={title} width={80} height={80} className='object-contain mx-auto' />
        <h1 className='text-center text-lg mt-5 mb-5 font-semibold text-gray-800'>{title}</h1>
        <p className='text-gray-600 text-center font-medium text-sm mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab officia, eum reiciendis molestias</p>
        <p className='text-center font-semibold text-blue-500 hover:texxt-blue-900 transition-all duration-300 cursor-pointer'>{linkText} &#8594;</p>
    </div>
  )
}

export default WhyChooseCard