import Image from 'next/image'
import React from 'react'
import Logo from '@/Assets/logo.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={Logo} alt='' width={120}/>
        <p className='text-sm text-white'>All righs reserved. Copyright @blooger</p>
        <div className='flex justify-between gap-2'>
            <FontAwesomeIcon icon={faTwitter} size="2x" color="skyblue" />
            <FontAwesomeIcon icon={faGithub} size="2x" color="skyblue" />
            <FontAwesomeIcon icon={faFacebook} size="2x" color="skyblue" />
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="skyblue" />
        </div>
    </div>
  )
}

export default Footer