import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Center,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BoardGame } from "../hooks/useGames";
import Rank from "./Rank";
import Rating from "./Rating";

interface Props {
  game: BoardGame;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card h={"100%"}>
      <Image
        src={game.thumbnail}
        //objectFit={"cover"}
        boxSize={"200px"}
        alignSelf={"center"}
        padding={1}
      />
      <CardBody padding={"5px"}>
        <Heading fontSize="2xl" marginY={3}>
          {game.name} ({parseInt(game.yearpublished)}){game.id}
        </Heading>
        {game.ranks.map((rank, index) => (
          <HStack
            key={index}
            color={"gray.500"}
            justifyContent={"space-between"}
          >
            <Text>
              {rank.name === "boardgame"
                ? "Overall"
                : rank.friendlyname.replace("Rank", " ")}
            </Text>
            <Rank brank={rank.value} />
          </HStack>
        ))}
        <HStack color={"gray.500"} justifyContent={"space-between"}>
          <Text>Average Rating</Text>
          <Rating avgRating={game.average.substring(0, 4)} />
        </HStack>

        <CardFooter pl={"100px"}></CardFooter>
      </CardBody>
    </Card>
  );
};

export default GameCard;
