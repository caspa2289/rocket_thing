import { FC, useMemo } from 'react'
import styles from './Header.module.scss'
import logo from '../Header/img/dogx.png'
import classNames from 'classnames'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className="header_section">
                <img className={styles.logo} src={logo} />
            </div>
            <div className="header_section">
                <button
                    className={classNames(
                        styles.header_btn,
                        styles.sign_in_btn
                    )}
                >
                    Войти
                </button>
                <button
                    className={classNames(
                        styles.header_btn,
                        styles.sign_up_btn
                    )}
                >
                    Регистрация
                </button>
            </div>
        </div>
    )
}
