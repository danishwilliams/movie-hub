import { Spinner, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import useMovies, { MovieQuery } from "../hooks/useMovies";
import Filters from "./Filters";
import MovieGrid from "./MovieGrid";

const Filter = () => {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
  const { data, error, isLoading } = useMovies(movieQuery);

  return (
    <>
      <Box paddingBottom={3}>
        <Filters
          onFilter={(filters) =>
            setMovieQuery({
              ...movieQuery,
              quality: filters.quality,
              genre: filters.genre,
              rating: filters.rating,
              sortBy: filters.sortBy,
            })
          }
        />
      </Box>

      {isLoading && (
        <Box paddingY={5}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      )}

      {data?.length == 0 && !isLoading && (
        <Text paddingTop={10} color="GrayText" fontSize="2xl">
          No results
        </Text>
      )}

      {error || (
        <Text paddingTop={10} color="red.300" fontSize="2xl">
          {error}
        </Text>
      )}

      <MovieGrid movies={data ?? []} />
    </>
  );
};

export default Filter;
