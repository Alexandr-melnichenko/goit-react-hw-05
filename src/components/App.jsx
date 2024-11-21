// import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from '../pages/HomePage/HomePage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies-page" element={<MoviesPage />} />
        <Route path="/movies-details-page" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
