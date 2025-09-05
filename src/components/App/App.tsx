import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
//import styles from "./App.module.css";

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

    async function fetchMovies() {
      try {
        const API_KEY = "920511640a07f577c641fe92d3257a34";
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        );
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
          toast.error("No movies found for your request.");
        } else {
          setMovies(data.results);
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      }
    }

    fetchMovies();
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
