import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

// Create store using userSlice
export default configureStore({
    reducer: {
        users: userReducer
    }
});