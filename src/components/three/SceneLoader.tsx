import { Html, useProgress } from "@react-three/drei";
import React from "react";

const SceneLoader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      {progress <= 100 ? (
        <div>
          <div className="bg-black/10 w-40 h-40 p-2 rounded-lg shadow-lg flex flex-col gap-3 items-center justify-center">
            <p className="font-semibold">Loading scene</p>
            <p className="text-sm">{progress.toFixed(2)}%</p>
            <div className={`w-full h-2 rounded-md bg-gray-300 flex`}>
              <div className={`h-full bg-teal-500 rounded-md`} style={{width: `${progress.toFixed(2)}%`}} />
            </div>
          </div>
        </div>
      ) : null}
    </Html>
  );
};

export default SceneLoader;
