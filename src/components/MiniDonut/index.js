import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon"

export default function MiniDonut({ ...props }) {
  const [group] = useBox(() => ({
    args: [0.2, 0.05, 0.2],
    mass: 2,
    ...props
  }))
  const { nodes, materials } = useGLTF('/donut/scene.gltf')
  return (
    <group ref={group} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* <group position={[0, 0, 0]}>
            <mesh geometry={nodes.Donut_2.geometry} material={materials.donut} />
          </group> */}
          <group position={[0, 0, 0]}>
            <mesh castShadow geometry={nodes.Object_4.geometry} material={materials.donut} />
          </group>
          <group position={[0, 0, 0]}>
            <mesh castShadow geometry={nodes.Object_6.geometry} material={materials.icing} />
          </group>
          <group position={[0.077, 0.045, 0.01]} rotation={[1.455, 0.065, 3.01]} scale={0.14}>
            <mesh castShadow geometry={nodes.Object_8.geometry} material={materials.sprinkles_bake} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/donut/scene.gltf')
