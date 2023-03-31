import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface MovieQuery {
  searchText?: string;
  quality: string;
  genre: string;
  rating: string;
  sortBy: string;
}

export interface Movie {
  id: number;
  title_long: string;
  rating: number;
  medium_cover_image: string;
  title: string;
  torrents: Torrent[];
}

interface Torrent {
  type: string;
  quality: string;
  hash: string;
}

interface FetchResponse {
  data: {
    movies: Movie[];
  };
}

const useMovies = (query: MovieQuery) => {
  const [data, setData] = useState<Movie[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();
    axios
      .get<FetchResponse>("https://yts.mx/api/v2/list_movies.json", {
        signal: controller.signal,
        params: { query_term: query.searchText, quality: query.quality, genre: query.genre, minimum_rating: query.rating, sort_by: query.sortBy },
      })
      .then((res) => setData(res.data.data.movies ?? []))
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [query]);

  return { data, error, isLoading };
};

export default useMovies;
