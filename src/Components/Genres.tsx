import {
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import { Genre } from "../hooks/useGames";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre;
}

const Genres = ({ selectedGenre, onSelectedGenre }: Props) => {
  const genres = [
    { name: "All", color: "blue", slug: "boardgame" },
    { name: "Family", color: "pink", slug: "familygames" },
    { name: "Thematic", color: "teal", slug: "thematic" },
    { name: "Strategy", color: "orange", slug: "strategygames" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre.name}
      </MenuButton>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem key={genre.name} onClick={() => onSelectedGenre(genre)}>
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
    // <ButtonGroup
    //   variant={"ghost"}
    //   justifyContent={"space-evenly"}
    //   //w={{ sm: "100%", md: "70%", lg: "50%" }}
    //   padding={5}
    //   spacing={3}
    // >
    //   {genres.map((genre) => (
    //     <Button
    //       key={genre.name}
    //       colorScheme={genre.color}
    //       onClick={() => onSelectedGenre(genre.slug)}
    //       fontWeight={genre.slug === selectedGenre ? "extrabold" : "normal"}
    //       fontSize={"xl"}
    //     >
    //       {genre.name}
    //     </Button>
    //   ))}
    // </ButtonGroup>
  );
};

export default Genres;
