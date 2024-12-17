import { Html, useProgress } from "@react-three/drei";
import React from "react";

const SceneLoader: React.FC = () => {
  const {progress} = useProgress();
  return (
    <Html center>
        <div>
            {progress < 100 ? <h1>Loading...{progress.toFixed(2)}%</h1> : null}
        </div>
    </Html>
  );
};

export default SceneLoader;
