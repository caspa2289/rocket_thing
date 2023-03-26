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
    const { text, onClick } = props
    return (
        <button className={styles.btn}>
            {text},{onClick}
        </button>
    )
}
