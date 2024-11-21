import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies-page">Movies</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
