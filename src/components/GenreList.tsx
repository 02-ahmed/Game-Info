import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListskeleton from "./GenreListskeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  const genre_skeleton = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  return (
    <>
      <List>
        {isLoading &&
          genre_skeleton.map((skeleton) => (
            <GenreListskeleton key={skeleton} />
          ))}
      </List>

      <List>
        {!isLoading &&
          data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
