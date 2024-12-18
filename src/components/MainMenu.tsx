import { Html, useProgress } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

const MainMenu: React.FC = () => {
  const { gl } = useThree();
  const { progress } = useProgress();

  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const capturePointerLock = () => {
      if (gl.domElement !== document.pointerLockElement && !showMenu) {
        gl.domElement.requestPointerLock();
      }
    };

    gl.domElement.addEventListener("click", capturePointerLock);

    return () => {
      document.removeEventListener("click", capturePointerLock);
    };
  }, [gl,showMenu]);

  const handleEnterStore = () => {
    setShowMenu(false);
    gl.domElement.requestPointerLock();
  };

  return (
    <Html center>
      {showMenu && progress === 100 ? (
        <div className="flex flex-col gap-3 p-10 w-96 items-center text-center justify-center bg-white rounded-lg border-2 border-black">
          <h1 className="text-2xl">Welcome to our retail store!</h1>
          <button
            onClick={handleEnterStore}
            className="bg-pink-300 p-2 rounded-lg shadow-md"
          >
            Enter store!
          </button>
        </div>
      ) : null}
    </Html>
  );
};

export default MainMenu;
