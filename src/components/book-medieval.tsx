import { useGLTF } from "@react-three/drei";

const BoxMedieval = () => {
  const { scene } = useGLTF("./book.gltf");
  return <primitive object={scene} />;
};

export default BoxMedieval;
