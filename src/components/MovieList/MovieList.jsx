import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ films }) => {
  const location = useLocation();
  console.log('Location:', location);

  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link
            to={`/movies/${film.id}`}
            state={{ from: `${location.pathname}${location.search}` }}
          >
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
