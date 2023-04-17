import { FC, SyntheticEvent } from 'react'
import { useField } from 'formik'

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
        <div>
            <span>{error}</span>
            <input
                onChange={handleChange}
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
            />
        </div>
    )
}
