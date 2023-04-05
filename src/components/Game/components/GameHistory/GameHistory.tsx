import { FC, useMemo } from 'react'
import styles from './GameHistory.module.scss'
import classNames from 'classnames'

interface IHistoryProps {
    val: number
    cfcolor: Tcolor
}

export type Tcolor = 'red' | 'white' | 'orange' | 'green'

const gradeCfMap: Record<Tcolor, string> = {
    red: styles.zero_cf,
    white: styles.sm_cf,
    orange: styles.md_cf,
    green: styles.lg_cf,
}

const coefficients = [12.12, 4.23, 1.22, 6.98, 0, 0, 4.01, 2.0, 0, 4.76]

const coloredCfs: IHistoryProps[] = coefficients.map((element, index) => {
    if (element == 0) {
        return { val: element, cfcolor: 'red' }
    } else if (element > 0 && element <= 2) {
        return { val: element, cfcolor: 'white' }
    } else if (element > 2 && element <= 5) {
        return { val: element, cfcolor: 'orange' }
    } else return { val: element, cfcolor: 'green' }
})

export const GameHistory = () => {
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
                        {element.val} X
                    </span>
                )
            }),
        [coloredCfs]
    )
    return <div className={styles.wrapper}>{cfHistory}</div>
}
