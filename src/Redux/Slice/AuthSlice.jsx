import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    refreshToken: undefined,
    accessToken: undefined,
    isLogged: false
};

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setToken(state, action) {
            state.refreshToken = action.payload.refreshToken;
            state.accessToken = action.payload.accessToken;
            state.isLogged = action.payload.isLogged;
        },
        logout(state, action) {
            state.isLogged = false
        }
    },
})

export const { setToken, logout } = AuthSlice.actions
export default AuthSlice.reducer