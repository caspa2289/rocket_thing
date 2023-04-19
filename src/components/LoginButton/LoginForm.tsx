import { FC } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { FormikInput } from '../FormikInput'
import { validationSchema } from './validationSchema'
import { Button } from '../Button'
import { useAppDispatch } from '../../utils/storeHooks'
import { login } from '../../actions/user'
import { ILoginValues } from '../../types'

const initialValues: ILoginValues = {
    login: '',
    password: '',
}

export const LoginForm: FC = () => {
    const dispatch = useAppDispatch()

    const handleSubmit = (
        values: ILoginValues,
        { setSubmitting }: FormikHelpers<ILoginValues>
    ) => {
        dispatch(login({ setSubmitting, values }))
    }

    return (
        <Formik<ILoginValues>
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnChange={false}
        >
            {({ isSubmitting }) => {
                return (
                    <Form>
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
