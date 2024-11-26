import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';
import { ProgressBar } from 'react-loader-spinner';
import { useNavigate, useLocation } from 'react-router-dom';
import { se } from 'date-fns/locale';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();

  // Юз эффект чтобы доставать значение query из урл и обновляем его в состоянии квери
  useEffect(() => {
    // Получаем параметр "query" из URL
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('query') || '';

    // Если параметр "query" есть, обновляем состояние
    if (searchQuery) {
      setQuery(searchQuery);
      setPageNumber(1);
    }
  }, [location.search]);

  // Юз эффект чтобы вытягивать данные из строки запроса
  useEffect(() => {
    const BASE_URL = 'https://api.themoviedb.org/3/';

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTk5ZDJmOTZhNzQyZGFjNmQwZTdmZTk2ZjhhNDQ3MCIsIm5iZiI6MTczMjE5NTAyMy42NTI2ODI4LCJzdWIiOiI2NzNmMjkxOGNlNzE4NDM0ZjM4YmY3Y2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ikmXEl_aPErtIkp5ktT4TfQaPFWCYze-wNmhGATm_DY',
      },
    };

    if (!query) return;
    async function fetchMovies() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}search/movie?query=${query}&include_adult=true&language=en-US&page=${pageNumber}&per_page=12`,
          options
        );
        setFilms(prevFilms =>
          pageNumber === 1
            ? response.data.results
            : [...prevFilms, ...response.data.results]
        );

        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [query, pageNumber]);

  // Add function for searchBar
  const handleSubmit = (values, { resetForm }) => {
    const searchQuery = values.search.trim();
    if (!searchQuery) {
      toast('Please fill search input!');
      return;
    }
    // Обновляем URL с параметром "query"
    navigate(`?query=${searchQuery}`);
    setQuery(searchQuery);
    setPageNumber(1);
    setFilms([]);
    resetForm();
  };

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {isLoading && <ProgressBar />}
      <MovieList films={films} />
      <Toaster />
    </div>
  );
};

export default MoviesPage;

// fetch('', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
