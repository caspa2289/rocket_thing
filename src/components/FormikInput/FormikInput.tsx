import { FC, SyntheticEvent } from 'react'
import { useField } from 'formik'
import styles from './FormikInput.module.scss'
import classNames from 'classnames'

export interface IInputProps {
    placeholder?: string
    type?: 'text' | 'password'
    name: string
}

export const FormikInput: FC<IInputProps> = (props) => {
    const { placeholder, type = 'text', name } = props

    const [{ value }, { error }, { setValue }] = useField(name)

    const handleChange = (evt: SyntheticEvent<HTMLInputElement>) => {
        setValue(evt.currentTarget.value)
    }

    return (
        <div className={styles.field_group}>
            <span className={styles.field_label}>{placeholder}</span>
            <input
                className={classNames(styles.input, error && styles.invalid)}
                onChange={handleChange}
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
            />
            <span className={styles.error}>{error}</span>
        </div>
    )
}
