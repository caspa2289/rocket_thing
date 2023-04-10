import styles from './Button.module.scss'
import { FC, memo, useCallback, useMemo } from 'react'
import classNames from 'classnames'

export interface IButtonProps {
    children?: string
    onClick: () => void
    isDisabled?: boolean
    isLoading?: boolean
    size?: TButtonSize
    block?: boolean
    style?: string
    type?: TType
}

export type TButtonSize = 'sm' | 'md' | 'lg'
export type TType = 'ghost' | 'default'

const sizeMap: Record<TButtonSize, string> = {
    sm: styles.button__small,
    md: styles.button__medium,
    lg: styles.button__large,
}
const typeMap: Record<TType, string> = {
    ghost: styles.button__ghost,
    default: styles.button__default,
}

export const Button: FC<IButtonProps> = memo((props) => {
    const {
        children,
        onClick,
        size = 'md',
        isLoading,
        isDisabled,
        block,
        type = 'default',
    } = props

    const isButtonClickable = useMemo(
        () => !isLoading && !isDisabled,
        [isLoading, isDisabled]
    )

    const buttonClassName = useMemo(
        () =>
            classNames(
                isButtonClickable
                    ? styles.button__active
                    : styles.button__inactive,
                sizeMap[size],
                typeMap[type],
                block && styles.button__block
            ),
        [isButtonClickable, size]
    )

    const displayContent = useMemo(
        () => (isLoading ? 'Loading' : children),
        [isLoading, children]
    )

    const handleClick = useCallback(() => {
        if (isButtonClickable) onClick()
    }, [])

    return (
        <button onClick={handleClick} className={buttonClassName}>
            {displayContent}
        </button>
    )
})
