import {
  movieSearch,
  getGenre,
  getPopularMovies,
  getGenreMovies,
  getTopRatedMovies,
} from "../apis/movies";

export const setMovie = (search) => {
  return {
    type: "GET_MOVIE",
    movie: search,
  };
};

export const getGenres = (genres) => {
  return {
    type: "GET_GENRE",
    genre: genres,
  };
};

export const getMovies = (search, page) => {
  return (dispatch) => {
    movieSearch(search, page)
      .then((movies) => {
        return dispatch(setMovie(movies));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAllGenres = () => {
  return (dispatch) => {
    getGenre()
      .then((genres) => {
        return dispatch(getGenres(genres));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAllPopularMovies = (page) => {
  return (dispatch) => {
    getPopularMovies(page)
      .then((movies) => {
        return dispatch(setMovie(movies));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchGenreMovies = (genreId, page) => {
  return (dispatch) => {
    console.log(genreId);
    getGenreMovies(genreId, page)
      .then((movies) => {
        return dispatch(setMovie(movies));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchTopRatedMovies = (page) => {
  return (dispatch) => {
    getTopRatedMovies(page)
      .then((movies) => {
        return dispatch(setMovie(movies));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
