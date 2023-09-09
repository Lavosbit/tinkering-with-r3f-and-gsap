import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Box({ camera, tl }) {
    const meshRef = useRef<THREE.Mesh>(null); // Use Mesh type and set initial value to null 

    useFrame(() => {
        if (meshRef.current) {
            camera.lookAt(meshRef.current.position);
            tl.to(meshRef.current.position, {
                x: '-=1'
            })
        }
    })

    return (
        <mesh rotation={[-2, 1, 1]} ref={(meshRef as React.MutableRefObject<THREE.Mesh>)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshNormalMaterial/>
        </mesh>
    )
}