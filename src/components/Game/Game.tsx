import { FC } from 'react'
import styles from './Game.module.scss'
import { GameHistory } from './components/GameHistory'
import { GameCanvas } from './components/GameCanvas'

export const Game: FC = () => {
    return (
        <div className={styles.wrapper}>
            <GameHistory />
            <GameCanvas />
        </div>
    )
}
