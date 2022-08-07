import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    windowLoad: true,
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setWindowLoad: (state, { payload }) => {
            state.windowLoad = payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setWindowLoad } = dataSlice.actions
export const allData = (state) => state.data;

export default dataSlice.reducer