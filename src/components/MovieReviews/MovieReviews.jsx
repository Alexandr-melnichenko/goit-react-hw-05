// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { fetchReviews } from '../../service/api.js';

// const BASE_URL = 'https://api.themoviedb.org/';
// const IMG_BASE_URL = 'https://image.tmdb.org/t/p';

export const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const reviews = await fetchReviews(movieId);
        setMovieReviews(reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    getData();
  }, [movieId]);

  console.log('Reviews:', movieReviews);

  return (
    <ul>
      {Array.isArray(movieReviews) &&
        movieReviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>Created: {format(new Date(review.created_at), 'dd-MM-yyyy')}</p>
            <p>Review: {review.content}</p>
          </li>
        ))}
    </ul>
  );
};

// export default MovieReviews;

// const MovieCast = () => {
//   const [movieCast, setMovieCast] = useState([]);
//   const { movieId } = useParams();

//   useEffect(() => {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTk5ZDJmOTZhNzQyZGFjNmQwZTdmZTk2ZjhhNDQ3MCIsIm5iZiI6MTczMjE5NTAyMy42NTI2ODI4LCJzdWIiOiI2NzNmMjkxOGNlNzE4NDM0ZjM4YmY3Y2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ikmXEl_aPErtIkp5ktT4TfQaPFWCYze-wNmhGATm_DY',
//       },
//     };

//     const fetchCastDetails = async movieId => {
//       try {
//         const response = await axios.get(
//           `${BASE_URL}3/movie/${movieId}/credits?language=en-US`,
//           options
//           // 'https://api.themoviedb.org/3/configuration',
//           // options
//         );
//         setMovieCast(response.data.cast);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCastDetails(movieId);
//   }, [movieId]);

//   console.log('movieCast:', movieCast);

//   return (
//     <ul>
//       {movieCast.map(cast => (
//         <li key={cast.id}>
//           <img src={`${IMG_BASE_URL}/w185${cast.profile_path}`}></img>
//           <p>Character: {cast.character}</p>
//           <p>Actor: {cast.name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MovieCast;

// fetch(
//   'https://api.themoviedb.org/3/movie/558449/credits?language=en-US',
//   options
// )
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
