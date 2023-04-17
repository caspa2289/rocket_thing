import { FC, memo, ReactNode } from 'react'
import styles from './Modal.module.scss'
import classNames from 'classnames'

export interface IModalProps {
    children?: ReactNode
    isActive?: boolean
    size?: TModalSize
    onClose: () => void
}

export type TModalSize = 'md' | 'lg'
const sizeMap: Record<TModalSize, string> = {
    md: styles.modal__medium,
    lg: styles.modal__large,
}

export const Modal: FC<IModalProps> = memo((props) => {
    const { children, isActive, onClose, size } = props

    if (!isActive) {
        return null
    }

    return (
        <div className={styles.modal_background} onClick={onClose}>
            <div
                className={classNames(styles.modal, size && sizeMap[size])}
                onClick={(event) => {
                    event.stopPropagation()
                }}
            >
                <div className={styles.modal_content}>
                    {children}
                    <button
                        className={styles.close_modal_btn}
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    )
})
