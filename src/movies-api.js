import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzA0MjQ5MzgxZWM1MDA5MWM5YjNhMjY1M2E3NjdjZCIsIm5iZiI6MTcxOTUwOTE3Ny4wMTUxNzEsInN1YiI6IjY2N2Q4OWJkNjJkOTA5MWM0MDhkMDE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OhbkV64mn-2Ys0BkpoTEbs9kZHqOTiYi82wJpBv1O8o",
  },
  params: {
    page: 1,
    include_adult: false,
    language: "en-US",
  },
};

export const fetchMovies = async () => {
  const response = await axios.get(`3/trending/movie/day`, options);
  return response.data;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCastById = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/credits`, options);
  return response.data;
};

export const fetchMovieReviewsById = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/reviews`, options);
  return response.data;
};

export const fetchMoviesByQuery = async (query) => {
  const response = await axios.get(`3/search/movie?query=${query}`, options);
  return response.data;
};