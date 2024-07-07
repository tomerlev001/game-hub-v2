import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <React.StrictMode>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
          }}
        >
          <GridItem area="nav">
            <NavBar
              onSearch={(searchText) =>
                setGameQuery({ ...gameQuery, searchText })
              }
            />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                onSelectGenre={(genre) =>
                  setGameQuery({ ...gameQuery, genreId: genre.id })
                }
                selectedGenreId={gameQuery.genreId}
              />
            </GridItem>
          </Show>
          <GridItem area="main">
            <Box paddingLeft={2}>
              <Box marginBottom={5}>
                <GameHeading gameQuery={gameQuery} />
              </Box>
              <HStack spacing={5} marginBottom={5}>
                <PlatformSelector
                  onSelectedPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platformId: platform.id })
                  }
                  selectedPlatformId={gameQuery.platformId}
                />
                <SortSelector
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                  sortOrder={gameQuery.sortOrder}
                />
              </HStack>
            </Box>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </React.StrictMode>
    </>
  );
}

export default App;
