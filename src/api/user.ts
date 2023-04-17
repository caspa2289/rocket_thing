import axios from 'axios'
import { USER_API_PATH } from '../utils/constants'
import { ILoginValues, ISignupValues, IUser, TApiPromise } from '../types'

export const signupRequest = (values: ISignupValues): TApiPromise<IUser> =>
    axios.post(`${USER_API_PATH}/signup`, values, { withCredentials: true })

export const signinRequest = (values: ILoginValues): TApiPromise<IUser> =>
    axios.post(`${USER_API_PATH}/signin`, values, { withCredentials: true })

export const checkAuthorizationRequest = (): TApiPromise<IUser> =>
    axios.get(`${USER_API_PATH}/checkAuth`, { withCredentials: true })
