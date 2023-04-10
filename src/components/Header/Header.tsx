import { FC, useCallback, useMemo } from 'react'
import styles from './Header.module.scss'
import logo from '../Header/img/dogx.webp'
import classNames from 'classnames'
import { Button } from '../Button'
import { setGameStage } from '../../reducers/game'
import { GAME_STAGES } from '../../utils/constants'

export const Header = () => {
    const signIn = () => {
        console.log('Войти')
    }
    const signUp = () => {
        console.log('Регистрация')
    }
    return (
        <div className={styles.header}>
            <div>
                <img className={styles.logo} src={logo} />
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <Button onClick={signIn} type="ghost">
                    Войти
                </Button>
                <Button onClick={signUp}>Регистрация</Button>
            </div>
        </div>
    )
}
