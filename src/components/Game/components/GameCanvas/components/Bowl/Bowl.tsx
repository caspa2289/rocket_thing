import { FC } from 'react'
import { Cone } from '@react-three/drei'
import { interactionGroups, RigidBody } from '@react-three/rapier'
import { Euler } from 'three'

export const Bowl: FC = () => {
    return (
        <RigidBody
            frictionCombineRule={2}
            type="fixed"
            colliders="trimesh"
            position={[0, 5, 0]}
            friction={1000}
            solverGroups={interactionGroups(2, [1])}
        >
            <Cone
                args={[20, 20, undefined, undefined, true]}
                rotation={new Euler(0, 0, Math.PI)}
            />
        </RigidBody>
    )
}
