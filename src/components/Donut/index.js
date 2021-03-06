/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: ¡Jacques (https://sketchfab.com/iJacques)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/donut-20-8d6cac74abfc4b408ec86c37661fa5a6
title: Donut 2.0
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';

export default function Donut({ ...props }) {
  useThree(({camera}) => {
    camera.rotation.set(0, 0, -0.3);
  })
  const group = useRef()
  const { nodes, materials } = useGLTF('/donut/scene.gltf')
  useFrame(() => {
    group.current.rotation.z += 0.01;
    group.current.rotation.x += 0.01;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.donut} />
          </group>
          <group position={[0, 0, 0]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.icing} />
          </group>
          <group position={[0.077, 0.045, 0.01]} rotation={[1.455, 0.065, 3.01]} scale={0.14}>
            <mesh geometry={nodes.Object_8.geometry} material={materials.sprinkles_bake} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/donut/scene.gltf')
