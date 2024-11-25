import {useState, useEffect} from 'react'
import axios from 'axios'

import Card from './Card'
import Skeleton from './Skeleton'

export const Hero = ({genra}) => {

    const [genre, setGenre] = useState('');

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [platform, setPlatform] = useState('');
    const [order, setOrder] = useState('');
    const skeletons = [1,2,3,4,5,6]

    useEffect(() => {
        if(genra && genra !== '') {
        setGenre(genra.toLowerCase());
        }
    },[genra]);

    
    const changePlatform = (platform)=>{
        setPlatform(platform)
    }

    const changeOrder = (order)=>{
        setOrder(order)
    }
  
    useEffect(() => {
      // API call na načítanie hier
      const fetchGames = async () => {
        try {
           let url = 'https://www.freetogame.com/api/games';
           let params = [];

            if(genre && genre !== '') {
            params.push(`category=${genre}`);
            }
            if(platform && platform !== ''){
                params.push(`platform=${platform}`);
            }
            if(order && order !== ''){
                params.push(`sort-by=${order}`);
            }

            if(params.length > 0){
                url += '?' + params.join('&');
            }

            let response = await fetch(url);
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          setGames(data); 
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      fetchGames();
    }, [genre, platform, order]); 


  
    return (
      <div>
        <h1 className='text-6xl text-font font-new-amsterdam mb-4'>{genre} {platform} Games</h1>
        <div className='flex mb-6'>
            <select onChange={(e)=>{changePlatform(e.target.value)}} className='bg-slate-200 hover:bg-slate-300 transition-all duration-300 py-2 px-4 mr-4 rounded font-new-amsterdam cursor-pointer'>
                <option value="">platform</option>
                <option value="pc">PC</option>
                <option value="browser">Web</option>
            </select>
            <select onChange={(e)=>{changeOrder(e.target.value)}} className='bg-slate-200 hover:bg-slate-300 transition-all duration-300 py-2 px-4 mr-4 rounded font-new-amsterdam cursor-pointer'>
                <option value="">order by</option>
                <option value="alphabetical">name</option>
                <option value="release-date">date</option>
            </select>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-4 gap-4 pr-2'>
        {loading ? (
            // Show skeletons while loading
            skeletons.map((item, index) => (
                <Skeleton key={index} />
            ))
            ) : (
            // Render the actual content once loading is complete
            games.map((game) => (
                <div key={game.id}>
                <Card game={game} />
                </div>
            ))
            )}
        </ul>
      </div>
    );
  }
