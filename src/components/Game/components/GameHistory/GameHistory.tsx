import { FC, useMemo } from 'react'
import styles from './GameHistory.module.scss'
import classNames from 'classnames'

interface IHistoryItem {
    val: number
    cfcolor: TColor
}

export type TColor = 'red' | 'white' | 'orange' | 'green'

const gradeCfMap: Record<TColor, string> = {
    red: styles.zero_coefficient,
    white: styles.sm_zero_coefficient,
    orange: styles.md_zero_coefficient,
    green: styles.lg_zero_coefficient,
}

const coefficients = [12.12, 4.23, 1.22, 6.98, 0, 0, 4.01, 2.0, 0, 4.76]

const coloredCfs: IHistoryItem[] = coefficients.map((element) => {
    if (element == 0) {
        return { val: element, cfcolor: 'red' }
    } else if (element > 0 && element <= 2) {
        return { val: element, cfcolor: 'white' }
    } else if (element > 2 && element <= 5) {
        return { val: element, cfcolor: 'orange' }
    } else return { val: element, cfcolor: 'green' }
})

export const GameHistory: FC = () => {
    const cfHistory = useMemo(
        () =>
            coloredCfs.map((element, index) => {
                const { val, cfcolor } = element
                return (
                    <span
                        key={index}
                        className={classNames(
                            styles.coefficent,
                            gradeCfMap[cfcolor]
                        )}
                    >
                        {val} X
                    </span>
                )
            }),
        [coloredCfs]
    )
    return <div className={styles.wrapper}>{cfHistory}</div>
}
