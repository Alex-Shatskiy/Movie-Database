import request from "superagent";

const API_KEY = "4cc1b68a07fe5ba265950e85ac96cb2c";
const MOVIE_URL = `https://api.themoviedb.org/3/search/movie?&page=1&api_key=${API_KEY}&query=`;
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
const GET_BY_GENRE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=`;
const TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;

export function movieSearch(search) {
  return request.get(MOVIE_URL + search).then((res) => {
    return res.body;
  });
}

export function getGenre() {
  return request.get(GENRE_URL).then((res) => {
    return res.body;
  });
}

export function getPopularMovies() {
  return request.get(POPULAR_URL).then((res) => {
    return res.body;
  });
}

export function getTopRatedMovies() {
  return request.get(TOP_RATED_URL).then((res) => {
    return res.body;
  });
}

export function getGenreMovies(genre) {
  return request.get(GET_BY_GENRE + genre).then((res) => {
    return res.body;
  });
}
