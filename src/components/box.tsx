const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry />
      <meshLambertMaterial attach="material" color="green" />
    </mesh>
  );
};

export default Box;
