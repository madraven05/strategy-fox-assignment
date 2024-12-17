import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import GoldenBayEnvironment from "./environment/GoldenBayEnvironment";
import { PinkRoom } from "../objects/PinkRoom";
import SceneLoader from "../SceneLoader";
import Locomotion from "../engine/Locomotion";
import { Physics, RigidBody } from "@react-three/rapier";

const MainScene: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, -200, 0] }}>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <Locomotion />
        {/* <OrbitControls /> */}
        <Suspense fallback={<SceneLoader />}>
          <GoldenBayEnvironment />
          <group rotation={[0, Math.PI / 10, 0]} position={[800, -400, -250]}>
            <PinkRoom scale={3000} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MainScene;
