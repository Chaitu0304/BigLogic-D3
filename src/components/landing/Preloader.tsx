import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "INITIALIZING SYSTEM CORES...",
    "SECURING SOC-2 COMPLIANT ENCRYPTION...",
    "CALIBRATING MODEL PIPELINES...",
    "SYNCING WORKSPACE AGENTS...",
    "SYSTEM READY."
  ];

  // Animate status text changes as progress moves forward
  useEffect(() => {
    if (progress < 25) {
      setStatusIndex(0);
    } else if (progress < 50) {
      setStatusIndex(1);
    } else if (progress < 75) {
      setStatusIndex(2);
    } else if (progress < 95) {
      setStatusIndex(3);
    } else {
      setStatusIndex(4);
    }
  }, [progress]);

  // Handle fake progress incrementing gracefully
  useEffect(() => {
    const totalDuration = 2200; // 2.2 seconds total loading time
    const intervalTime = 22; // increment every 22ms
    const step = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 350); // slight pause at 100% for maximum premium transition feel
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Generate highly randomized cinematic dust particles on mount
  const dustParticles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.8, // 0.8px to 2.8px
      xStart: Math.random() * 100, // percentage left (vw)
      yStart: Math.random() * 80 + 10, // percentage top (vh)
      duration: Math.random() * 8 + 7, // 7s to 15s speed
      delay: Math.random() * -12, // negative delay so particles start scattered on mount
      xOffset: Math.random() * 30 - 15 // horizontal drift
    }));
  }, []);

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.93, filter: "blur(6px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.015,
        filter: "blur(4px)",
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0B0C] overflow-hidden select-none"
    >
      {/* 1. CINEMATIC FLOAT DUST PARTICLES */}
      {dustParticles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            x: `${p.xStart}vw`, 
            y: `${p.yStart}vh`, 
            opacity: 0 
          }}
          animate={{ 
            y: "-10vh",
            x: [`${p.xStart}vw`, `${p.xStart + p.xOffset}vw`],
            opacity: [0, 0.35, 0.35, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            backgroundColor: "rgba(255, 255, 255, 0.22)",
            borderRadius: "50%",
            filter: "blur(0.5px)",
            pointerEvents: "none",
            zIndex: 1
          }}
        />
      ))}

      {/* 2. SUBTLE CINEMATIC VIGNETTE OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_#020202_100%)] pointer-events-none z-10 opacity-80" />

      {/* 3. PREMIUM LUXURY SPATIAL SPOTLIGHT */}
      <motion.div 
        animate={{ 
          scale: [0.95, 1.05, 0.95],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[500px] h-[320px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.035)_0%,_transparent_75%)] blur-[45px] pointer-events-none z-0" 
      />

      {/* 4. BRANDING DESIGN CONTAINER FRAME */}
      <div className="flex flex-col items-center justify-center relative z-20">
        
        {/* Animated sweeps laser axis line */}
        <div className="relative py-3.5 overflow-hidden">
          <motion.div
            initial={{ y: -45, opacity: 0 }}
            animate={{ 
              y: [null, 40, -35],
              opacity: [0, 0.3, 0.4, 0]
            }}
            transition={{ 
              duration: 2.0, 
              delay: 0.3,
              ease: "easeInOut" 
            }}
            className="absolute left-[-20%] right-[-20%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20"
          />

          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center select-none relative"
          >
            {/* White Premium Logo meant for dark backgrounds */}
            <img 
              src="/logo.png" 
              alt="BigLogic" 
              className="h-14 md:h-16 w-auto object-contain drop-shadow-[0_4px_24px_rgba(255,255,255,0.08)] relative z-10"
            />
            {/* Soft ambient white under-glow for the image logo */}
            <motion.div 
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06)_0%,_transparent_70%)] blur-[12px] pointer-events-none z-0"
            />
          </motion.div>
        </div>

        {/* 5. RAZOR-THIN PREMIUM SILVER PROGRESS BAR */}
        <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden mt-6 relative shadow-lg">
          <motion.div
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* 6. TECHNICAL STATUS TICKER */}
        <div className="h-6 flex items-center justify-center mt-3">
          <motion.span
            key={statusIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-[10px] font-bold text-white/40 tracking-[0.16em] font-tech-landeros uppercase select-none"
          >
            {statuses[statusIndex]}
          </motion.span>
        </div>

      </div>
    </motion.div>
  );
};
