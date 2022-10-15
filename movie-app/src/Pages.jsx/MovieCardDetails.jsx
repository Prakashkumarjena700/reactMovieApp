import React from 'react'

export default function MovieCardDetails({backdrop_path,name,original_language,overview,first_air_date ,vote_average,origin_country}) {
  return (
    <div>
        <h4>{name}</h4>
        <img src={backdrop_path} alt={name} />
        <p>{original_language}</p>
        <p>{first_air_date}</p>
        <p>{vote_average}</p>
        <div>
            {
                origin_country && origin_country.map((ele)=> <p key={ele} >{ele}</p>)
            }
        </div>
            <p>{overview}</p>
    </div>
  )
}
