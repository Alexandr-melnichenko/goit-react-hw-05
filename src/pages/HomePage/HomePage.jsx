import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import MovieList from '/src/components/MovieList/MovieList';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  useEffect(() => {
    const options = {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTk5ZDJmOTZhNzQyZGFjNmQwZTdmZTk2ZjhhNDQ3MCIsIm5iZiI6MTczMjIyMDg4NC45ODA5MzA2LCJzdWIiOiI2NzNmMjkxOGNlNzE4NDM0ZjM4YmY3Y2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dyjyV3Oa6sCrCcqOCRiUQpYI4SAwY1DLWVYdLlDvPgY',
      },
    };

    async function fetchMovies() {
      try {
        const response = await axios.get(url, options);
        console.log(response);

        setFilms(response.data.results);
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
    }
    fetchMovies();
  }, []);

  console.log('Films:', films);

  return (
    <div>
      <MovieList films={films} />
    </div>
  );
};

export default HomePage;

// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
