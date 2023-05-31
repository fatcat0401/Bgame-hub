import {
  Box,
  Card,
  CardBody,
  Center,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BoardGame } from "../hooks/useGames";
import Rank from "./Rank";

interface Props {
  game: BoardGame;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius="lg">
      <Image src={game.image} h={"70%"} />
      <CardBody padding={"5px"}>
        <Heading fontSize="2xl" marginY={3}>
          {game.name}
        </Heading>
        {game.ranks.map((rank) => (
          <HStack color={"gray.500"} justifyContent={"space-between"}>
            <Text>
              {rank.name === "boardgame"
                ? "Overall"
                : rank.friendlyname.replace("Rank", " ")}
            </Text>
            <Rank brank={rank.value} />
          </HStack>
        ))}
      </CardBody>
    </Card>
  );
};

export default GameCard;
