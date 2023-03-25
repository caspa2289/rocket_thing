import { RootState } from '../store'

export const selectExample = (state: RootState) => state.example

export const selectExampleTitle = (state: RootState) =>
    selectExample(state).title
