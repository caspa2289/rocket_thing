import styles from './App.module.css'
import { Game } from '../Game'
import { GameControls } from '../GameControls'
import { useSelector } from 'react-redux'
import { selectGameStage } from '../../selectors/game'
import { useCallback, useEffect, useMemo } from 'react'
import { GAME_STAGES } from '../../utils/constants'
import { Button } from '../Button'
import { useAppDispatch } from '../../utils/storeHooks'
import { resetGameState } from '../../reducers/game'
import { Players } from '../Players'
import { Header } from '../Header'
import { checkAuthorization } from '../../actions/user'
import { selectUserState } from '../../selectors/user'
import { socket } from '../ws/socket'
import { handleSuccess, handleWarning } from '../../utils/notifications'

function App() {
    const dispatch = useAppDispatch()
    const stage = useSelector(selectGameStage)
    const userInfo = useSelector(selectUserState)

    const isControlsDisabled = useMemo(
        () => stage !== GAME_STAGES.beforeStarted || !userInfo.id,
        [stage, userInfo]
    )

    const handleConnect = useCallback(() => {
        handleSuccess('WS connection established!')
    }, [])

    const handleDisconnect = useCallback(() => {
        handleWarning('WS connection closed!')
    }, [])

    const handleTestEvent = useCallback((value: any) => {
        console.log(value)
    }, [])

    useEffect(() => {
        socket.on('connect', handleConnect)
        socket.on('disconnect', handleDisconnect)
        socket.on('test', handleTestEvent)

        return () => {
            socket.off('connect', handleConnect)
            socket.off('disconnect', handleDisconnect)
            socket.off('test', handleTestEvent)
        }
    }, [])

    useEffect(() => {
        dispatch(checkAuthorization())
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <Header />
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
        </>
    )
}

export default App
