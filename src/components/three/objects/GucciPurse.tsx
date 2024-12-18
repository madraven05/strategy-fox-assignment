/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 gucci_purse.glb -t -o GucciPurse.tsx 
Author: Ziaraallman_3D (https://sketchfab.com/Ziaraallman)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gucci-purse-1f6ee73edf1b4dbe9ceb40daae3951fc
Title: Gucci Purse
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh;
  };
  materials: {
    lambert1: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

export function GucciPurse(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/gucci_purse.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.06} rotation={[0, 0, 0]}>
        <RigidBody type="dynamic" colliders="cuboid">
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.lambert1}
            rotation={[0, Math.PI / 2, 0]}
          />
        </RigidBody>
      </group>
    </group>
  );
}

useGLTF.preload("/gucci_purse.glb");