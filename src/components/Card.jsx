import { FaChrome } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";


<FaWindows />
const Card = ({game}) => {
  return (
    <div>   


        <div className="max-w-sm bg-background rounded shadow">
                <img className="rounded-t-lg shadow" src={game.thumbnail} alt={`${game.title} thumbnail`} />
            <div className="p-5">
                <h1 className="mb-2 text-medium md:text-3xl font-bold tracking-tight text-font tracking-wider font-new-amsterdam">{game.title}</h1>
                <p className="mb-1">
                    {game.platform === 'Web Browser' ? (
                        <FaChrome className="cursor-pointer text-font" title={game.platform} /> 
                    ):( 
                        <FaWindows className="cursor-pointer text-font" title={game.platform} />
                    )}
                </p>

                <p className="font-new-amsterdam text-font">genre: {game.genre}</p>
                <p className="font-new-amsterdam text-font">developer: {game.developer}</p>
            </div>
        </div>

    </div>
  )
}

export default Card