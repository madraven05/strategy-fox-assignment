import { Physics, RigidBody } from "@react-three/rapier";
import React from "react";

const Ground = () => {
  return (
    <Physics>
      <RigidBody colliders="cuboid">
        <mesh position={[20,-100,0]} rotation={[-Math.PI/2, 0,0]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color={"gray"} />
        </mesh>
      </RigidBody>
    </Physics>
  );
};

export default Ground;
