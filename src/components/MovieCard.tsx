import { DownloadIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Heading,
  Badge,
  VStack,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card width="100%" key={movie.id} maxW="sm">
      <CardBody>
        <VStack mt="3" spacing="3">
          <Image src={movie.medium_cover_image} borderRadius="lg" />
          <Heading size="md">
            <Link
              href={`https://www.imdb.com/find/?q=${encodeURIComponent(
                movie.title_long
              )}`}
            >
              {movie.title_long}
            </Link>
            <Badge ml="2" fontSize="0.8em" colorScheme="blue">
              {movie.rating}
            </Badge>
          </Heading>
        </VStack>

        <VStack paddingTop={4}>
          {movie.torrents.map((torrent) => (
            <Button
              key={torrent.hash}
              leftIcon={<DownloadIcon />}
              variant="outline"
              colorScheme="blue"
            >
              <Link
                href={`magnet:?xt=urn:btih:${
                  torrent.hash
                }&dn=${encodeURIComponent(
                  movie.title
                )}&tr=http://track.one:1234/announce&tr=udp://track.two:80`}
              >
                {torrent.quality} ({torrent.type})
              </Link>
            </Button>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
