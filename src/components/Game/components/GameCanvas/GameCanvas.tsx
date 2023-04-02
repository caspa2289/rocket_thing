import { FC, memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import { Scene } from './components/Scene'
import { useSelector } from 'react-redux'
import { selectGameStage } from '../../../../selectors/game'
import { GAME_STAGES } from '../../../../utils/constants'

export const GameCanvas: FC = memo(() => {
    const stage = useSelector(selectGameStage)

    return (
        <Canvas
            shadows
            camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 30, 50] }}
        >
            <Stats showPanel={0} />
            <pointLight intensity={3} position={[0, 10, 3]} />
            {(stage === GAME_STAGES.inProgress ||
                stage === GAME_STAGES.finished) && <Scene />}
        </Canvas>
    )
})
