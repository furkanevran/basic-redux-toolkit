import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

const addAsync = createAsyncThunk(
    'counter/add',
    async (number: number, thunkAPI) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return number
    }
)

const counterSlide = createSlice({
    name: "counter",
    initialState: {count: 0, loading: false},
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(addAsync.pending, (state, action) => {
            console.log(action)
            return {...state, loading: true}
        })

        builder.addCase(addAsync.fulfilled, (state, action) => {
            console.log(action)
            return {count: state.count + action.payload, loading: false}
        })
    }
})

export const counterReducer = counterSlide.reducer

export const {
    add,
}  = counterSlide.actions

export {addAsync}