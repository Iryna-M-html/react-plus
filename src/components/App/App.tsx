import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import styles from "./App.module.css";
import { Movie } from "../../types/movie";
import { fetchMovies } from "../../services/movieService";
import MovieGrid from "../MovieGrid/MovieGrid";

interface Movie {
  id: number;
  title: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setMovies([]);
  };

  useEffect(() => {
    if (!query) return;

    async function loadMovies() {
      try {
        const data = await fetchMovies(query);
        if (!data.results || data.results.length === 0) {
          toast.error("No movies found for your request.");
        } else {
          setMovies(data.results);
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      }
    }

    loadMovies();
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />
      <MovieGrid movies={movies} onSelect={(movie) => console.log(movie)} />
    </div>
  );
};

export default App;
