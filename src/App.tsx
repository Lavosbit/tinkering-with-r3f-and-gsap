import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Box from './Box';

gsap.registerPlugin(ScrollTrigger);

const camera = new THREE.PerspectiveCamera();
camera.position.z = 8;

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: 'window', // Use 'window' as the trigger
    start: '800px center', // Adjust as needed
    end: '1600px center', // Adjust as needed
    markers: true, // Show markers for debugging
    scrub: true,
  },
});

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      tl.to(camera.position, {
        duration: 1,
        x: '+=2',
        z: '-=2',
      });

    }, 1000)

    
  }, []);

  return (
    <Canvas camera={camera}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 2, 0]} intensity={5} />

      <Box camera={camera} tl={tl} />
    </Canvas>
  );
}