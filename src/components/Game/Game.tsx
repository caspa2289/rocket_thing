import { FC } from 'react'
import styles from './Game.module.scss'
import { GameHistory } from './components/GameHistory'
// import { GameCanvas } from './components/GameCanvas'
import { GameCoefficient } from './components/GameCoefficient'
import { GameScene2D } from './components/GameScene2D'

export const Game: FC = () => {
    return (
        <div className={styles.wrapper}>
            <GameHistory />
            {/*<GameCanvas />*/}
            <GameScene2D />
            <GameCoefficient />
        </div>
    )
}
