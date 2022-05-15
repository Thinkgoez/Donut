import { usePlane } from "@react-three/cannon"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"

const Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [1, -2, -1]
  }))
  const stone = useLoader(TextureLoader, '/stone.jpg',)

  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10, 10]} />
      <meshStandardMaterial map={stone} />
    </mesh>
  )
}

export default Plane