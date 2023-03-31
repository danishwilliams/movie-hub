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
        <Card width="100%" key={movie.id} maxW="sm" bgColor="gray.100">
          <CardBody>
            <Image src={movie.medium_cover_image} borderRadius="lg" />

            <Stack mt="6" spacing="3">
              <Heading size="md">
                {movie.title_long}
                <Badge ml="2" fontSize="0.8em" colorScheme="blue">
                  {movie.rating}
                </Badge>
              </Heading>
            </Stack>

            <VStack paddingTop={4}>
              {movie.torrents.map((torrent) => (
                <Button key={torrent.hash} leftIcon={<DownloadIcon />} variant="outline" colorScheme="blue">
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
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
