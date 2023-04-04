import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GAME_STAGES } from '../utils/constants'

export type TGameStage = keyof typeof GAME_STAGES

export interface IGameState {
    coefficient: number
    stage: TGameStage
}

const initialState: IGameState = {
    coefficient: 0.0,
    stage: 'beforeStarted',
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setCoefficient: (state, { payload }: PayloadAction<number>) => {
            state.coefficient = payload
        },
        incrementCoefficient: (state) => {
            state.coefficient = state.coefficient + 0.1
        },
        setGameStage: (state, { payload }: PayloadAction<TGameStage>) => {
            state.stage = payload
        },
        resetGameState: (state) => {
            state.coefficient = initialState.coefficient
            state.stage = initialState.stage
        },
    },
})

export const {
    setCoefficient,
    setGameStage,
    incrementCoefficient,
    resetGameState,
} = gameSlice.actions

export default gameSlice.reducer
