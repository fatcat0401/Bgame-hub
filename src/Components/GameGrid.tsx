import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";

import useGames, { BoardGame } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Props {
  selectedGenre: string;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  const filteredGames = games.filter(
    (game) =>
      game.ranks &&
      game.ranks.length > 0 &&
      game.ranks.some((rank) => rank.name === selectedGenre)
  );
  // let isGenre = (Genre: string, game: BoardGame) => {
  //   const ranks = game.ranks;
  //   ranks.forEach((item) => {
  //     if (item.name === Genre) {
  //       console.log("true");
  //       return true;
  //     } else {
  //       console.log("false");
  //       return true;
  //     }
  //   });
  // };
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
