import request from "superagent"

const API_KEY = "4cc1b68a07fe5ba265950e85ac96cb2c"
const BASE_URL = `https://api.themoviedb.org/3`

export function movieSearch(search, page) {
  let movieSearch =
    BASE_URL + `/search/movie?api_key=${API_KEY}&query=` + search
  if (page) {
    return request.get(movieSearch + `&page=${page}`).then((res) => {
      return res.body
    })
  } else {
    return request.get(movieSearch).then((res) => {
      return res.body
    })
  }
}

export function getGenre() {
  let genreUrl = BASE_URL + `/genre/movie/list?api_key=${API_KEY}`
  return request.get(genreUrl).then((res) => {
    return res.body
  })
}

export function getPopularMovies(page) {
  let popularUrl = BASE_URL + `/movie/popular?api_key=${API_KEY}&language=en-US`
  console.log(page)
  if (page) {
    console.log("hit")
    return request.get(popularUrl + `&page=${page}`).then((res) => {
      return res.body
    })
  } else {
    return request.get(popularUrl).then((res) => {
      return res.body
    })
  }
}

export function getTopRatedMovies(page) {
  let topRatedUrl =
    BASE_URL + `/movie/top_rated?api_key=${API_KEY}&language=en-US`

  if (page) {
    return request.get(topRatedUrl + `&page=${page}`).then((res) => {
      return res.body
    })
  }
  return request.get(topRatedUrl).then((res) => {
    return res.body
  })
}

export function getGenreMovies(genre, page) {
  let genreUrl =
    BASE_URL + `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=`

  if (page) {
    return request.get(genreUrl + genre + `&page=${page}`).then((res) => {
      return res.body
    })
  }
  return request.get(genreUrl + genre).then((res) => {
    return res.body
  })
}
