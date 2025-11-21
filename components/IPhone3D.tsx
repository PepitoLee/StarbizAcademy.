
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Html, OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

// --- 3D MODEL COMPONENT ---
const Model = ({ powerState, onPowerOn }: { powerState: string; onPowerOn: () => void }) => {
  const group = useRef<THREE.Group>(null);

  // Materials
  const titaniumMaterial = new THREE.MeshStandardMaterial({
    color: "#2F4452", // Blue Titanium
    metalness: 1,
    roughness: 0.2,
  });

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: "#000000",
    metalness: 0.9,
    roughness: 0.05,
    transmission: 0.1, // slight transparency
    thickness: 1,
  });

  const screenMaterial = new THREE.MeshStandardMaterial({
    color: "#000000",
    roughness: 0.2,
    metalness: 0.8,
    emissive: powerState === 'on' ? new THREE.Color("#ffffff") : new THREE.Color("#000000"),
    emissiveIntensity: powerState === 'on' ? 0.5 : 0,
  });

  // Lens Material
  const lensMaterial = new THREE.MeshPhysicalMaterial({
    color: "#111",
    metalness: 0.5,
    roughness: 0,
    transmission: 0,
    reflectivity: 1,
    clearcoat: 1
  });

  return (
    <group ref={group} dispose={null} onClick={onPowerOn}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* CHASSIS (Rounded Box) */}
        {/* Width: 3.2, Height: 6.8, Depth: 0.35 (approx ratio) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.2, 6.8, 0.35]} />
          <primitive object={titaniumMaterial} attach="material" />
        </mesh>

        {/* SCREEN (Front Glass) */}
        <mesh position={[0, 0, 0.18]}>
          <planeGeometry args={[3.05, 6.65]} />
          <primitive object={screenMaterial} attach="material" />
        </mesh>

        {/* DYNAMIC ISLAND (Capsule) */}
        <mesh position={[0, 3.1, 0.181]} rotation={[0, 0, 0]}>
           <capsuleGeometry args={[0.12, 0.6, 4, 8]} />
           <meshBasicMaterial color="#000" />
           {/* Fix rotation to lie flat on screen */}
           <group rotation={[0, 0, Math.PI / 2]}>
             {/* Actually capsule geometry is vertical by default, rotate Z 90 */}
           </group>
        </mesh>
        {/* Simpler Island for now: Cylinder/Box */}
        <mesh position={[0, 3.1, 0.185]}>
           <boxGeometry args={[0.8, 0.22, 0.01]} />
           <meshBasicMaterial color="#000" />
        </mesh>


        {/* BACK GLASS (Matte) */}
        <mesh position={[0, 0, -0.18]}>
          <planeGeometry args={[3.05, 6.65]} />
          <meshStandardMaterial color="#2F4452" roughness={0.6} metalness={0.4} />
        </mesh>

        {/* CAMERA BUMP (Rounded Box) */}
        <mesh position={[1.0, 2.6, -0.2]} rotation={[0, 0, 0]}>
           <boxGeometry args={[1.3, 1.4, 0.1]} />
           <meshStandardMaterial color="#2A3C48" roughness={0.4} metalness={0.6} />
        </mesh>

        {/* LENSES (Cylinders) */}
        {/* Top */}
        <mesh position={[1.0, 2.9, -0.28]} rotation={[Math.PI/2, 0, 0]}>
           <cylinderGeometry args={[0.35, 0.35, 0.1, 32]} />
           <primitive object={lensMaterial} attach="material" />
           {/* Ring */}
           <mesh position={[0, -0.02, 0]}>
             <cylinderGeometry args={[0.38, 0.38, 0.08, 32]} />
             <meshStandardMaterial color="#555" metalness={1} roughness={0.3} />
           </mesh>
        </mesh>
        {/* Bottom */}
        <mesh position={[1.0, 2.3, -0.28]} rotation={[Math.PI/2, 0, 0]}>
           <cylinderGeometry args={[0.35, 0.35, 0.1, 32]} />
           <primitive object={lensMaterial} attach="material" />
           <mesh position={[0, -0.02, 0]}>
             <cylinderGeometry args={[0.38, 0.38, 0.08, 32]} />
             <meshStandardMaterial color="#555" metalness={1} roughness={0.3} />
           </mesh>
        </mesh>
        {/* Side */}
        <mesh position={[0.5, 2.6, -0.28]} rotation={[Math.PI/2, 0, 0]}>
           <cylinderGeometry args={[0.35, 0.35, 0.1, 32]} />
           <primitive object={lensMaterial} attach="material" />
           <mesh position={[0, -0.02, 0]}>
             <cylinderGeometry args={[0.38, 0.38, 0.08, 32]} />
             <meshStandardMaterial color="#555" metalness={1} roughness={0.3} />
           </mesh>
        </mesh>

        {/* HTML UI OVERLAY (Screen Content) */}
        <Html
           transform
           wrapperClass="htmlScreen"
           distanceFactor={3.2} // Adjust scale
           position={[0, 0, 0.19]}
           style={{
             width: '305px',
             height: '665px',
             background: powerState === 'off' ? '#000' : '#000',
             borderRadius: '40px',
             overflow: 'hidden',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             justifyContent: 'center',
             pointerEvents: 'none'
           }}
        >
           {/* SCREEN CONTENT */}
           {powerState === 'off' && (
             <div className="w-full h-full flex flex-col items-center justify-center text-white">
                <h1 className="text-6xl font-bold opacity-30 font-mono">09:41</h1>
                <p className="opacity-20 mt-2 text-xl">Tap to Wake</p>
             </div>
           )}
           
           {powerState === 'booting' && (
             <div className="w-full h-full bg-black flex items-center justify-center">
                <svg viewBox="0 0 384 512" width="80" fill="white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
             </div>
           )}

           {powerState === 'on' && (
             <div className="w-full h-full bg-black relative">
                <img src="/images/ceo-junior.png" className="w-full h-full object-cover opacity-80" />
                <div className="absolute top-20 left-0 w-full text-center text-white">
                   <h2 className="text-3xl font-bold">StarbizApp</h2>
                   <p className="text-brand-cyan">Welcome Leader</p>
                </div>
             </div>
           )}
        </Html>

      </Float>
    </group>
  );
};

// --- MAIN SCENE COMPONENT ---
const IPhone3D: React.FC<{ powerState: string; onPowerOn: () => void }> = ({ powerState, onPowerOn }) => {
  return (
    <div className="w-full h-[700px] cursor-move">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }} shadows dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* HDRI Environment for realistic reflections */}
        <Environment preset="city" />

        <Model powerState={powerState} onPowerOn={onPowerOn} />
        
        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  );
};

export default IPhone3D;
