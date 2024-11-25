import React from 'react'

import ThemeSwitcher from './ThemeSwitcher'
import Logo from './Logo'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className="h-24 bg-background py-10 px-14 flex items-center justify-between">
        <Logo className='flex flex-1'/>
        <SearchBar className='flex flex-2'/>
        <ThemeSwitcher className='flex flex-1'/>
    </div>
  )
}

export default Header