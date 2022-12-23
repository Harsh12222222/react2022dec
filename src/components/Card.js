import React from 'react'

export default function Card(props) {
  return (
    <div>
        {
            props.movieDetails.map((movie)=>(

               <div>
                    <img width={80} height={80} src={movie.imgSrc}/>
                    <h4>{movie.title}</h4>
                    <h5>{movie.text}</h5>
                    <hr/>
               </div>
            ))
        }
    </div>
  )
}
