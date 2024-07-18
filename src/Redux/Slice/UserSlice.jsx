import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    details: {},
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.details = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = UserSlice.actions

export default UserSlice.reducer