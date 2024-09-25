import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface RepositoriesState {
  repository: {
    url: string;
  }
}

// Define the initial state using that type
// const initialState: RepositoriesState<object>[] = [{ repositories: [] }];
const initialState: RepositoriesState = { repository: {url: ''}}

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositories: (state, action) => {
      return action.payload
    },
  },
});

export const { setRepositories } = repositoriesSlice.actions;

export const selectRepositories = (state: RootState) => state.repositories;

export default repositoriesSlice.reducer;
