import styles from './Header.module.scss'
import logo from '../Header/img/dogx.webp'
import { LoginButton } from '../LoginButton'
import { SignupButton } from '../SignupButton'
import { useAppSelector } from '../../utils/storeHooks'
import { selectUserState } from '../../selectors/user'
import { UserProfile } from '../UserProfile'
import { IUser } from '../../types'

export const Header = () => {
    const userData = useAppSelector(selectUserState)
    const isAuthorized = userData.id !== undefined

    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} />
            {isAuthorized ? (
                <UserProfile {...(userData as IUser)} />
            ) : (
                <div style={{ display: 'flex', gap: '5px' }}>
                    <LoginButton />
                    <SignupButton />
                </div>
            )}
        </div>
    )
}
