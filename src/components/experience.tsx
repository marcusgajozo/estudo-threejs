import { OrbitControls, Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import CustomBox from "./custom-box";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 0]} intensity={1.5} castShadow />
      <pointLight position={[0, 10, 0]} intensity={3} distance={10} />
      <OrbitControls />
      <RigidBody type="dynamic">
        <CustomBox />
      </RigidBody>
      <RigidBody type="dynamic">
        <Sphere position={[-3, 5, 0]} args={[0.5, 16, 12]}>
          <meshStandardMaterial color="blue" />
        </Sphere>
      </RigidBody>

      <RigidBody type="fixed">
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Experience;
