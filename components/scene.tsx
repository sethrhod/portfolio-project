import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  Html
} from "@react-three/drei";
import { Model } from "./Shuma-gorath";
import { Suspense } from "react";

function Loader() {
  return (
    <Html center>
      <h1>Loading...</h1>
      <img src="/portfolio-project/loading.gif" alt="loading" />
    </Html>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ zoom: 5 }}>
      <Suspense fallback={<Loader />}>
        <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
        <ambientLight intensity={Math.PI / 2} />
        <Model />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
