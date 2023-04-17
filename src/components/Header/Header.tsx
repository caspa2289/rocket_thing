import styles from './Header.module.scss'
import logo from '../Header/img/dogx.webp'
import { LoginButton } from '../LoginButton'
import { SignupButton } from '../SignupButton'

export const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} />
            <div style={{ display: 'flex', gap: '5px' }}>
                <LoginButton />
                <SignupButton />
            </div>
        </div>
    )
}
