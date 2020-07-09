import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { add, addAsync } from './counterReducer'

const halfCounterExtraSlice = createSlice({
    name: "halfCounterExtra",
    initialState: {count: 0},
    reducers: {},
    extraReducers: builder => {
        builder.addCase(add, (state, action: PayloadAction<number>) => {
            return {count: state.count + action.payload / 2}
        })

        builder.addCase(addAsync.fulfilled, (state, action) => {
            return {count: state.count + action.payload / 2}
        })
    },
})

export const halfCounterExtraReducer = halfCounterExtraSlice.reducer