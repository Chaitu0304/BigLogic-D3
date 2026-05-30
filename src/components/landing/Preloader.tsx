import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("INITIALIZING DRAFTING INFRASTRUCTURE...");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const loadingStates = [
    { threshold: 0, text: "CONNECTING TO SECURE NEURAL INFRASTRUCTURE..." },
    { threshold: 20, text: "PARSING RECONSTRUCTION SCHEMATICS LAYERS..." },
    { threshold: 45, text: "STABILIZING COMPLIANCE MATRIX INTEGRITY..." },
    { threshold: 70, text: "CONFIGURING DEEP MATERIAL EXTRACTION AGENTS..." },
    { threshold: 90, text: "ESTABLISHING CALM OPERATOR PIPELINE..." }
  ];

  useEffect(() => {
    let currentProgress = 0;
    
    // Smooth progressive ticking
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8) + 2; 
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      const activeState = [...loadingStates]
        .reverse()
        .find(state => currentProgress >= state.threshold);
      if (activeState) {
        setLoadingText(activeState.text);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // 60FPS Cinematic Floating Dust Particles Canvas Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);
    
    // Create dust particle pool
    const particleCount = 28;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      vy: number;
      vx: number;
      pulseSpeed: number;
      pulseDir: number;
    }> = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.8 + 0.4, // ultra faint, tiny specks
        opacity: Math.random() * 0.12 + 0.03, // faint opacities
        vy: -(Math.random() * 0.15 + 0.05), // drift up slowly
        vx: Math.random() * 0.1 - 0.05, // minor horizontal sway
        pulseSpeed: Math.random() * 0.005 + 0.002,
        pulseDir: Math.random() > 0.5 ? 1 : -1
      });
    }
    
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        // Update positions
        p.y += p.vy;
        p.x += p.vx;
        
        // Pulse opacity slightly to simulate dust catches light
        p.opacity += p.pulseSpeed * p.pulseDir;
        if (p.opacity > 0.18) {
          p.pulseDir = -1;
        } else if (p.opacity < 0.02) {
          p.pulseDir = 1;
        }
        
        // Reset boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10 || p.x > width + 10) {
          p.vx = -p.vx;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.1)";
        ctx.shadowBlur = 1;
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.01,
        filter: "blur(12px)",
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[9999] bg-[#0B0B0C] flex flex-col items-center justify-center font-sans-landeros text-white select-none pointer-events-auto overflow-hidden w-full h-full"
    >
      {/* 1. CINEMATIC LUXURY BACKDROP: Dust Canvas, Vignette, Spotlights */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />
      <div className="absolute inset-0 bg-grid-landeros opacity-[0.015] pointer-events-none z-5" />
      
      {/* Subtle gold key breathing lights */}
      <motion.div 
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_35%_35%,_rgba(255,255,255,0.035)_0%,_transparent_55%)] pointer-events-none z-0"
      />
      
      {/* Subtle Cinematic Vignette Overlay (Dark edges focused to center) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(6,6,6,0.92)_100%)] pointer-events-none z-15" />

      {/* 2. CENTERED CINEMATIC VIDEO (Crisp limit protecting resolution) */}
      <div className="absolute inset-0 w-full h-full z-10 overflow-hidden flex items-center justify-center pointer-events-none">
        <video
          src="/vid_mp_ (online-video-cutter.com).mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full max-w-[85vw] max-h-[68vh] md:max-w-[800px] md:max-h-[530px] object-contain opacity-95 z-20"
          poster="/logo-icon.png"
        />
      </div>

      {/* 3. OVERLAID LOWER TELEMETRY (Percentage displays shifted down) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center w-full max-w-sm px-6 text-center pointer-events-none z-30 gap-3">
        
        {/* Thin Glowing Gold Progress Tube */}
        <div className="w-56 h-[2.5px] bg-white/5 rounded-full overflow-hidden relative shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.65)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Boot Progress Log Output */}
        <div className="font-tech-landeros text-[8.5px] font-bold tracking-widest text-neutral-400 uppercase h-4 min-w-[280px] select-none opacity-85">
          {loadingText}
        </div>

        {/* Monospaced Progress Percentage (Positioned at bottom anchor) */}
        <div className="font-mono text-3xl font-light text-white tracking-widest min-w-[120px] select-none mt-0.5">
          <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent font-light drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            {progress}%
          </span>
        </div>

      </div>
    </motion.div>
  );
};
