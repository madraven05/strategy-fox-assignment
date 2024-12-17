import { Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { RGBELoader } from "three/examples/jsm/Addons.js";
import MainScene from "../MainScene";
import * as THREE from "three";

const GoldenBayEnvironment: React.FC = () => {
  const goldenBayTexture = useLoader(RGBELoader, "/golden_bay_4k.hdr");
  useEffect(() => {
    goldenBayTexture.mapping = THREE.EquirectangularReflectionMapping;
    goldenBayTexture.generateMipmaps = true;
  }, [goldenBayTexture]);

  return <Environment map={goldenBayTexture} background />;
};

export default GoldenBayEnvironment;
