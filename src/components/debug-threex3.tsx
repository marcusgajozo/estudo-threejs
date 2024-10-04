import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import THREEx3 from "three-x3";

const DebugThreex3 = () => {
  const { scene, gl } = useThree(); // Hook do R3F para acessar a cena e o renderizador

  useEffect(() => {
    // Inicializando o THREEx3
    const threex3 = new THREEx3({
      THREE,
      renderer: gl,
      scene: scene,
    });

    threex3.start(); // Inicia o debugger

    return () => {
      threex3.dispose(); // Limpa ao desmontar
    };
  }, [scene, gl]);

  return null; // Não precisa renderizar nada na tela, apenas inicializar o debugger
};

export default DebugThreex3;
