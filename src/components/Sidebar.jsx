import {useEffect, useState} from 'react'
import Spinner
 from './Spinner'
const Sidebar = ({genres, setGenre}) => {

    const categories = ['Shooter','Anime','Strategy','Fantasy','Sci-Fi','Racing','Social','Sports']

    const [timer, setTimer]  = useState(true)

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setTimer(false)
        },300);

    return () => clearTimeout(timerId);
    },[])

    const setGenreSidebar = (genre)=>{
        setGenre(genre)
    }

  return (
    <>
    <div className='flex flex-col'>
        <h1 className='text-3xl text-font font-new-amsterdam'>Genres</h1>
        <ul className='text-xl text-font font-new-amsterdam mt-5'>
            {timer ? (
                <Spinner/>
            ):(
            categories.map((category) =>(
                <li onClick={()=>setGenreSidebar(category)} className='text-font cursor-pointer transition-all duration-300 hover:text-slate-500' key={category}>{category}</li>
            ))
            )}
        </ul>
    </div>
    </>
  )
}

export default Sidebar