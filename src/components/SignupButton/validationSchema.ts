import { string, object } from 'yup'

const FIELD_REQUIRED = 'Поле обязательно для заполнения'
const LENGTH_VIOLATION = 'Длина должна быть от 3 до 20 символов'
const WHITESPACES_VIOLATION = 'Не может содержать пробелы вначале и конце'

export const validationSchema = object({
    name: string()
        .required(FIELD_REQUIRED)
        .min(3, LENGTH_VIOLATION)
        .max(20, LENGTH_VIOLATION)
        .trim(WHITESPACES_VIOLATION)
        .test(
            'Только русские буквы',
            'Только русские буквы и пробелы',
            (value) => !!value?.match(/^[а-яё ]+$/gi)
        ),
    login: string()
        .trim(WHITESPACES_VIOLATION)
        .required(FIELD_REQUIRED)
        .min(3, LENGTH_VIOLATION)
        .max(20, LENGTH_VIOLATION)
        .test(
            'Только английские буквы',
            'Только английские буквы',
            (value) => !!value?.match(/^[a-z]+$/gi)
        ),
    password: string()
        .trim(WHITESPACES_VIOLATION)
        .required(FIELD_REQUIRED)
        .min(3, LENGTH_VIOLATION)
        .max(20, LENGTH_VIOLATION)
        .test(
            'Только английские буквы и цифры',
            'Только английские буквы, цифры и нижние подчёркивания',
            (value) => !!value?.match(/^[a-z\d_]+$/gi)
        ),
})
