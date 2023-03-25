import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IExampleState {
    title: string
}

const initialState: IExampleState = {
    title: 'INITIAL TITLE',
}

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        setTitle: (state, { payload }: PayloadAction<string>) => {
            state.title = payload
        },
    },
})

export const { setTitle } = exampleSlice.actions

export default exampleSlice.reducer
