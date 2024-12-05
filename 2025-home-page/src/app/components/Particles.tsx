"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ParticleEffect = () => {
  const [particles, setParticles] = useState<Array<Particle>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 30 }, () => ({
      id: Math.random(),
      x: Math.random() * 100, // Random horizontal position
      y: Math.random() * 100, // Random vertical position
      size: Math.random() * 10 + 2, // Random size between 2 and 10px
      duration: Math.random() * 3 + 2, // Random duration between 2 and 5 seconds
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full h-screen  overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.y}vh`,
            left: `${particle.x}vw`,
            boxShadow: `0 0 10px 2px rgba(51, 102, 255, 0.8), 
            0 0 20px 5px rgba(51, 102, 255, 0.5), 
            0 0 30px 10px rgba(51, 102, 255, 0.3)`,
          }}
          animate={{
            opacity: [0, 1, 0], // Fade in and out
            scale: [1, 1.5, 1], // Subtle scaling effect
          }}
          transition={{
            duration: particle.duration, // Randomized duration for each particle
            repeat: Infinity, // Loop forever
            repeatType: "loop", // Smooth looping
            delay: Math.random() * 3, // Random delay for staggering
          }}
        />
      ))}
    </div>
  );
};

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export default ParticleEffect;
