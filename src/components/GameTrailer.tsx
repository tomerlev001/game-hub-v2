import useTrailers from "../hooks/useMovies";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId: id }: Props) => {
  const { data, error, isLoading } = useTrailers(id);
  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
