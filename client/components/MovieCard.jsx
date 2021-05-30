import React from "react"
import { connect } from "react-redux"

function MovieCard(props) {
  return (
    <>
      <li className="movieCard">
        <img
          className="moviePhoto"
          src={`https://image.tmdb.org/t/p/original${props.imgUrl}`}
        />
        <p className="movieTitle">{props.title}</p>
        <p className="movieDetails">Rating: {props.rating}/10</p>
        {/* <p className="movieDetails">Date: {props.releaseDate}</p> */}
      </li>
    </>
  )
}
export default connect()(MovieCard)
