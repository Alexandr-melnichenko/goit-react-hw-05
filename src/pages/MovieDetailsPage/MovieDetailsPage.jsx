import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import {
  useParams,
  useLocation,
  NavLink,
  Outlet,
  Link,
} from 'react-router-dom';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
// import { fetchFilmDetails } from '../../service/api';

const BASE_URL = 'https://api.themoviedb.org/';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  const backUrl = location.state?.from || '/movies';
  console.log('BACKURL:', backUrl.current);

  const imgUrl = `${IMG_BASE_URL}${movieDetails.poster_path}`;
  console.log('Poster URL:', imgUrl);

  console.log(movieId);
  console.log('location:', location.pathname);
  console.log('movieDetails:', movieDetails);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTk5ZDJmOTZhNzQyZGFjNmQwZTdmZTk2ZjhhNDQ3MCIsIm5iZiI6MTczMjE5NTAyMy42NTI2ODI4LCJzdWIiOiI2NzNmMjkxOGNlNzE4NDM0ZjM4YmY3Y2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ikmXEl_aPErtIkp5ktT4TfQaPFWCYze-wNmhGATm_DY',
      },
    };

    const fetchFilmDetails = async movieId => {
      try {
        const response = await axios.get(
          `${BASE_URL}3/movie/${movieId}?language=en-US`,
          options
        );
        console.log('Response:', response);
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilmDetails(movieId);
  }, [movieId]);

  console.log('movieDetails:', movieDetails);

  return (
    <div>
      <NavLink to={backUrl}>
        {/* <GoBackButton /> */}
        Go back
      </NavLink>

      <h2>{movieDetails.title}</h2>

      <img
        src={`${IMG_BASE_URL}/w342${movieDetails.poster_path}`}
        alt="Movie Poster"
      />
      <p>Short overview: {movieDetails.overview}</p>
      {/* <p>Genres: {JSON.stringify(movieDetails.genres)}</p> */}
      <p>Genres: {movieDetails.genres?.map(genre => genre.name).join(', ')}</p>
      <p>Time (min): {movieDetails.runtime}</p>
      <p>Vote count: {movieDetails.vote_count}</p>
      <p>Vote average: {movieDetails.vote_average}</p>
      <NavLink to={`/movies/${movieDetails.id}/cast`}>Cast</NavLink>
      <NavLink to={`/movies/${movieDetails.id}/reviews`}>Reviews</NavLink>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
