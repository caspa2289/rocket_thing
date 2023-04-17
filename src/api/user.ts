import axios from 'axios'
import { USER_API_PATH } from '../utils/constants'
import { ILoginValues, ISignupValues, IUser, TApiPromise } from '../types'

export const signupRequest = (values: ISignupValues): TApiPromise<IUser> =>
    axios.post(`${USER_API_PATH}/signup`, values)

export const signinRequest = (values: ILoginValues): TApiPromise<IUser> =>
    axios.post(`${USER_API_PATH}/signin`, values)
