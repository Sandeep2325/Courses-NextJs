import { configureStore } from '@reduxjs/toolkit'
import signupReducer from "./features/signupSlice"
import loginReducer from "./features/loginSlice"
import { TypedUseSelectorHook,useSelector } from 'react-redux'
export const store=configureStore({
    reducer:{
        signupReducer,
        loginReducer
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch //disptch typ
export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector