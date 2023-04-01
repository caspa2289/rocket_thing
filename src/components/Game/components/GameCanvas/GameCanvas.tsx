import { FC, memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import { Scene } from './components/Scene'

export const GameCanvas: FC = memo(() => {
    return (
        <Canvas
            shadows
            camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 30, 50] }}
        >
            <Stats showPanel={0} />
            <pointLight intensity={3} position={[0, 10, 3]} />
            <Scene />
        </Canvas>
    )
})
