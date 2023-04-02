import { RootState } from '../store'

export const selectGameState = (state: RootState) => state.game

export const selectCoefficient = (state: RootState) =>
    selectGameState(state).coefficient

export const selectGameStage = (state: RootState) =>
    selectGameState(state).stage
