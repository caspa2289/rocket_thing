import { AppThunk } from '../store'
import {
    checkAuthorizationRequest,
    signinRequest,
    signupRequest,
} from '../api/user'
import { ILoginValues, ISignupValues } from '../types'
import { getSHA256Hash } from '../utils/encryption'
import { setUserData } from '../reducers/user'

export const signup =
    ({
        setSubmitting,
        values,
    }: {
        setSubmitting: (value: boolean) => void
        values: ISignupValues
    }): AppThunk =>
    async () => {
        const encryptedPassword = await getSHA256Hash(values.password)

        try {
            const { data } = await signupRequest({
                ...values,
                password: encryptedPassword,
            })

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
    async () => {
        const encryptedPassword = await getSHA256Hash(values.password)

        try {
            const { data } = await signinRequest({
                ...values,
                password: encryptedPassword,
            })

            //TODO: уведомления для пользака
            console.log(data.message)
        } catch (err: any) {
            console.error(err.response.data.message ?? 'Неизвестная ошибка')
        } finally {
            setSubmitting(false)
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
