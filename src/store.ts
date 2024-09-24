import { configureStore } from "@reduxjs/toolkit";
import repositoriesReducer from "./repositoriesSlice";
import { api } from "./query";

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
