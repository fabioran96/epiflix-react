import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import TVShows from './components/TVShows';
import MovieDetails from './components/MovieDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
