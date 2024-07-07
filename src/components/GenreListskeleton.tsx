import { ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListskeleton = () => {
  return (
    <ListItem paddingY="5px">
      <Skeleton borderRadius={10} height="30px">
        <SkeletonText />
      </Skeleton>
    </ListItem>
  );
};

export default GenreListskeleton;
