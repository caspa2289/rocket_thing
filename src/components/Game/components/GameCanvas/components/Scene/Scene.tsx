import { FC, memo, Suspense, useState } from 'react'
import { Physics, RigidBody } from '@react-three/rapier'
import { Euler } from 'three'
import { Box, Plane } from '@react-three/drei'
import { Shit } from '../Shit'
import { useFrame } from '@react-three/fiber'
// import { Diarrhea } from '../Diarrhea'
// import { Bowl } from '../Bowl'

export const Scene: FC = memo(() => {
    const [length, setLength] = useState(1)

    const [isShitting, setIsShitting] = useState(true)

    useFrame(() => {
        if (!isShitting) return

        setTimeout(() => {
            setLength(length + 1)
        }, 30)

        if (length >= 100) {
            setIsShitting(false)
        }
    })

    return (
        <Suspense>
            <Physics colliders={false}>
                <RigidBody
                    type="fixed"
                    colliders="cuboid"
                    position={[0, -1, 0]}
                    rotation={new Euler(Math.PI / 2, 0, 0)}
                >
                    <Plane args={[1000, 1000]} material-color="red" />
                </RigidBody>
                <Shit position={[0, 25, 0]} length={length} />
                {/*WIP*/}
                {/*<Diarrhea amount={12} />*/}
                {/*<Bowl />*/}
                <Box
                    material-color="hotpink"
                    args={[2, 2, 2]}
                    position={[0, 26, -4]}
                />
            </Physics>
        </Suspense>
    )
})
