import { AxiosPromise } from 'axios'

export interface IBaseResponse<T> {
    message: string
    status: number
    response: T
}

export type TApiPromise<T> = AxiosPromise<IBaseResponse<T>>

export interface IUser {
    id: number
    name: string
    login: string
    money: number
    created_at: string
    updated_at: string
}

export interface ISignupValues {
    name: string
    login: string
    password: string
}
