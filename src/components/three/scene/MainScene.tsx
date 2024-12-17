import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import GoldenBayEnvironment from "./environment/GoldenBayEnvironment";
import { PinkRoom } from "../objects/PinkRoom";
import Ground from "../objects/Ground";
import SceneLoader from "../SceneLoader";

const MainScene: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={<SceneLoader/>}>
          <GoldenBayEnvironment />
          <group rotation={[0, Math.PI / 10, 0]} position={[800, -300, -250]}>
            <PinkRoom scale={3000} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MainScene;