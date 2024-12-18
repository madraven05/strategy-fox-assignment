import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Layers } from "./Layers";
import { Html } from "@react-three/drei";

const ProductRaycaster: React.FC = () => {
  const { camera, scene } = useThree();
  const raycaster = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const [points, setPoints] = useState<[THREE.Vector3, THREE.Vector3]>([
    camera.position.clone(),
    new THREE.Vector3(),
  ]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredName, setIsHoveredName] = useState<string>("");
  const rayLength = 400;

  useFrame(() => {
    const pointer = new THREE.Vector2(0, 0);

    raycaster.current.layers.set(Layers.PRODUCTS);
    raycaster.current.setFromCamera(pointer, camera);
    raycaster.current.far = rayLength;

    const intersects = raycaster.current.intersectObjects(scene.children);
    setPoints([
      camera.position.clone(),
      raycaster.current.ray.direction.multiplyScalar(rayLength),
    ]);

    if (intersects.length > 0) {
      const object = intersects[0].object;
      const worldPos = new THREE.Vector3();
      object.getWorldPosition(worldPos);
      setPoints([camera.position.clone(), worldPos]);
      setIsHovered(true);
      setIsHoveredName(intersects[0].object.name);
    } else {
      setIsHovered(false);
      setIsHoveredName("");
    }
  });

  return (
    <>
      {isHovered ? (
        <Html position={points[1]} center>
          <div className="z-10 flex flex-col w-64 p-2 bg-white rounded-md text-center font-mono items-center border-2 border-black justify-center">
            <p className="font-semibold">{hoveredName}</p>
            <p className="text-sm">Please don't touch any item.</p>
          </div>
        </Html>
      ) : null}
      */
    </>
  );
};

export default ProductRaycaster;
