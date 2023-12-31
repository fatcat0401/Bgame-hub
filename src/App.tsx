import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import HotnessList from "./Components/HotnessList";
import { useState } from "react";
import { Genre } from "./hooks/useGames";
import Genres from "./Components/Genres";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
  genre: Genre;
  selector: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: { name: "All", slug: "boardgame" },
    selector: "Relevance",
    searchText: "",
  } as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
      templateRows="1fr"
      backgroundColor={"gray.400"}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <HotnessList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={3}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={4}>
            <Box marginRight={5}>
              <Genres
                selectedGenre={gameQuery.genre}
                onSelectedGenre={(genre) =>
                  setGameQuery({ ...gameQuery, genre })
                }
              />
            </Box>
            <SortSelector
              selectedSelector={gameQuery.selector}
              onSelectedSelector={(selector) =>
                setGameQuery({ ...gameQuery, selector })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
