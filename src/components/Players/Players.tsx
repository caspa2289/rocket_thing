import styles from './Players.module.scss'
import { FC, memo, useCallback, useMemo } from 'react'
import { IExampleProps } from '../Example'
import profilePicture from '../Players/img/dog.png'
import { TButtonSize } from '../Button'
import classNames from 'classnames'

export interface IPlayersProps {
    name: string
    bet?: number
    coefficient?: number
    gain?: number
    status: Tstatus
}

export type Tstatus = 'waiting' | 'won' | 'lost'

const playerStatusMap: Record<Tstatus, string> = {
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
    const output = players.map((element, index) => {
        const cutName = (
            <span className={styles.player}>
                {element.name.split('').splice(0, element.name.length / 2)}
                {'...'}
            </span>
        )
        return (
            <div
                key={index}
                className={classNames(
                    styles.players_list,
                    playerStatusMap[element.status]
                )}
            >
                <img src={profilePicture} className={styles.profilePicture} />
                {cutName}
                <br />
                <span className={styles.bet}>{element.bet + ' ₽'}</span>
            </div>
        )
    })

    return (
        <div className={styles.wrapper}>
            <span>Игрок и ставка Кэф Выигрыш</span>
            <div className={styles.player}>{output}</div>
        </div>
    )
}
