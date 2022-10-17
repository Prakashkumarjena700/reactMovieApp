import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({id,original_name,poster_path,moreDetalis,vote_average, popularity}) {
    const more=`/moviepage/${moreDetalis}`
  return (
    <div>
        <h4>{original_name}</h4>
        <img width='200px' src={poster_path} alt={original_name} />
        <p><b>Rating : </b>{vote_average}</p>
        <p><b>Popularity : </b>{popularity}</p>
        <Link to={more} ><button>View More</button></Link>
    </div>
  )
}
