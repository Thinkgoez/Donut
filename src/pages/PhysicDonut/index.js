import React, { Suspense } from 'react'
import { MeshReflectorMaterial, OrbitControls } from '@react-three/drei'
import { Physics, usePlane } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber'
import { AxesHelper } from 'three';

import { Donut, MiniDonut } from '../../components'
import classes from './index.module.css'

const positionGenerator = () => {
  const y = getRandomArbitrary(3, 20)
  const x = getRandomArbitrary(-5, 5)
  return [x, y, 0]
}
const rotationGenerator = () => {
  const x = getRandomArbitrary(-5, 5)
  return [x, 0, 0]
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const PhysicDonut = () => {
  const donutCount = Array(100).fill(0)
  return (
    <div className={classes.wrapper}>
      <Canvas>
        <Suspense fallback={null}>
          <Physics>
            <OrbitControls />
            {/* <primitive object={new AxesHelper(10)} /> */}
            <Donut scale={10} position={[0, 1, 0]} />
            {donutCount.map(() => (
              <MiniDonut position={positionGenerator()} rotation={rotationGenerator()} />
            ))}
            {/* <GroundPlane /> */}
            <Floor position={[0, -1, 0]} rotation={[-Math.PI / 2 + 0.3, 0, 0]} />
            <BackDrop />
            <KeyLight brightness={5.6} color={"#ffc9f9"} />
            <FillLight brightness={2.6} color={"#bdefff"} />
            <RimLight rotation={[0, 180, 0]} position={[-10, 4, 0]} brightness={54} color={"red"} />
            <RimLight rotation={[0, 12, 0]} position={[1, 4, 1]} brightness={54} color={"#e49b0f"} />
            <RimLight rotation={[12.5, 0, 0]} position={[-10, 4, 0]} brightness={40} color={"#4fb63d"} />
          </Physics>
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
  const [ref] = usePlane(() => ({
    rotation: [5, 0, 0], // [-Math.PI / 2, 0, 0],
    position: [0, -1, 0]
  }))
  return (
    <mesh ref={ref} receiveShadow>
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
function Floor(props) {
  const [ref] = usePlane(() => ({ type: 'Static', ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[500, 500]} />
      <MeshReflectorMaterial
        color="#878790"
        blur={[400, 400]}
        resolution={1024}
        mixBlur={1}
        mixStrength={3}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </mesh>
  )
}

export default PhysicDonut