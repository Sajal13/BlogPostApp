import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./Posts/PostSlice";
import UserReducer from "./Users/UserSlice"

export const store = configureStore({
    reducer:{
        posts: PostReducer,
        users: UserReducer
    }
})