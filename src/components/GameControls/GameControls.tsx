import styles from './GameControls.module.scss'
import { FC, useCallback } from 'react'
import { Button } from '../Button'
import { BetControls } from './components/BetControls'
import { AutoStopControls } from './components/AutoStopControls'
import { useAppDispatch } from '../../utils/storeHooks'
import { setGameStage } from '../../reducers/game'
import { GAME_STAGES } from '../../utils/constants'

interface IGameControlsProps {
    disabled: boolean
}

export const GameControls: FC<IGameControlsProps> = (props) => {
    const dispatch = useAppDispatch()
    const { disabled } = props

    const handleBetClick = useCallback(() => {
        dispatch(setGameStage(GAME_STAGES.inProgress))
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.section}>
                <BetControls />
            </div>
            <Button
                onClick={handleBetClick}
                size="lg"
                block
                isDisabled={disabled}
            >
                Поставить
            </Button>
            <div className={styles.section}>
                <AutoStopControls />
            </div>
        </div>
    )
}
