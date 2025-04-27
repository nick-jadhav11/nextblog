'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/Assets/logo.avif'
import Navbar from './Navbar'
import Mobilenav from './Mobilenav'

const Header = () => {

  const [showNav, setShowNav] = useState(false)
  const handleNavShow = () => {
    setShowNav(true)
  }
  const handleNavHide = () => {
    setShowNav(false)
  }

  return (
    <div>
        <Navbar openNav = {handleNavShow} />
        <Mobilenav showNav={showNav} closeNav={handleNavHide} />
    </div>
  )
}

export default Header