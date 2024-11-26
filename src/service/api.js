import axios from 'axios';
// import { movieId } from '../components/MovieReviews/MovieReviews.jsx';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const BASE_URL = 'https://api.themoviedb.org/';

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTk5ZDJmOTZhNzQyZGFjNmQwZTdmZTk2ZjhhNDQ3MCIsIm5iZiI6MTczMjE5NTAyMy42NTI2ODI4LCJzdWIiOiI2NzNmMjkxOGNlNzE4NDM0ZjM4YmY3Y2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ikmXEl_aPErtIkp5ktT4TfQaPFWCYze-wNmhGATm_DY',
//   },
// };

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTk5ZDJmOTZhNzQyZGFjNmQwZTdmZTk2ZjhhNDQ3MCIsIm5iZiI6MTczMjE5NTAyMy42NTI2ODI4LCJzdWIiOiI2NzNmMjkxOGNlNzE4NDM0ZjM4YmY3Y2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ikmXEl_aPErtIkp5ktT4TfQaPFWCYze-wNmhGATm_DY',
  },
});

export const fetchReviews = async movieId => {
  const response = await api.get(`movie/${movieId}/reviews?language=en-US`);
  return response.data.results;
};

// export const fetchReviews = async movieId => {
//   const responseReviews = await axios.get(
//     `${BASE_URL}3/movie/${movieId}/reviews?language=en-US`,
//     options
//   );
//   return responseReviews;
// };

// export const responseReviews = await axios.get(
//   `${BASE_URL}3/movie/${movieId}/reviews?language=en-US`,
//   options
// );

// export const fetchUserById = async id => {
//   const { data } = await axios.get(`/users/${id}`);
//   return data;
// };

// const fetchReviews = async movieId => {
//   try {
//     // const responseReviews = await axios.get(
//     //   `${BASE_URL}3/movie/${movieId}/reviews?language=en-US`,
//     //   options
//     // );
//     responseReviews(movieId);
//     setMovieReviews(responseReviews.data.results);
//   } catch (error) {
//     console.error(error);
//   }
// };
