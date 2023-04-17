import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import game from '../reducers/game'
import user from '../reducers/user'

export const store = configureStore({
    reducer: {
        game,
        user,
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
