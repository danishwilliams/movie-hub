import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const SkeletonMovieCard = () => {
  return (
    <Card width="100%" maxW="sm">
      <CardBody>
        <Stack>
          <Skeleton height="200px" marginBottom={3} />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SkeletonMovieCard;
