import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

interface Genres {
  name: string;
  color: string;
}

interface Props {
  onSelectedCategory: (genre: string) => void;
}

const Genres = ({ onSelectedCategory }: Props) => {
  const genres = [
    { name: "All", color: "blue", slug: "boardgame" },
    { name: "Family", color: "pink", slug: "familygames" },
    { name: "Thematic", color: "teal", slug: "thematic" },
    { name: "Strategy", color: "orange", slug: "strategygames" },
  ];
  return (
    <ButtonGroup
      variant={"ghost"}
      justifyContent={"space-evenly"}
      //w={{ sm: "100%", md: "70%", lg: "50%" }}
      padding={5}
      spacing={5}
    >
      {genres.map((genre) => (
        <Button
          key={genre.name}
          colorScheme={genre.color}
          onClick={() => onSelectedCategory(genre.slug)}
        >
          {genre.name}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Genres;
