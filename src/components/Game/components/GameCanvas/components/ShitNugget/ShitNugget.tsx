import { forwardRef } from 'react'
import {
    BallCollider,
    interactionGroups,
    RapierRigidBody,
    RigidBody,
    RigidBodyTypeString,
    Vector3Array,
} from '@react-three/rapier'
import { Euler } from 'three'
import { Capsule } from '@react-three/drei'

export interface IShitNuggetProps {
    position: Vector3Array
    type: RigidBodyTypeString
    width: number
    length: number
}

export const ShitNugget = forwardRef<RapierRigidBody, IShitNuggetProps>(
    ({ position, type, width, length }, ref) => (
        <RigidBody gravityScale={2} ref={ref} type={type} position={position}>
            <Capsule
                args={[width, length]}
                rotation={new Euler(0, 0, Math.PI / 2)}
            >
                <meshStandardMaterial color={0x4e3524} />
            </Capsule>
            <BallCollider
                solverGroups={interactionGroups(1, [1, 2])}
                onContactForce={(payload) => {
                    if (
                        payload.collider.solverGroups() !==
                        payload.target.collider.solverGroups()
                    ) {
                        payload.target.rigidBody?.setBodyType(2, false)
                    }
                }}
                frictionCombineRule={2}
                args={[length * 0.43]}
            />
        </RigidBody>
    )
)
