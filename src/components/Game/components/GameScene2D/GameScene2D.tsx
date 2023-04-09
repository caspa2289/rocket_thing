// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { FC, useCallback, useEffect, useRef } from 'react'
import styles from './GameScene2D.module.scss'
import {
    Engine,
    Render,
    Runner,
    Composites,
    MouseConstraint,
    Mouse,
    Composite,
    Bodies,
    Common,
    Vertices,
    Body,
} from 'matter-js'
import * as polyDecomp from 'poly-decomp'

export const GameScene2D: FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const createSoftBody = useCallback(
        (
            xx: number,
            yy: number,
            columns: number,
            rows: number,
            columnGap: number,
            rowGap: number,
            crossBrace: boolean,
            particleRadius: number,
            particleOptions: any,
            constraintOptions?: any
        ) => {
            particleOptions = Common.extend(
                { inertia: Infinity },
                particleOptions
            )

            constraintOptions = Common.extend(
                {
                    stiffness: 0.2,
                    render: { type: 'line', strokeStyle: '#8B4513' },
                },
                constraintOptions
            )

            const softBody = Composites.stack(
                xx,
                yy,
                columns,
                rows,
                columnGap,
                rowGap,
                (x: number, y: number) => {
                    return Bodies.circle(x, y, particleRadius, particleOptions)
                }
            )

            Composites.mesh(
                softBody,
                columns,
                rows,
                crossBrace,
                constraintOptions
            )
            return softBody
        },
        []
    )

    useEffect(() => {
        if (!wrapperRef?.current) return

        Common.setDecomp(polyDecomp)

        const engine = Engine.create({
            velocityIterations: 1,
            positionIterations: 1,
        })
        const { world } = engine

        const render = Render.create({
            element: wrapperRef.current,
            engine: engine,
            options: {
                width: wrapperRef.current.clientWidth,
                height: wrapperRef.current.clientHeight,
                showAngleIndicator: false,
                wireframes: false,
                showPerformance: true,
            },
        })

        Render.run(render)

        const runner = Runner.create()
        Runner.run(runner, engine)

        const particleOptions = {
            friction: 0.05,
            frictionStatic: 0.1,
            render: {
                visible: true,
                fillStyle: '#8B4513',
            },
        }

        Composite.add(world, [
            createSoftBody(250, 100, 8, 35, 0, 0, false, 1, particleOptions),
            Bodies.rectangle(250, 400, 120, 30, { isStatic: true, angle: 0.7 }),
            Bodies.rectangle(470, 600, 200, 30, { isStatic: true }),
        ])

        const mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.9,
                    render: {
                        visible: false,
                    },
                },
            })

        Composite.add(world, mouseConstraint)

        render.mouse = mouse

        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 },
        })
    }, [])

    return <div ref={wrapperRef} className={styles.wrapper} />
}
