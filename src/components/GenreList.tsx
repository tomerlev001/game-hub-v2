import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7];

  if (error) return null;

  if (isLoading) {
    return (
      <List>
        {skeletons.map((skeleton) => (
          <ListItem marginBottom={5}>
            <GenreListSkeleton />
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
