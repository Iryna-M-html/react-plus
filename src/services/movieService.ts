import axios, { type AxiosResponse } from "axios";
import type { MoviesResponse } from "../types/movie";

const API_KEY = "920511640a07f577c641fe92d3257a34";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies(query: string): Promise<MoviesResponse> {
  const response: AxiosResponse<MoviesResponse> = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        api_key: API_KEY,
        query,
      },
    }
  );

  return response.data;
}
