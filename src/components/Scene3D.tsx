import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  shape: 'box' | 'sphere' | 'torus' | 'octahedron';
  color: string;
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const FloatingShape = ({ position, shape, color, mousePosition, scrollY }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      
      // Mouse parallax effect
      const parallaxX = (mousePosition.x - 0.5) * 0.5;
      const parallaxY = (mousePosition.y - 0.5) * 0.5;
      
      // Scroll parallax effect
      const scrollOffset = scrollY * 0.001;
      
      meshRef.current.position.x = position[0] + parallaxX - scrollOffset * 0.3;
      meshRef.current.position.y = position[1] + parallaxY + scrollOffset * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        {shape === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {shape === 'sphere' && <sphereGeometry args={[0.6, 32, 32]} />}
        {shape === 'torus' && <torusGeometry args={[0.6, 0.25, 16, 100]} />}
        {shape === 'octahedron' && <octahedronGeometry args={[0.7, 0]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shapes: Array<{
    position: [number, number, number];
    shape: 'box' | 'sphere' | 'torus' | 'octahedron';
    color: string;
  }> = [
    { position: [-4, 3, -8], shape: 'box', color: '#ffffff' },
    { position: [4, -2, -10], shape: 'sphere', color: '#cccccc' },
    { position: [0, 4, -12], shape: 'torus', color: '#ffffff' },
    { position: [-5, -3, -9], shape: 'octahedron', color: '#e5e5e5' },
    { position: [5, 2, -11], shape: 'box', color: '#d4d4d4' },
    { position: [-3, -4, -13], shape: 'sphere', color: '#ffffff' },
    { position: [3, 5, -7], shape: 'torus', color: '#cccccc' },
  ];

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#e5e5e5" />
      
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position}
          shape={shape.shape}
          color={shape.color}
          mousePosition={mousePosition}
          scrollY={scrollY}
        />
      ))}
    </>
  );
};

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/5" />
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
};
