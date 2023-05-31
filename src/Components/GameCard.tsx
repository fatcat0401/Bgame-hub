import { Box, Card, CardBody, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { BoardGame } from "../hooks/useGames";

interface Props {
  game: BoardGame;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius="lg" padding={"10px"}>
      <Center w="100%" h="70%">
        <Image src={game.thumbnail} objectFit="cover" />
      </Center>
      <CardBody textAlign={"center"}>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
