import { HStack, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Filters {
  sortBy: string;
  quality: string;
  genre: string;
  rating: string;
}

interface Props {
  onFilter: (filters: Filters) => void;
}

const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Filters = ({ onFilter }: Props) => {
  const [selectedFilters, setFilters] = useState<Filters>({} as Filters);

  useEffect(() => {
    onFilter(selectedFilters);
  }, [selectedFilters]);

  return (
    <HStack>
      <Select
        placeholder="Quality"
        variant="filled"
        onChange={(e) => {
          setFilters({ ...selectedFilters, quality: e.currentTarget.value });
        }}
      >
        <option value="2160p" label="4K">4K</option>
        <option value="1080p" label="HD">HD</option>
        <option value="720p" label="720p">720p</option>
        <option value="3D" label="3D">3D</option>
      </Select>

      <Select
        placeholder="Genre"
        variant="filled"
        onChange={(e) =>
          setFilters({ ...selectedFilters, genre: e.currentTarget.value })
        }
      >
        <option value="sci-fi" label="Sci-fi">Sci-fi</option>
        <option value="comedy" label="Comedy">Comedy</option>
        <option value="horror" label="Horror">Horror</option>
        <option value="romance" label="Romance">Romance</option>
        <option value="action" label="Action">Action</option>
        <option value="thriller" label="Thriller">Thriller</option>
        <option value="drama" label="Drama">Drama</option>
        <option value="mystery" label="Mystery">Mystery</option>
        <option value="crime" label="Crime">Crime</option>
        <option value="animation" label="Animation">Animation</option>
        <option value="adventure" label="Adventure">Adventure</option>
        <option value="fantasy" label="Fantasy">Fantasy</option>
        <option value="musical" label="Musical">Musical</option>
        <option value="documentary" label="Documentary">Documentary</option>
        <option value="history" label="History">History</option>
        <option value="biography" label="Biography">Biography</option>
        <option value="family" label="Family">Family</option>
      </Select>

      <Select
        placeholder="Rating"
        variant="filled"
        onChange={(e) =>
          setFilters({ ...selectedFilters, rating: e.currentTarget.value })
        }
      >
        {ratings.map((rating) => (
          <option key={rating} value={rating} label={rating.toString()}>{rating}</option>
        ))}
      </Select>

      <Select
        placeholder="Sort"
        variant="filled"
        onChange={(e) =>
          setFilters({ ...selectedFilters, sortBy: e.currentTarget.value })
        }
      >
        <option value="date_added" label="Date added">Date added</option>
        <option value="like_count" label="Like count">Like count</option>
        <option value="download_count" label="Download count">Download count</option>
        <option value="rating" label="Rating">Rating</option>
        <option value="year" label="Year">Year</option>
        <option value="seeds" label="Seeds">Seeds</option>
        <option value="peers" label="Peers">Peers</option>
      </Select>
    </HStack>
  );
};

export default Filters;
