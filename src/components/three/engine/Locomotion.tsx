import { KeyboardControlsEntry, useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Controls } from "../../../App";
import { useKeyboard } from "./hooks/useKeyboard";
import { useMouseInput } from "./hooks/useMouseInput";
import { clamp, lerp } from "three/src/math/MathUtils.js";

const Locomotion: React.FC = () => {
  const { camera, gl } = useThree();

  const keyboardInput = useKeyboard();
  const mouseInput = useMouseInput();

  const speed = 150.0;
  let phi = 0.0;
  let theta = 0.0;
  const pitch = new THREE.Quaternion();
  const yaw = new THREE.Quaternion();
  const gaze = new THREE.Quaternion();
  const yAxis = new THREE.Vector3(0, 1, 0);
  const xAxis = new THREE.Vector3(1, 0, 0);

  const handleCameraLocomotion = (delta: number): void => {
    const direction = new THREE.Vector3();

    direction.z -= keyboardInput["w"] ? 1 : 0;
    direction.z += keyboardInput["s"] ? 1 : 0;
    direction.x -= keyboardInput["a"] ? 1 : 0;
    direction.x += keyboardInput["d"] ? 1 : 0;

    direction.normalize();

    if (direction.length() > 0) {
      const moveDist = speed * delta;

      const rotationMatrix = new THREE.Matrix4();
      rotationMatrix.extractRotation(camera.matrix);

      const forwardMotion = new THREE.Vector3(0, 0, 1);
      const rightwardMotion = new THREE.Vector3(1, 0, 0);

      camera.position.add(forwardMotion.multiplyScalar(direction.z * moveDist).applyQuaternion(yaw));
      camera.position.add(
        rightwardMotion.multiplyScalar(direction.x * moveDist).applyQuaternion(yaw)
      );
    }
  };

  const updateCameraOrientation = ([x, y]: [x: number, y: number]) => {
    const cameraSpeed = 3.0;
    const step = 0.3;
    phi = lerp(phi, -x * cameraSpeed, step);
    theta = lerp(theta, -y * cameraSpeed, step);
    theta = clamp(theta, -Math.PI / 2, Math.PI / 2);
    yaw.setFromAxisAngle(yAxis, phi);
    pitch.setFromAxisAngle(xAxis, theta);
    gaze.multiplyQuaternions(yaw, pitch).normalize();
  };

  useFrame((state, delta) => {
    const [mouseX, mouseY] = [
      mouseInput.x / window.innerWidth,
      mouseInput.y / window.innerHeight,
    ];
    updateCameraOrientation([mouseX, mouseY]);
    camera.quaternion.copy(gaze);

    handleCameraLocomotion(delta);
  });

  return null;
};

export default Locomotion;
