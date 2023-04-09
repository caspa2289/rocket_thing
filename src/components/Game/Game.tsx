import { FC } from 'react'
import styles from './Game.module.scss'
import { GameHistory } from './components/GameHistory'
import { GameCoefficient } from './components/GameCoefficient'

export const Game: FC = () => {
    return (
        <div className={styles.wrapper}>
            <GameHistory />
            <GameCoefficient />
        </div>
    )
}
