import React from 'react'

import imgLogo from '../assets/logo.webp'

const Logo = () => {
  return (
    <div className='ml-3'>
        <img src={imgLogo} className='md:h-20 h-12 w-20' alt="logo"/>
    </div>
  )
}

export default Logo