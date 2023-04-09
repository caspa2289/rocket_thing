import { FC, RefObject, useEffect, useState } from 'react'
import styles from './Shit.module.scss'

interface IShitProps {
    wrapperRef: RefObject<HTMLDivElement>
    canvasRef: RefObject<HTMLCanvasElement>
}

export const Shit: FC<IShitProps> = (props) => {
    const { wrapperRef } = props

    const [position, setPosition] = useState<[number, number]>([0, 0])
    const [height, setHeight] = useState(20)

    useEffect(() => {
        if (!wrapperRef.current) return

        setPosition([
            wrapperRef.current.clientWidth / 2,
            wrapperRef.current.clientHeight / 2,
        ])
    }, [])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setHeight((prevHeight) => prevHeight + 1)
    //     }, 20)
    //
    //     return () => clearInterval(interval)
    // }, [])

    // useEffect(() => {}, [])

    return (
        <div
            className={styles.wrapper}
            style={{ left: position[0], top: position[1], height }}
        />
    )
}
