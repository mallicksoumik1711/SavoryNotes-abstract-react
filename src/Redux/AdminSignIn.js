
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        admin: {
            email: "admin@admin.com",
            password: "Admin@123"
        },
        isAuthenticated: false,
        error: null
    },
    reducers: {
        loginAdmin: (state, action) => {
            const {email, password} = action.payload;
            if(email == state.admin.email && password == state.admin.password){
                state.isAuthenticated = true;
                state.error = null;
            }
            else{
                state.isAuthenticated = false;
                state.error = "Invalid Email or Password";
            }
        },
        logoutAdmin: (state)=>{
            state.isAuthenticated = false;
            state.error = null;
        }
    }
})

export const {loginAdmin, logoutAdmin} = adminSlice.actions;
export default adminSlice.reducer;