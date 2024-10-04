import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import Experience from "./components/experience";
import { KeyboardControls } from "@react-three/drei";

const App = () => {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w"] },
        { name: "backward", keys: ["ArrowDown", "s"] },
        { name: "leftward", keys: ["ArrowLeft", "a"] },
        { name: "rightward", keys: ["ArrowRight", "d"] },
        { name: "upward", keys: ["Space"] },
        { name: "downward", keys: ["Shift"] },
      ]}
    >
      <Canvas shadows camera={{ position: [10, 10, -10], fov: 30 }}>
        <Suspense>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  );
};

export default App;
