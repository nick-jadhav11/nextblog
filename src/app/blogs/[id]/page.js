'use client'
import { useEffect, useState } from 'react'
import blog_data from '@/Assets/blog_data'
import Image from 'next/image';
import Logo from '@/Assets/logo.avif'

const page = ({params}) => {

    const [data, setData] = useState(null);
    const fetchBlogData = () => {
        for(const element of blog_data)
        {
            if(Number(params.id) === element.id) {
                setData(element);
                break;
            }
        }
    }

    useEffect (() => {
        fetchBlogData()
    }, [])
  return ( data?
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={Logo} alt='' width={180} className='w-[130px] sm:w-auto' />
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000'>Get Started</button>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        </div>
    </div>
    :<></>
  )
}

export default page