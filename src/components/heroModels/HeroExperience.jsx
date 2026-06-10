import { OrbitControls, Float, Text, MeshDistortMaterial, Sphere, Box, Cylinder, Torus } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { useRef } from 'react'
import * as THREE from 'three'
import HeroLights from './HeroLights'
import Particles from './Particles'

// Animated floating desk scene — custom, no external GLB
const Monitor = () => {
  const screenRef = useRef()
  useFrame(({ clock }) => {
    if (screenRef.current) {
      screenRef.current.material.emissiveIntensity = 0.6 + Math.sin(clock.elapsedTime * 1.5) * 0.15
    }
  })
  return (
    <group>
      {/* Monitor stand */}
      <Box args={[0.15, 0.6, 0.15]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Box>
      {/* Monitor base */}
      <Box args={[0.8, 0.08, 0.4]} position={[0, -0.82, 0]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Box>
      {/* Monitor bezel */}
      <Box args={[2.4, 1.5, 0.12]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color="#111122" />
      </Box>
      {/* Screen glow */}
      <Box ref={screenRef} args={[2.15, 1.28, 0.02]} position={[0, 0.3, 0.07]}>
        <meshStandardMaterial
          color="#0d1b4b"
          emissive="#3a6cf4"
          emissiveIntensity={0.6}
          toneMapped={false}
        />
      </Box>
      {/* Code lines on screen */}
      {[0.7, 0.45, 0.2, -0.05, -0.3].map((y, i) => (
        <Box key={i} args={[1.2 - i * 0.1, 0.05, 0.01]} position={[-0.2 + i * 0.05, y * 0.55 + 0.3, 0.085]}>
          <meshStandardMaterial color={i % 2 === 0 ? "#4fc3f7" : "#a5d6a7"} emissive={i % 2 === 0 ? "#4fc3f7" : "#a5d6a7"} emissiveIntensity={1} />
        </Box>
      ))}
    </group>
  )
}

const Desk = () => (
  <group>
    {/* Desk surface */}
    <Box args={[4.5, 0.12, 2]} position={[0, -1, 0]}>
      <meshStandardMaterial color="#2d1b00" roughness={0.6} metalness={0.1} />
    </Box>
    {/* Desk legs */}
    {[[-2, -2.2, -0.8], [2, -2.2, -0.8], [-2, -2.2, 0.8], [2, -2.2, 0.8]].map(([x, y, z], i) => (
      <Box key={i} args={[0.12, 2.4, 0.12]} position={[x, y, z]}>
        <meshStandardMaterial color="#1a1000" />
      </Box>
    ))}
  </group>
)

const Keyboard = () => (
  <group position={[0, -0.9, 0.6]}>
    <Box args={[1.4, 0.06, 0.5]}>
      <meshStandardMaterial color="#1a1a2e" roughness={0.5} />
    </Box>
    {/* Key rows */}
    {[-0.15, -0.05, 0.05, 0.15].map((z, ri) =>
      Array.from({ length: 10 }).map((_, ci) => (
        <Box key={`${ri}-${ci}`} args={[0.1, 0.04, 0.08]} position={[-0.6 + ci * 0.13, 0.05, z]}>
          <meshStandardMaterial color="#2a2a4e" />
        </Box>
      ))
    )}
  </group>
)

const FloatingOrbs = () => {
  const group = useRef()
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.elapsedTime * 0.3
    }
  })
  return (
    <group ref={group}>
      {[
        { pos: [2.8, 1.2, -1], color: "#3a6cf4", size: 0.18 },
        { pos: [-2.6, 0.8, -0.5], color: "#8b5cf6", size: 0.14 },
        { pos: [1.8, 2.2, 0.5], color: "#06b6d4", size: 0.12 },
        { pos: [-1.5, 1.8, 1], color: "#10b981", size: 0.10 },
      ].map(({ pos, color, size }, i) => (
        <Float key={i} speed={2 + i} rotationIntensity={0.5} floatIntensity={0.8}>
          <Sphere args={[size, 16, 16]} position={pos}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} toneMapped={false} />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Canvas camera={{ position: [0, 1, 10], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={18}
        minDistance={5}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
      />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 4, 2]} intensity={1.5} color="#3a6cf4" />
      <pointLight position={[-3, 2, 3]} intensity={0.8} color="#8b5cf6" />
      <HeroLights />
      <Particles count={80} />
      <group scale={isMobile ? 0.55 : 0.82} position={[0, -1, 0]}>
        <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.25}>
          <Monitor />
        </Float>
        <Desk />
        <Keyboard />
        <FloatingOrbs />
      </group>
    </Canvas>
  )
}

export default HeroExperience
