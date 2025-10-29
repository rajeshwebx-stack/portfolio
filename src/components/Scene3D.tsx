import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingShape = ({ position, shape = 'box' }: { position: [number, number, number], shape?: 'box' | 'sphere' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {shape === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {shape === 'sphere' && <sphereGeometry args={[0.6, 32, 32]} />}
        {shape === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 100]} />}
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
};

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6c63ff" />
        
        <FloatingShape position={[-3, 2, -5]} shape="box" />
        <FloatingShape position={[3, -2, -6]} shape="sphere" />
        <FloatingShape position={[0, 3, -7]} shape="torus" />
        <FloatingShape position={[-4, -3, -8]} shape="sphere" />
        <FloatingShape position={[4, 0, -5]} shape="box" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
