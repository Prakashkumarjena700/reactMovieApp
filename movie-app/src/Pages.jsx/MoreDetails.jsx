import React from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../Components/Fetch'
import MovieCardDetails from './MovieCardDetails'

export default function MoreDetails() {
  const [obj, setObj] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const { moviedetailspage } = useParams()

  React.useEffect(() => {
    setLoading(true)
    getData(`https://radiant-inlet-76290.herokuapp.com/movies/${moviedetailspage}`)
      .then((res) => {
        setObj(res)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return  <div className='loadingIndicator' >  <img width='200px' src='https://thumbs.gfycat.com/CorruptOldfashionedGuineapig-max-1mb.gif' /> </div>
   
  }


  return (
    <div>
      <MovieCardDetails original_name
        ={obj.original_name}
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
