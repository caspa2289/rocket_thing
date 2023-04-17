import { string, object } from 'yup'

const FIELD_REQUIRED = 'Поле обязательно для заполнения'

export const validationSchema = object({
    login: string().required(FIELD_REQUIRED),
    password: string().required(FIELD_REQUIRED),
})
