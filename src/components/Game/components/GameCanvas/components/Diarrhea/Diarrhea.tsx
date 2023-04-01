import { FC, useMemo } from 'react'
import {
    InstancedRigidBodies,
    InstancedRigidBodyProps,
    interactionGroups,
} from '@react-three/rapier'
import { Euler } from 'three'

interface IDiarrheaProps {
    amount: number
}

export const Diarrhea: FC<IDiarrheaProps> = (props) => {
    const { amount } = props

    const instances = useMemo(() => {
        const instances: InstancedRigidBodyProps[] = []

        for (let i = 0; i < amount; i++) {
            instances.push({
                key: 'instance_' + Math.random(),
                position: [0, 0, 0],
                rotation: new Euler(Math.PI / 4, Math.PI / 4, Math.PI / 2),
            })
        }

        return instances
    }, [])

    return (
        <InstancedRigidBodies
            instances={instances}
            colliders="ball"
            position={[0, 25, 0]}
            solverGroups={interactionGroups(3, [2, 3, 4])}
        >
            <instancedMesh args={[undefined, undefined, amount]} count={amount}>
                <meshStandardMaterial color="hotpink" />
                <sphereGeometry args={[0.5]} />
            </instancedMesh>
        </InstancedRigidBodies>
    )
}
