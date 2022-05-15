import React, { Suspense } from 'react'
import { OrbitControls, SpotLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { AxesHelper } from 'three';

import { Donut } from '../../components'
import classes from './index.module.css'

const DonutPage = () => {
  return (
    <div className={classes.wrapper}>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          {/* <ambientLight /> */}
          <pointLight position={[10, 10, 10]} />
          {/* <primitive object={new AxesHelper(10)} /> */}
          <SpotLight penumbra={0.5} position={[1, 2, 0]} intensity={0.5} angle={0.6} color={'red'} />
          <SpotLight penumbra={0.5} position={[-1, 2, 0]} intensity={0.5} angle={0.6} color={'green'} />
          <SpotLight penumbra={0.5} position={[0, 2, 1]} intensity={0.5} angle={0.6} color={'yellow'} />
          <Donut scale={10} />
        </Suspense>
      </Canvas>
    </div>
  )
}


export default DonutPage