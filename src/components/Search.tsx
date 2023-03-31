import SearchInput from "./SearchInput";
import useMovies, { MovieQuery } from "../hooks/useMovies";
import { useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";
import MovieGrid from "./MovieGrid";

const Search = () => {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({
    sortBy: "date_added",
  } as MovieQuery);
  const { data, error, isLoading } = useMovies(movieQuery);

  return (
    <>
      <Box paddingBottom={3}>
        <SearchInput
          onSearch={(searchText) => {
            setMovieQuery({ ...movieQuery, searchText });
          }}
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

export default Search;
