import { DownloadIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Stack,
  Image,
  Badge,
  Button,
  Link,
  VStack,
} from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
}

const MovieGrid = ({ movies }: Props) => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
      justifyItems="center"
    >
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
