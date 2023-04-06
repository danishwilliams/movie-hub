import { Spinner, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import useMovies, { MovieQuery } from "../hooks/useMovies";
import Filters from "./Filters";
import MovieGrid from "./MovieGrid";

const Filter = () => {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
  const { data, error, isLoading, clearData } = useMovies(movieQuery);

  return (
    <>
      <Box paddingBottom={4}>
        <Filters
          onFilter={(filters) => {
            clearData()
            setMovieQuery({
              ...movieQuery,
              quality: filters.quality,
              genre: filters.genre,
              rating: filters.rating,
              sortBy: filters.sortBy,
            });
          }}
        />
      </Box>

      {error && (
        <Text paddingTop={10} color="red.300" fontSize="2xl">
          {error}
        </Text>
      )}

      <MovieGrid isLoading={isLoading} movies={data ?? []} />
    </>
  );
};

export default Filter;
