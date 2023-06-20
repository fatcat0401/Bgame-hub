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
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  let filteredGames = games.filter(
    (game) =>
      game.status.own === "1" &&
      game.ranks &&
      game.ranks.length > 0 &&
      game.ranks.some((rank) => rank.name === gameQuery?.genre.slug) &&
      (gameQuery?.searchText === "" ||
        game.name.toLowerCase().includes(gameQuery.searchText.toLowerCase()))
  );

  if (gameQuery.selector === "Average Rating")
    filteredGames.sort(function (a, b) {
      let x = parseFloat(b.average);
      let y = parseFloat(a.average);
      return x - y;
    });
  else if (gameQuery.selector === "Release Year")
    filteredGames.sort(function (a, b) {
      let x = parseInt(b.yearpublished);
      let y = parseInt(a.yearpublished);

      return x - y;
    });

  if (error) return <Text>{error}</Text>;

  return (
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
      {filteredGames.map((bgame) => (
        <GameCardContainer key={bgame.id}>
          <GameCard game={bgame} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
