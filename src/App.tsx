import {
  Box,
  AppBar,
  Button,
  Toolbar,
  Typography,
  TextField,
  Container,
} from "@mui/material";

import RepositoriesTable from "./RepositoriesTable";

import { useLazyGetRepositoriesQuery } from "./query";

import { useEffect, useState } from "react";

import transformObject from "./cleanGraphQl";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [trigger, result] = useLazyGetRepositoriesQuery({});
  const { data, isLoading } = result;

  useEffect(() => {}, []);

  async function showWord(word: string) {
    await trigger(word, false).unwrap();
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar sx={{}}>
            <Typography pr={2}>Enter repository name:</Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="repository name"
              required={true}
              onChange={(event) => setSearchWord(event?.target.value)}
            ></TextField>
            <Button
              variant="contained"
              sx={{ ml: "auto", backgroundColor: "#3d5afe" }}
              onClick={() => showWord(searchWord)}
            >
              Search for repositories
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ mt: "70px" }}>
        {isLoading && <Typography variant="h1">Loading</Typography>}
        {data && <RepositoriesTable repositories={transformObject(data)} />}
      </Container>
    </>
  );
}

export default App;
