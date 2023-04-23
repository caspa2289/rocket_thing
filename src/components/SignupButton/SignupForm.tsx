import { FC } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { FormikInput } from '../FormikInput'
import { validationSchema } from './validationSchema'
import { Button } from '../Button'
import { useAppDispatch } from '../../utils/storeHooks'
import { signup } from '../../actions/user'
import { ISignupValues } from '../../types'
import styles from './Signup.module.scss'

const initialValues: ISignupValues = {
    name: '',
    login: '',
    password: '',
}

interface ISignupProps {
    closeModal: VoidFunction
}

export const SignupForm: FC<ISignupProps> = (props) => {
    const { closeModal } = props

    const dispatch = useAppDispatch()

    const handleSubmit = (
        values: ISignupValues,
        { setSubmitting }: FormikHelpers<ISignupValues>
    ) => {
        dispatch(signup({ setSubmitting, values, closeModal }))
    }

    return (
        <Formik<ISignupValues>
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnChange={false}
        >
            {({ isSubmitting }) => {
                return (
                    <Form>
                        <FormikInput placeholder="Имя" name="name" />
                        <FormikInput placeholder="Логин" name="login" />
                        <FormikInput
                            placeholder="Пароль"
                            name="password"
                            type="password"
                        />
                        <Button type="submit" isLoading={isSubmitting}>
                            submit
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )
}
