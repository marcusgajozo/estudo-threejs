import { Box, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useState } from "react";
const CustomBox = () => {
  const [position, setPosition] = useState([0, 0, 0]);
  const { forward, backward, leftward, rightward, upward, downward } =
    useKeyboardControls((state) => state);

  const { color, scale } = useControls({
    color: { value: "orange", label: "Cor da Caixa" },
    scale: { value: 1, min: 0.5, max: 3, step: 0.1, label: "Escala" },
  });

  useFrame(() => {
    console.log("entrei");
    setPosition((prev) => {
      const [x, y, z] = prev;
      const speed = 0.1;

      return [
        x + (rightward ? speed : 0) - (leftward ? speed : 0),
        y + (upward ? speed : 0) - (downward ? speed : 0),
        z + (backward ? speed : 0) - (forward ? speed : 0),
      ];
    });
  });

  return (
    <Box position={position} args={[1]} rotation={[Math.PI / 3, 0, 0]}>
      <meshStandardMaterial color={color} />
    </Box>
  );
};

export default CustomBox;
