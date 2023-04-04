import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCoefficient, selectGameStage } from '../../../../selectors/game'
import styles from './GameCoefficient.module.scss'
import { GAME_STAGES } from '../../../../utils/constants'
import { incrementCoefficient } from '../../../../reducers/game'

export const GameCoefficient: FC = () => {
    const dispatch = useDispatch()
    const coefficient = useSelector(selectCoefficient)
    const stage = useSelector(selectGameStage)

    useEffect(() => {
        let interval: NodeJS.Timeout

        if (stage === GAME_STAGES.inProgress) {
            interval = setInterval(() => {
                dispatch(incrementCoefficient())
            }, 50)
        }

        return () => interval && clearInterval(interval)
    }, [stage])

    return <div className={styles.wrapper}>{coefficient.toFixed(1)}X</div>
}
