import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { counterReducer } from './reducers/counterReducer'
import { halfCounterExtraReducer } from './reducers/halfCounterExtraReducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    halfCounter: halfCounterExtraReducer,
})

const store = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 
