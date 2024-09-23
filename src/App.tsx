import {
  Box,
  AppBar,
  Button,
  Toolbar,
  Typography,
  TextField,
  Container,
  Table,
} from "@mui/material";

import RepositoriesTable from "./RepositoriesTable";

import { useState } from "react";
// import './App.css'

function App() {
  const [searchWord, setSearchWord] = useState("");

  function showWord(word: string) {
    console.log(word);
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
        <RepositoriesTable />
      </Container>
    </>
  );
}

export default App;
