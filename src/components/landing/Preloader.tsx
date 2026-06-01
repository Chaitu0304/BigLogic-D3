import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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

  const logoLetters = Array.from("BigLogic");

  // Logo spring animation parameters
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { 
      y: 35, 
      opacity: 0, 
      filter: "blur(5px)",
      scale: 0.95
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 13
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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FCFBFE] overflow-hidden select-none select-none"
    >
      {/* 1. TACTILE STUDIO WATERMARK BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02]">
        <div className="absolute inset-0 bg-grid-premium" />
      </div>

      {/* 2. PREMIUM LUXURY GREY SPOTLIGHT */}
      {/* Centered directly behind the brand elements to establish a highly aesthetic contrast core */}
      <motion.div 
        animate={{ 
          scale: [0.93, 1.03, 0.93],
          opacity: [0.65, 0.85, 0.65]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[450px] h-[300px] bg-[radial-gradient(circle_at_center,_rgba(120,120,120,0.18)_0%,_transparent_70%)] blur-[40px] pointer-events-none z-0" 
      />

      {/* 3. SHIELD CORE DESIGN FRAME */}
      <div className="flex flex-col items-center justify-center relative z-10">
        
        {/* Soft Sparkle Core */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center justify-center w-10 h-10 rounded-full border border-black/5 bg-black/5 text-[#0A0A0A] shadow-sm relative"
        >
          <Sparkles className="w-4 h-4 text-[#0A0A0A]" />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="absolute inset-0 rounded-full border border-black/20"
          />
        </motion.div>

        {/* 4. SPRINGreveal TEXT BRANDING LOGO & TITLE */}
        <div className="relative py-2.5 overflow-hidden">
          {/* Laser sweeps vertically once during the letter reveal */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ 
              y: [null, 25, -20],
              opacity: [0, 0.4, 0.5, 0]
            }}
            transition={{ 
              duration: 1.6, 
              delay: 0.5,
              ease: "easeInOut" 
            }}
            className="absolute left-[-20%] right-[-20%] h-[1.5px] bg-gradient-to-r from-transparent via-[#0A0A0A]/40 to-transparent pointer-events-none z-10"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display-landeros text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-0.5 text-[#0A0A0A] select-none"
          >
            {/* Split "BigLogic" into staggered character blocks */}
            {logoLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}

            {/* Title / Suffix Splicer "AI" */}
            <motion.span
              initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.65, duration: 0.6, ease: "easeOut" }}
              className="text-[#3A3A3A] drop-shadow-[0_0_12px_rgba(10,10,10,0.12)] ml-0.5"
            >
              AI
            </motion.span>
          </motion.div>
        </div>

        {/* 5. RAZOR-THIN PREMIUM STATUS PROGRESS BAR */}
        <div className="w-48 h-[1.5px] bg-black/5 rounded-full overflow-hidden mt-6 relative shadow-sm">
          <motion.div
            className="h-full bg-[#0A0A0A]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* 6. MICRO-TECHNICAL STATUS TICKER */}
        <div className="h-6 flex items-center justify-center mt-3">
          <motion.span
            key={statusIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-[10px] font-bold text-[#6B6B6B] tracking-[0.16em] font-tech-landeros uppercase select-none"
          >
            {statuses[statusIndex]}
          </motion.span>
        </div>

      </div>
    </motion.div>
  );
};
