import React from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../Components/Fetch'
import MovieCardDetails from './MovieCardDetails'

export default function MoreDetails() {
  const[obj, setObj]=React.useState({})
  const{moviedetailspage}=useParams()
  
  React.useEffect(()=>{
    getData(`https://radiant-inlet-76290.herokuapp.com/movies/${moviedetailspage}`)
    .then((res)=> setObj(res))
  },[])

 
  return (
    <div>
      <MovieCardDetails name={obj.name} 
      origin_country={obj.origin_country}
      backdrop_path={obj.backdrop_path}
      original_language={obj.original_language}
      overview={obj.overview}
      first_air_date={obj.first_air_date}
      vote_average={obj.vote_average}
      />
    </div>
  )
}
