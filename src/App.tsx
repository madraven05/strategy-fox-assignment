import { useMemo } from "react";
import MainScene from "./components/three/scene/MainScene";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";

export enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
}

function App() {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  return (
    <div className="h-screen w-full">
      <KeyboardControls map={map}>
        <MainScene />
      </KeyboardControls>
    </div>
  );
}

export default App;
