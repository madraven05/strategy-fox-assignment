import React, { ReactNode, useEffect, useRef } from "react";
import { Layers } from "../engine/Layers";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

interface ProductLayerProps {
  name?: string;
  children: ReactNode;
}

const ProductLayer: React.FC<ProductLayerProps> = ({ name, children }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  const layerId = Layers.PRODUCTS;
  useEffect(() => {
    camera.layers.enable(layerId);
    if (groupRef.current) {
        groupRef.current.traverse((child) => {
          child.layers.set(layerId);
          child.name = name as string;
        });
      }

    return () => {
      if (groupRef.current) {
        groupRef.current.layers.disable(layerId);
      }
    };
  }, [camera, layerId]);

  return (
    <group  name={name} ref={groupRef}>
      {children}
    </group>
  );
};

export default ProductLayer;
