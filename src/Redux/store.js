import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import recipesReducer from "./recipesSlice";

const store = configureStore({
    reducer: {
        auth:authSlice,
        recipes: recipesReducer,
    }
})

export default store;