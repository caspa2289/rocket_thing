import { createRef, useMemo } from 'react'
import {
    RapierRigidBody,
    useSphericalJoint,
    Vector3Array,
} from '@react-three/rapier'
import { ShitNugget } from '../ShitNugget'

export const Shit = (props: { length: number; position: Vector3Array }) => {
    const { length, position } = props

    //TODO: разобраться чо за ебала с типами у рапиры
    const Joint = ({ a, b }: { a: any; b: any }) => {
        useSphericalJoint(a, b, [
            [-0.5, 0, 0],
            [0.5, 0, 0],
        ])
        return null
    }

    const refs = useMemo(
        () => Array.from({ length }).map(() => createRef<RapierRigidBody>()),
        [length]
    )

    const nuggets = refs.map((ref, i) => (
        <>
            <ShitNugget
                width={1}
                length={2}
                ref={ref}
                key={i + 'nugget'}
                position={[
                    i % 5 === 0 ? -1 : 0,
                    i % 5 === 0 ? -1 : 1,
                    i % 5 === 0 ? -1 : 0,
                ]}
                type="dynamic"
            />
            {i > 0 && <Joint a={ref} b={refs[i - 1]} key={i + 'joint'} />}
        </>
    ))

    return <group position={position}>{nuggets}</group>
}
