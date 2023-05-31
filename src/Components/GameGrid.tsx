import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={3} spacing={10}>
        {games.map((bgame) => (
          <GameCard game={bgame} key={bgame.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
