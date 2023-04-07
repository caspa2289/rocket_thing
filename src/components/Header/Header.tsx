import { FC, useMemo } from 'react'
import styles from './Header.module.scss'
import logo from '../Header/img/dogx.png'
import classNames from 'classnames'

export const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} />
            <button className={classNames(styles.header_btn, styles.sign_in)}>
                Войти
            </button>
            <button className={classNames(styles.header_btn, styles.sign_up)}>
                Регистрация
            </button>
        </div>
    )
}
