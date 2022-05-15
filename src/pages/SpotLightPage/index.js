import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Plane, SpotLight } from '@react-three/drei'
import { useControls } from 'leva'
// import { AxesHelper } from 'three';

import { Donut } from '../../components'
import classes from './index.module.css'

const SpotLightPage = () => {
  const { angle, penumbra, intensity, positionX, positionY, positionZ } = useControls({
    angle: {
      value: 0.1,
      min: 0,
      max: 1,
      step: 0.01,
    },
    penumbra: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
    intensity: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
    positionX: {
      value: 3,
      min: 0,
      max: 10,
      step: 0.1,
    },
    positionY: {
      value: 3,
      min: 0,
      max: 10,
      step: 0.1,
    },
    positionZ: {
      value: 0,
      min: 0,
      max: 10,
      step: 0.1,
    }
  })
  return (
    <div className={classes.wrapper}>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          {/* <ambientLight /> */}
          {/* <primitive object={new AxesHelper(10)} /> */}
          {/* <pointLight position={[10, 10, 10]} /> */}
          {/* <Donut scale={10} /> */}
          <Plane receiveShadow rotation-x={-Math.PI / 2} args={[100, 100]} position={[0, -1, 0]}>
            <meshPhongMaterial color={'grey'} />
          </Plane>
          <SpotLight penumbra={penumbra} position={[positionX, positionY, positionZ]} intensity={intensity} angle={angle} color={'red'} />
          <mesh>
            <boxGeometry args={[2,2,2]} />
            <meshPhongMaterial />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  )
}


export default SpotLightPage