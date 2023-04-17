import styles from './Header.module.scss'
import logo from '../Header/img/dogx.webp'
import { LoginButton } from '../LoginButton'
import { SignupButton } from '../SignupButton'
import { useAppSelector } from '../../utils/storeHooks'
import { selectUserState } from '../../selectors/user'

export const Header = () => {
    const userData = useAppSelector(selectUserState)
    const isAuthorized = userData.id !== undefined

    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} />
            {isAuthorized ? (
                <div>{userData?.name}</div>
            ) : (
                <div style={{ display: 'flex', gap: '5px' }}>
                    <LoginButton />
                    <SignupButton />
                </div>
            )}
        </div>
    )
}
