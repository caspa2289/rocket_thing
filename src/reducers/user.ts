import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../types'

const initialState: Partial<IUser> = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, { payload }: PayloadAction<Partial<IUser>>) => {
            return payload
        },
    },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
