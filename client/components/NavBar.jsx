import React, { useState } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

import {
  fetchGenreMovies,
  getAllPopularMovies,
  fetchTopRatedMovies,
} from "../actions";

function NavBar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navBar">
          <img src="https://www.graphicsprings.com/filestorage/stencils/30be204cf77d680e2c52b2abb6794503.png?width=50&height=50" />
          <div to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="nav-menu-toggle">
              <Link to="#" className="menue-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="subMenu">Discover:</li>
            <li className="nav-text">
              <Link
                exact
                to="/discover/popular"
                onClick={() => props.dispatch(getAllPopularMovies())}
              >
                Popular
              </Link>
            </li>
            <li className="nav-text">
              <Link
                exact
                to="/discover/top-rated"
                onClick={() => props.dispatch(fetchTopRatedMovies())}
              >
                Top Rated
              </Link>
            </li>
            <li className="subMenu">Genres:</li>
            {props.genre.genres.map((item, i) => {
              return (
                <li key={i} className="nav-text">
                  <Link
                    to={`/genre/${item.name}`}
                    onClick={() => props.dispatch(fetchGenreMovies(item.id))}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

function mapPropsToState(store) {
  return {
    genre: store.genre,
  };
}

export default connect(mapPropsToState)(NavBar);
