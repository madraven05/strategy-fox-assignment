import { useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";

export const useMouseInput = () => {
  const mouse = useMemo<{ x: number; y: number }>(() => ({ x: 0, y: 0 }), []);
  const {gl} = useThree();
  useEffect(() => {
    const handleMouseMovement = (e: MouseEvent) => {
      const { movementX, movementY } = e;
      if (document.pointerLockElement === gl.domElement) {
        mouse.x += movementX;
        mouse.y += movementY;
      }
    };

    const captureMouseMovement = () => {
      gl.domElement.requestPointerLock();
    };

    document.addEventListener("mousemove", handleMouseMovement);
    document.addEventListener("click", captureMouseMovement);

    return () => {
      document.removeEventListener("mousemove", handleMouseMovement);
      document.removeEventListener("click", captureMouseMovement);
    };
  }, []);

  return mouse;
};
