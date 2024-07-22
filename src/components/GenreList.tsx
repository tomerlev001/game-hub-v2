import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7];
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) {
    return (
      <List>
        {skeletons.map((skeleton) => (
          <ListItem marginBottom={5} key={skeleton}>
            <GenreListSkeleton />
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
              />
              <Button
                onClick={() => setGenreId(genre.id)}
                fontSize={"lg"}
                variant={"link"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
