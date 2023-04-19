import { FC, useCallback } from 'react'
import styles from './UserProfile.module.scss'
import { IUser } from '../../types'
import { Button } from '../Button'
import { useAppDispatch } from '../../utils/storeHooks'
import { logout } from '../../actions/user'

export const UserProfile: FC<IUser> = (props) => {
    const { money, name, login } = props

    const dispatch = useAppDispatch()

    const handleLogoutClick = useCallback(() => {
        dispatch(logout())
    }, [])

    return (
        <div className={styles.wrapper}>
            <div>
                <div>
                    {name}({login})
                </div>
                <div>Баланс: {money}</div>
            </div>
            <Button onClick={handleLogoutClick} size="sm">
                Выйти
            </Button>
        </div>
    )
}
