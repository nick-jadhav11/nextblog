import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Analytic = () => {
  return (
    <div className='pt-24 pb-16'>
        {/* define grid */}
        <div className='w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* Image */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Image src={`${process.env.NODE_ENV === 'production' ? '/nextblog' : ''}/images/elli-desktop.png`} alt="girl" width={500} height={500} className='object-contain' />
            </div>
            {/* Text */}
            <div className='p-6'>
                <h1 className='text-base font-semibold text-orange-500'>Audience Traking</h1>
                <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold texxt-gray-900'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
                <p className='mt-4 text-gray-400 text-sm font-medium leading-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, error. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <ul className='mt-7 space-y-2 text-gray-800'>
                    <li className='flex items-center font-semibold'>
                        <FaCheckCircle className='text-green-500 mr-2' />
                        Chat Process Module
                    </li>
                    <li className='flex items-center font-semibold'>
                        <FaCheckCircle className='text-green-500 mr-2' />
                        Chat Process Module
                    </li>
                    <li className='flex items-center font-semibold'>
                        <FaCheckCircle className='text-green-500 mr-2' />
                        Chat Process Module
                    </li>
                </ul>
                <button className='mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-800 transition-all duration-200 hover:text-white'>Explore &rarr;</button>
            </div>
        </div>
    </div>
  )
}

export default Analytic