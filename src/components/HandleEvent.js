import React from 'react'

export default function HandleEvent() {


 /*  const printMovie = ()=>{
      alert('IRON MAN')
  }   */

  const printMovie = (moviename)=>{
    alert(moviename)
  }  
  return (
    <div>
        {/* <button onClick={printMovie} >PrintMovieName</button> */}

        <button onClick={()=>printMovie('HANUMAN')} >PrintMovieName</button>

    </div>
  )
}
