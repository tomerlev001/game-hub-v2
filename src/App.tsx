import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import React from "react";
import GenreList from "./components/GennreList";

function App() {
  return (
    <>
      <React.StrictMode>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside">
              <GenreList />
            </GridItem>
          </Show>
          <GridItem area="main">
            <GameGrid />
          </GridItem>
        </Grid>
      </React.StrictMode>
    </>
  );
}

export default App;
