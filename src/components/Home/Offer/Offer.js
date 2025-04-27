'use client'
import React from 'react'

const Offer = () => {
    const handleclick = () => {
        alert('Hello')
    }
  return (
    <div className='flex items-center justify-center pt-24 pb-24 mb-20 bg-black'>
        <div className='text-center px-6'>
            <h2 className='text-white text-2xl md:text-3xl font-semibold mb-4'>Lorem ipsum dolor sit, amet consectetur</h2>
            <p className='text-gray-400 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea ut nulla esse soluta accusantium.</p>
            <button className='bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-medium mb-4 hover:bg-blue-800' onClick={handleclick}>Free Trial</button>
            <p className='text-gray-400'>No Credit Card Required</p>
        </div>
    </div>
  )
}

export default Offer