import { useBox } from "@react-three/cannon"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"

const Box = ({...props}) => {
  const [ref] = useBox(() => ({
    postion: [0,5,0],
    mass: 1,
    ...props
  }))
  const crate = useLoader(TextureLoader, 'crate.gif')

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial map={crate} />
    </mesh>
  )
}

export default Box