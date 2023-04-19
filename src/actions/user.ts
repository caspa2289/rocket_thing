import { AppThunk } from '../store'
import {
    checkAuthorizationRequest,
    signinRequest,
    signoutRequest,
    signupRequest,
} from '../api/user'
import { ILoginValues, ISignupValues } from '../types'
import { getSHA256Hash } from '../utils/encryption'
import { setUserData } from '../reducers/user'

export const signup =
    ({
        setSubmitting,
        values,
        closeModal,
    }: {
        setSubmitting: (value: boolean) => void
        values: ISignupValues
        closeModal: VoidFunction
    }): AppThunk =>
    async () => {
        const encryptedPassword = await getSHA256Hash(values.password)

        try {
            const { data } = await signupRequest({
                ...values,
                password: encryptedPassword,
            })

            closeModal()
            //TODO: уведомления для пользака
            console.log(data.message)
        } catch (err) {
            console.error(err)
        } finally {
            setSubmitting(false)
        }
    }

export const login =
    ({
        setSubmitting,
        values,
    }: {
        setSubmitting: (value: boolean) => void
        values: ILoginValues
    }): AppThunk =>
    async (dispatch) => {
        const encryptedPassword = await getSHA256Hash(values.password)

        try {
            const { data } = await signinRequest({
                ...values,
                password: encryptedPassword,
            })

            //TODO: уведомления для пользака
            dispatch(setUserData(data.response))
        } catch (err: any) {
            console.error(err.response.data.message ?? 'Неизвестная ошибка')
        } finally {
            setSubmitting(false)
        }
    }

export const logout = (): AppThunk => async (dispatch) => {
    try {
        const { data } = await signoutRequest()
        console.log(data.message)
        dispatch(setUserData({}))
    } catch (err: any) {
        console.error(err.response.data.message ?? 'Неизвестная ошибка')
    }
}

export const checkAuthorization = (): AppThunk => async (dispatch) => {
    try {
        const { data } = await checkAuthorizationRequest()
        dispatch(setUserData(data.response))
    } catch (err: any) {
        console.error(err.response.data.message ?? 'Неизвестная ошибка')
        dispatch(setUserData({}))
    }
}
