import styles from './App.module.css'
import { Game } from '../Game'
import { GameControls } from '../GameControls'
import { useSelector } from 'react-redux'
import { selectGameStage } from '../../selectors/game'
import { SyntheticEvent, useMemo, useState } from 'react'
import { GAME_STAGES } from '../../utils/constants'
import { Button } from '../Button'
import { useAppDispatch } from '../../utils/storeHooks'
import { resetGameState } from '../../reducers/game'
import { Players } from '../Players'
import { Header } from '../Header'
import { Modal } from '../Modal'

function App() {
    const dispatch = useAppDispatch()
    const stage = useSelector(selectGameStage)

    const isControlsDisabled = useMemo(
        () => stage !== GAME_STAGES.beforeStarted,
        [stage]
    )

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.game__wrapper}>
                    <Players />
                    <Game />
                </div>

                <GameControls disabled={isControlsDisabled} />
                {stage === GAME_STAGES.finished && (
                    //это мок, сигнал о старте нового раунда будет с сервера приходить
                    <Button
                        onClick={() => {
                            dispatch(resetGameState())
                        }}
                    >
                        Сбросить состояние
                    </Button>
                )}
            </div>
            <Button onClick={handleClick}>Тестовая кнопка</Button>
            <Modal isActive={isActive} onClose={handleClick} size="lg" />
        </div>
    )
}

export default App
