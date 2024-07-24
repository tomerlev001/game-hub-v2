import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpendableText from "../components/ExpendableText";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading marginBottom={2}>{game.name}</Heading>
      <ExpendableText>{game.description_raw}</ExpendableText>
      {/* <Text>{game.description_raw}</Text> */}
    </>
  );
};

export default GameDetailsPage;
