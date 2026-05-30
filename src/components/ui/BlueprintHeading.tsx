import React from "react";
import { motion } from "framer-motion";

interface BlueprintHeadingProps {
  badge?: React.ReactNode;
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
  align?: "left" | "center" | "right";
  className?: string;
}

export const BlueprintHeading: React.FC<BlueprintHeadingProps> = ({
  badge,
  title,
  subtitle,
  theme = "light",
  align = "center",
  className = "",
}) => {
  const isDark = theme === "dark";
  const words = title.split(" ");

  // Container variants to stagger word slideups
  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  // Individual word variants
  const wordVariants = {
    hidden: {
      y: "110%",
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // apple-grade luxury easing
      },
    },
  };

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} ${className}`}>
      
      {/* 1. Section Badge Capsule (Smooth Fade In + Slide Up) */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border mb-5 font-tech-landeros text-xs font-black uppercase tracking-widest select-none shadow-sm ${
            isDark
              ? "bg-white/5 border-white/10 text-white"
              : "bg-black/5 border-black/10 text-[#0A0A0A]"
          }`}
        >
          {badge}
        </motion.div>
      )}

      {/* 2. Main Title (Word-by-Word Overflow Mask Slide-Up) */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={titleContainerVariants}
        className={`font-display-landeros text-3xl md:text-5xl lg:text-[3.25rem] font-black uppercase tracking-tighter leading-[1.05] flex flex-wrap gap-x-3 gap-y-1 mb-5 ${
          isDark ? "text-white" : "text-[#0A0A0A]"
        } ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"}`}
      >
        {words.map((word, idx) => (
          <span key={idx} className="overflow-hidden inline-block py-1 -my-1">
            <motion.span
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>

      {/* 3. Technical Blueprint Axis Drafting Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: align === "center" ? 0.5 : align === "right" ? 1 : 0 }}
        className={`h-[1px] w-32 mb-6 ${
          isDark ? "bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.4)]" : "bg-black/10"
        }`}
      />

      {/* 4. Subtitle / Description (Smooth Delay Fade In + Slide Up) */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`font-bold text-xs md:text-sm uppercase tracking-widest max-w-xl leading-relaxed ${
            isDark ? "text-neutral-400" : "text-[#6B6B6B]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}

    </div>
  );
};
