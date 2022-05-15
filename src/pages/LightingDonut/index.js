import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { AxesHelper } from 'three';

import { Donut } from '../../components'
import classes from './index.module.css'

const LightingDonut = () => {
  return (
    <div className={classes.wrapper}>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          {/* <primitive object={new AxesHelper(10)} /> */}
          <Donut scale={10} />
          <GroundPlane />
          <BackDrop />
          <KeyLight brightness={5.6} color={"#ffc9f9"} />
          <FillLight brightness={2.6} color={"#bdefff"} />
          <RimLight rotation={[0, 180, 0]} position={[-10, 4, 0]} brightness={54} color={"red"} />
          <RimLight rotation={[0, 12, 0]} position={[1, 4, 1]} brightness={54} color={"#e49b0f"} />
          <RimLight rotation={[12.5, 0, 0]} position={[-10, 4, 0]} brightness={40} color={"#4fb63d"} />
        </Suspense>
      </Canvas>
    </div>
  )
}

function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}
function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}

function RimLight({ brightness, color, position = [], rotation = [] }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={position}
      rotation={rotation}
      castShadow
    />
  );
}

function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

export default LightingDonut