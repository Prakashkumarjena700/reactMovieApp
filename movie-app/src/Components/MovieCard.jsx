import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({id,original_name,poster_path,moreDetalis}) {
    const more=`/moviepage/${moreDetalis}`
  return (
    <div>
        <h4>{original_name}</h4>
        <img width='200px' src={poster_path} alt={original_name} />
        <Link to={more} >View More</Link>
    </div>
  )
}
