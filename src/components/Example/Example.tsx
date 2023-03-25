import { FC, SyntheticEvent, useCallback } from 'react'
import styles from './Example.module.scss'
import { useExampleState } from './utils/useExampleState'

export interface IExampleProps {
    content: number
}

export const Example: FC<IExampleProps> = (props) => {
    const { content } = props
    const { title, setExampleTitle } = useExampleState()

    const handleChange = useCallback(
        ({ currentTarget: { value } }: SyntheticEvent<HTMLInputElement>) =>
            setExampleTitle(value),
        []
    )

    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <span>{content}</span>
            <input onChange={handleChange}></input>
        </div>
    )
}
