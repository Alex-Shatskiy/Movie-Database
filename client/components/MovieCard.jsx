import React from "react";
import { connect } from "react-redux";

function MovieCard(props) {
  console.log(props.imgUrl);
  return (
    <>
      <li>
        <h3>{props.title}</h3>
        <img src={`https://image.tmdb.org/t/p/w200${props.imgUrl}`} />
        <p>Date: {props.releaseDate}</p>
        Summary:<p>{props.summary}</p>
        <p>Rating: {props.rating}/10</p>
      </li>
    </>
  );
}
export default connect()(MovieCard);
