import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'

import classes from './index.module.css'
import { Box, Plane } from '../../components'

const Test = () => {
  return (
    <div className={classes.wrapper}>
      <Suspense fallback={<div>Loading</div>}>
        <Canvas>
          <Physics>
            <ambientLight intensity={0.1} />
            <pointLight postion={[10, 10, 10]} />
            <Box position={[1,1,0]} />
            <Box position={[0,1,0]} />
            <Plane />
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  )
}





export default Test