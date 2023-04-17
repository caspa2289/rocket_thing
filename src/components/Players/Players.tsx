import styles from './Players.module.scss'
import profilePicture from '../Players/img/dog.png'
import classNames from 'classnames'
import { useMemo } from 'react'

export interface IPlayersProps {
    name: string
    bet?: number
    coefficient?: number
    gain?: number
    status: TStatus
}

export type TStatus = 'waiting' | 'won' | 'lost'

const playerStatusMap: Record<TStatus, string> = {
    waiting: styles.player__waiting,
    won: styles.player__won,
    lost: styles.player__lost,
}

const players: IPlayersProps[] = [
    {
        name: 'Иван Говнов',
        bet: 228,
        status: 'waiting',
    },
    {
        name: 'Носитель Штанов',
        bet: 1488,
        status: 'won',
    },
    {
        name: 'Говоритель Хуйни',
        bet: 1,
        status: 'lost',
    },
]

export const Players = () => {
    const playerList = useMemo(
        () =>
            players.map((element, index) => {
                const { name, bet, status } = element
                return (
                    <div
                        key={index}
                        className={classNames(
                            styles.player,
                            playerStatusMap[status]
                        )}
                    >
                        <img
                            src={profilePicture}
                            className={styles.player__picture}
                        />
                        <div className={styles.player__info}>
                            <span className={styles.player__info__name}>
                                {name}
                            </span>
                            <span className={styles.player__info__bet}>
                                {bet}&nbsp;₽
                            </span>
                        </div>
                    </div>
                )
            }),
        [players]
    )

    return <div className={styles.wrapper}>{playerList}</div>
}
