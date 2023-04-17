import styles from './Header.module.scss'
import logo from '../Header/img/dogx.webp'
import { Button } from '../Button'

export const Header = () => {
    const signIn = () => {
        console.log('Войти')
    }
    const signUp = () => {
        console.log('Регистрация')
    }
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} />
            <div style={{ display: 'flex', gap: '5px' }}>
                <Button onClick={signIn} type="ghost">
                    Войти
                </Button>
                <Button onClick={signUp}>Регистрация</Button>
            </div>
        </div>
    )
}
