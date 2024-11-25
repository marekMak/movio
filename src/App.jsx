import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Hero } from './components/Hero'

function App() {
  const [genra, setGenra] = useState('');

  const setGenreClick = (genre)=>{
    console.log(genre);
    setGenra(genre)
}


  return (
    <>
      <div className="font-new-amsterdam">
        <Header/>
      </div>
      <div className='flex'>
        <div className='flex flex-2 px-20 h-screen'> 
          <Sidebar setGenre={setGenreClick}/>
        </div>
        <div className='flex flex-1 h-screen'>
          <Hero genra={genra}/>
        </div>
      </div>
   
    </>
  )
}

export default App
