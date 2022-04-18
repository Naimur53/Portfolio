import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    windowLoad: true,
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setWindowLoad: (state, { payload }) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.windowLoad = payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setWindowLoad } = dataSlice.actions
export const allData = (state) => state.data;

export default dataSlice.reducer