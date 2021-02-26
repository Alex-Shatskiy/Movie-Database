import React from "react";
import { connect } from "react-redux";

function MovieCard(props) {
  return (
    <>
      <li className="movieCard">
        <h3>{props.title}</h3>
        <img
          className="moviePhoto"
          src={`https://image.tmdb.org/t/p/original${props.imgUrl}`}
        />
        <p>Date: {props.releaseDate}</p>
        Summary:<p>{props.summary}</p>
        <p>Rating: {props.rating}/10</p>
      </li>
    </>
  );
}
export default connect()(MovieCard);
