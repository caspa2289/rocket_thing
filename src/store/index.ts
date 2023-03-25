import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import example from '../reducers/example'

export const store = configureStore({
    reducer: {
        example,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
