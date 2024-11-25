import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-full max-w-3xl my-4 md:my-0 mx-4 md:mx-0'>
          <input type="text" className="w-full border focus:border-font focus:outline-none rounded px-4 py-2" placeholder="Search game..." />
    </div>
  )
}

export default SearchBar