import request from "superagent";

const API_KEY = "4cc1b68a07fe5ba265950e85ac96cb2c";
const MOVIE_URL = `https://api.themoviedb.org/3/search/movie?&page=1&api_key=${API_KEY}&query=`;

export function movieSearch(search) {
  console.log("hit");
  return request.get(MOVIE_URL + search).then((res) => {
    console.log(res.body);
    return res.body;
  });
}
