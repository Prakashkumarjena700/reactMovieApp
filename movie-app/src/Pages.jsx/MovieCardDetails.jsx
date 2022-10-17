import React from 'react'

export default function MovieCardDetails({ backdrop_path, original_name, original_language, overview, first_air_date, vote_average, origin_country }) {
  return (
    <div className='detailsContainer' >
      <img src={backdrop_path} alt={original_name} />
      <div className='detailsContainerDis' >
        <h4>{original_name}</h4>
        <p>{overview}</p>
        <p><b>Original Language : </b>{original_language}</p>
        <p><b>First Air Date : </b>{first_air_date}</p>
        <p><b>Rating : </b>{vote_average}</p>
        <div>
          {
            origin_country && origin_country.map((ele) => <p key={ele} ><b>Origin Counter : </b>{ele}</p>)
          }
        </div>
      </div>
    </div>
  )
}
