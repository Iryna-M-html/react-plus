import axios, { type AxiosResponse } from "axios";
import type { MoviesResponse } from "../types/movie";

const API_KEY = "920511640a07f577c641fe92d3257a34";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

axios.defaults.params = {
  api_key: API_KEY,
};

export async function fetchMovies(query: string): Promise<MoviesResponse> {
  const response: AxiosResponse<MoviesResponse> = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
      },
    }
  );

  return response.data;
}
