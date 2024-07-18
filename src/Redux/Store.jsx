import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import UserSlice from "./Slice/UserSlice";
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from "redux-thunk";
import AuthSlice from "./Slice/AuthSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
};

const rootReducers = combineReducers({
    user: UserSlice,
    auth: AuthSlice,
});

let persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: [thunk]
    }
)