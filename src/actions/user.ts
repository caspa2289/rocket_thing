import { AppThunk } from '../store'
import { signupRequest } from '../api/user'
import { ISignupValues } from '../types'

export const signup =
    ({
        setSubmitting,
        values,
    }: {
        setSubmitting: (value: boolean) => void
        values: ISignupValues
    }): AppThunk =>
    async (dispatch, getState) => {
        try {
            const { data } = await signupRequest(values)

            //TODO: уведомления для пользака
            console.log(data.message)
        } catch (err) {
            console.error(err)
        } finally {
            setSubmitting(false)
        }
    }
