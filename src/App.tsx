import BoxMedieval from "@/components/book-medieval";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas style={{ height: window.innerHeight }}>
      <OrbitControls />
      <Sky />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <BoxMedieval />
    </Canvas>
  );
};

export default App;
