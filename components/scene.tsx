import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Model } from "./model";

export default function Scene() {
  return (
    <Canvas>
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
      <ambientLight intensity={Math.PI / 2} />
      <Model />
      <Environment preset="sunset" />
      <PerspectiveCamera makeDefault position={[0, 0, 13]} />
    </Canvas>
  );
}
