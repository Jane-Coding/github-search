import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface RepositoriesState<T> {
  repositories: T;
}

// Define the initial state using that type
const initialState: RepositoriesState<object>[] = [{ repositories: [] }];

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    getRepositories: (state, action) => {
      return action.payload
    },
  },
});

export const { getRepositories } = repositoriesSlice.actions;

export const selectCount = (state: RootState) => state.repositories;

export default repositoriesSlice.reducer;
