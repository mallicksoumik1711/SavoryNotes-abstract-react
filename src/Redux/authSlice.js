// src/Redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// async login action
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:3001/users?email=${email}`);
      const data = await res.json();

      if (data.length === 0) {
        return rejectWithValue("User not found");
      }

      const user = data[0];
      if (user.password !== password) {
        return rejectWithValue("Invalid password");
      }

      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// src/Redux/authSlice.js
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateFavorites: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, favorites: action.payload }; // <- create a new object
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, updateFavorites } = authSlice.actions;
export default authSlice.reducer;
