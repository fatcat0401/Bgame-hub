import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";

import useGames, { BoardGame, Genre } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  const filteredGames = games.filter(
    (game) =>
      game.ranks &&
      game.ranks.length > 0 &&
      game.ranks.some((rank) => rank.name === gameQuery?.genre.slug)
  );

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {filteredGames
          .filter((bgame) => bgame.status.own === "1")
          .map((bgame) => (
            <GameCardContainer key={bgame.id}>
              <GameCard game={bgame} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
