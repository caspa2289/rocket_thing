import styles from './Players.module.scss'
import { FC, memo, useCallback, useMemo } from 'react'
import { IExampleProps } from '../Example'
import profilePicture from '../Players/img/dog.png'
import { TButtonSize } from '../Button'
import classNames from 'classnames'

export interface IPlayersProps {
    name?: string
    bet?: number
    coefficient?: number
    gain?: number
    status: Tstatus
}

export type Tstatus = 'waiting' | 'won' | 'lost'

// const playerStatusMap: Record<Tstatus, string> = {
//     waiting: styles.player__waiting,
//     won: styles.player__won,
//     lost: styles.player__lost,
// }

const players = [
    {
        name: 'Иван Говнов',
        bet: 228,
        status: styles.player__waiting,
    },
    {
        name: 'Носитель Штанов',
        bet: 1488,
        status: styles.player__won,
    },
    {
        name: 'Говоритель Хуйни',
        bet: 1,
        status: styles.player__lost,
    },
]

export const Players = () => {
    // const { name, bet } = props
    // const { status } = props

    const output = players.map((element, index) => {
        return (
            <div
                key={index}
                className={classNames(styles.players_list, element.status)}
            >
                <img src={profilePicture} className={styles.profilePicture} />
                <span className={styles.player}>
                    {element.name.split('').splice(0, element.name.length / 2)}
                    {'...'}
                </span>
                <br />
                <span className={styles.bet}>{element.bet + ' ₽'}</span>
            </div>
        )
    })

    return (
        <div className={styles.wrapper}>
            <span>{'Игрок и ставка  Кэф   Выигрыш'}</span>
            {/*<span>{'Кэф'}</span>*/}
            {/*<span>{'Выигрыш'}</span>*/}
            <div className={styles.player}>{output}</div>
        </div>
    )
}
