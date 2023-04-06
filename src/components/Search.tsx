import SearchInput from "./SearchInput";
import useMovies, { MovieQuery } from "../hooks/useMovies";
import { useState } from "react";
import { Box, Text, Spinner, HStack } from "@chakra-ui/react";
import MovieGrid from "./MovieGrid";

const Search = () => {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
  const { data, error, isLoading, clearData } = useMovies(movieQuery);

  return (
    <>
      <HStack paddingBottom={1} justifyContent="center">
        <SearchInput
          onSearch={(searchText) => {
            clearData();
            setMovieQuery({ ...movieQuery, searchText });
          }}
        />
      </HStack>

      {error && (
        <Text paddingTop={10} color="red.300" fontSize="2xl">
          {error}
        </Text>
      )}

      <Box paddingY={4}>
        <MovieGrid isLoading={isLoading} movies={data ?? []} />
      </Box>
    </>
  );
};

export default Search;
