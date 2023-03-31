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
        <option value="2160p" label="4K" />
        <option value="1080p" label="HD" />
        <option value="720p" label="720p" />
        <option value="3D" label="3D" />
      </Select>

      <Select
        placeholder="Genre"
        variant="filled"
        onChange={(e) =>
          setFilters({ ...selectedFilters, genre: e.currentTarget.value })
        }
      >
        <option value="sci-fi" label="Sci-fi" />
        <option value="comedy" label="Comedy" />
        <option value="horror" label="Horror" />
        <option value="romance" label="Romance" />
        <option value="action" label="Action" />
        <option value="thriller" label="Thriller" />
        <option value="drama" label="Drama" />
        <option value="mystery" label="Mystery" />
        <option value="crime" label="Crime" />
        <option value="animation" label="Animation" />
        <option value="adventure" label="Adventure" />
        <option value="fantasy" label="Fantasy" />
        <option value="musical" label="Musical" />
        <option value="documentary" label="Documentary" />
        <option value="history" label="History" />
        <option value="biography" label="Biography" />
        <option value="family" label="Family" />
      </Select>

      <Select
        placeholder="Rating"
        variant="filled"
        onChange={(e) =>
          setFilters({ ...selectedFilters, rating: e.currentTarget.value })
        }
      >
        {ratings.map((rating) => (
          <option key={rating} value={rating} label={rating.toString()} />
        ))}
      </Select>

      <Select
        placeholder="Sort By"
        variant="filled"
        onChange={(e) =>
          setFilters({ ...selectedFilters, sortBy: e.currentTarget.value })
        }
      >
        <option value="date_added" label="Date added" />
        <option value="like_count" label="Like count" />
        <option value="download_count" label="Download count" />
        <option value="rating" label="Rating" />
        <option value="year" label="Year" />
        <option value="seeds" label="Seeds" />
        <option value="peers" label="Peers" />
      </Select>
    </HStack>
  );
};

export default Filters;
