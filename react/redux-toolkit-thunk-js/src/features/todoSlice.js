import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  console.log(response.data);
  return response.data;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducer: {},
  extraReducers: {
    [getTodos.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [getTodos.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    [getTodos.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    }),
  },
});

export default todosSlice.reducer;
