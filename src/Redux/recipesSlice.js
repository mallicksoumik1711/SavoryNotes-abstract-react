// src/Redux/recipesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const res = await fetch("http://localhost:3002/recipes");
  const data = await res.json();
  return data;
});

export const addRecipe = createAsyncThunk("recipes/addRecipe", async (recipe) => {
  const res = await fetch("http://localhost:3002/recipes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  });
  const data = await res.json();
  return data;
});

export const updateRecipe = createAsyncThunk("recipes/updateRecipe", async ({ id, recipe }) => {
  const res = await fetch(`http://localhost:3002/recipes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  });
  const data = await res.json();
  return data;
});

export const deleteRecipe = createAsyncThunk("recipes/deleteRecipe", async (id) => {
  await fetch(`http://localhost:3002/recipes/${id}`, { method: "DELETE" });
  return id;
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => { state.loading = true; })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })

      .addCase(addRecipe.fulfilled, (state, action) => { state.recipes.push(action.payload); })
      .addCase(updateRecipe.fulfilled, (state, action) => {
        const index = state.recipes.findIndex(r => r.id === action.payload.id);
        if (index !== -1) state.recipes[index] = action.payload;
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.recipes = state.recipes.filter(r => r.id !== action.payload);
      });
  }
});

export default recipesSlice.reducer;
