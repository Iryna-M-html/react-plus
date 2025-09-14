import axios from "axios";
import type { Movie } from "../types/movie";
export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const token = import.meta.env.VITE_TMDB_TOKEN as string;
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export async function fetchMovies(
  query: string,
  page: number = 1
): Promise<MoviesResponse> {
  const response = await api.get<MoviesResponse>("/search/movie", {
    params: { query, page },
  });
  return response.data;
}
export default fetchMovies;
