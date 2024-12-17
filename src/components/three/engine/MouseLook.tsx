import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

const MouseLook: React.FC = () => {
  const { camera, gl } = useThree();

  const pitch = useRef<number>(0);
  const yaw = useRef<number>(-Math.PI / 2);

  useEffect(() => {
    const sensitivity = 0.002;
    const onMouseMovement = (event: MouseEvent) => {
      const movementX = event.movementX || 0;
      const movementY = event.movementY || 0;

      yaw.current -= movementX * sensitivity;
      pitch.current -= movementY * sensitivity;

      pitch.current = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, pitch.current)
      );

      camera.rotation.set(pitch.current, yaw.current, 0, "YXZ");
    };

    document.addEventListener("mousemove", onMouseMovement);

    return () => {
      document.removeEventListener("mousemove", onMouseMovement);
    };
  }, [camera, gl]);

  return null;
};

export default MouseLook;
