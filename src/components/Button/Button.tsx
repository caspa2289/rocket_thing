import styles from './Button.module.scss'
import { FC } from 'react'

interface IButtonProps {
    text: string
    onClick?: () => void
    isDisabled?: boolean
    isLoading?: boolean
    size?: 'sm' | 'md' | 'lg'
}

export const Button: FC<IButtonProps> = (props) => {
    return (
        <button className={styles.btn}>
            {props.text},{props.onClick}
        </button>
    )
}
