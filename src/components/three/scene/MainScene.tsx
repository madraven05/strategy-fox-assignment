import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import GoldenBayEnvironment from "./environment/GoldenBayEnvironment";
import { PinkRoom } from "../objects/PinkRoom";
import SceneLoader from "../SceneLoader";
import Locomotion from "../engine/Locomotion";
import { Physics } from "@react-three/rapier";
import ProductRaycaster from "../engine/ProductRaycaster";

const MainScene: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, -200, 0] }}>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <Locomotion />
        <ProductRaycaster/>
        <Suspense fallback={<SceneLoader />}>
          <GoldenBayEnvironment />
          <Physics gravity={[0, -98, 0]}>
            <group rotation={[0, Math.PI / 10, 0]} position={[750, -400, -250]}>
              <PinkRoom scale={30} />
            </group>
          </Physics>
        </Suspense>
        
      </Canvas>
    </div>
  );
};

export default MainScene;
