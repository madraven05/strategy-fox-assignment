import { useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";

export const useKeyboard = (): Record<string, boolean> => {
  const { gl } = useThree();
  const keyboard = useMemo<Record<string, boolean>>(() => ({}), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.pointerLockElement === gl.domElement) {
        keyboard[e.key] = true;
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => (keyboard[e.key] = false);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl]);

  return keyboard;
};
