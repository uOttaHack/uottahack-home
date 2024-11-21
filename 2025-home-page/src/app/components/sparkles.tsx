"use client";
import { useEffect, useState } from "react";
import React from "react";
import { motion } from "motion/react";
import Sparkly from "@/app/assets/Vector.svg"; // Ensure SVG is imported correctly

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}
export default function Sparkle() {
  const [sparkle, setSparkle] = useState<Array<Sparkle>>([]);

  useEffect(() => {
    // Generate an array of random sparkles
    const newParticles = Array.from({ length: 5 }, () => ({
      id: Math.random(),
      x: Math.random() * 100, // Random x position (0-100vw)
      y: Math.random() * 100, // Random y position (0-100vh)
      delay: Math.random() * 2, // Random size (20px to 60px)
      size: 40,
    }));
    setSparkle(newParticles); // Generate 20 sparkles
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {sparkle.map((sparkle) => (
        <motion.svg
          className="rounded-full"
          key={sparkle.id}
          xmlns="http://www.w3.org/2000/svg"
          width="132"
          height="136"
          viewBox="0 0 132 136"
          fill="none"
          style={{
            position: "absolute",
            top: `${sparkle.y}vh`,
            left: `${sparkle.x}vw`,
            width: `${sparkle.size}px`, // Dynamic size
            height: `${sparkle.size}px`, // Dynamic size
          }}
          animate={{
            scale: [1, 2], // Grow and shrink
            opacity: [1, 0], // Fade out
          }}
          transition={{
            duration: 5, // Animation duration
            repeat: Infinity, // Infinite repeat
            delay: sparkle.delay, // Random delay for staggered effect
          }}
        >
          {/* Outer Radial Path */}

          {/* Inner Path */}
          <path
            filter="url(#glow)"
            d="M31.9816 68.1045C60.4619 71.6923 63.5978 74.5939 67.4752 100.947C71.3527 74.5939 74.4884 71.6923 102.969 68.1045C74.4884 64.5166 71.3527 61.615 67.4752 35.2617C63.5978 61.615 60.4619 64.5166 31.9816 68.1045Z"
            fill="#d4b0ff"
          />
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="400%" height="400%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </motion.svg>
      ))}
    </div>
  );
}
