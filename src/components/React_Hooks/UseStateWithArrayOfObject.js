import React, { useState } from 'react'
import movieInfo from '../../movieInfo'

export default function UseStateWithArrayOfObject() {

  const [movieList, setMovieList] = useState(movieInfo)
  const [newMovie, setNewMovie] = useState("")

  const CheckBoxHandler = (singleMovieInfo) => {
    setMovieList(
      movieList.map(
        (movie, index) =>
          movie.title === singleMovieInfo.title ? { ...movie, seen: !movie.seen } : movie
      )
    )

  }


  const AddMovie = () => {
     setMovieList([...movieList, { title: newMovie, seen: false }])

  }
  return (
    <div>
      <p style={{ 'textAlign': 'center' }}>
        <input type="text" onChange={(event) => setNewMovie(event.target.value)} />
        <button onClick={AddMovie}>Add</button>
      </p>
      <table border={1} align="center">
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Seen</th>
          </tr>
        </thead>
        <tbody>
          {
            movieList.map((movie, index) => (
              // movie = {title,text,seen}
              <tr>
                <td>{movie.title}</td>
                <td>
                  <input type="checkbox" onChange={() => CheckBoxHandler(movie)} checked={movie.seen} />
                </td>

              </tr>

            ))


          }
        </tbody>

      </table>
    </div>
  )
}
