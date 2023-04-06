import { HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import SkeletonMovieCard from "./SkeletonMovieCard";

interface Props {
  movies: Movie[];
  isLoading: boolean;
}

const MovieGrid = ({ movies, isLoading }: Props) => {
  const skeletons = [1, 2, 3];

  if (movies.length == 0 && !isLoading)
    return (
      <HStack justifyContent='center'>
        <Text paddingTop={4} color="GrayText" fontSize="2xl">
          No results
        </Text>
      </HStack>
    );

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      justifyItems="center"
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}

      {isLoading &&
        skeletons.map((skeleton) => <SkeletonMovieCard key={skeleton} />)}
    </SimpleGrid>
  );
};

export default MovieGrid;
