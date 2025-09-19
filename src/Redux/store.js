import { configureStore } from "@reduxjs/toolkit";
import adminReducer from './AdminSignIn';

const store = configureStore({
    reducer: {
        admin: adminReducer
    }
})

export default store;