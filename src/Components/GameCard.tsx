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

interface Props {
  game: BoardGame;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius="lg" padding={"5px"}>
      <Image src={game.image} h={"70%"} />
      <CardBody>
        <Heading fontSize="2xl" marginY={3}>
          {game.name}
        </Heading>
        {game.ranks.map((rank) => (
          <HStack>
            <Text>
              {rank.name === "boardgame"
                ? "Overall"
                : rank.friendlyname.replace("Rank", " ")}
            </Text>
            <Text>{rank.value}</Text>
          </HStack>
        ))}
      </CardBody>
    </Card>
  );
};

export default GameCard;
