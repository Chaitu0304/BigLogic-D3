import { useRef } from "react";
import { Upload, Cpu, DollarSign, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ScrollReveal, ScrollRevealChild } from "../ui/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlueprintHeading } from "@/components/ui/BlueprintHeading";

export const HowItWorks = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const ySketch = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const steps = [
    {
      num: "01",
      icon: Upload,
      title: "Upload The Estimate",
      description: "Drag and drop any standard PDF estimate or ESX file directly into the secure portal. Zero manual mapping or pre-formatting is required.",
      badge: "Supports PDF & ESX",
      sketch: "/sketch_zero_complexity_upload.png",
    },
    {
      num: "02",
      icon: Cpu,
      title: "Agents Go To Work",
      description: "Our Gemini-powered agents parse the estimate, extract hidden material items, verify carrier compliance, and build the lender-draw schedules.",
      badge: "Average time: 45 seconds",
      sketch: "/sketch_zero_complexity_agents.png",
    },
    {
      num: "03",
      icon: DollarSign,
      title: "Submit & Get Paid",
      description: "Download ready-to-use, professional Excel spreadsheets, draw schedules, and carrier-ready compliance audit files to accelerate funding.",
      badge: "Draws cleared in 48 hours",
      sketch: "/sketch_zero_complexity_paid.png",
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-premium-luxury-gradient-alt bg-grid-landeros border-b border-black/5 font-sans-landeros text-[#0A0A0A] relative overflow-hidden">
      {/* Accent Glow */}
      <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-black/3 to-transparent rounded-full blur-[100px] pointer-events-none" />
 
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <BlueprintHeading
          badge={<span>ZERO COMPLEXITY</span>}
          title="FROM PDF UPLOAD TO APPROVED LENDER DRAWS. IN 3 STEPS."
          subtitle="No long training programs. No complicated configurations. Just drop your file, watch the agents extract the details, and cash out draws immediately."
          align="left"
          className="mb-20 max-w-4xl text-left"
        />
 
        {/* Timeline Grid */}
        <ScrollReveal stagger={true} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
          {/* Connector lines on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 border-t border-dashed border-black/10 z-0 -translate-y-12" />
 
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollRevealChild key={index} className="h-[380px] flex relative z-10">
                {/* 3D Card Flip Container */}
                <div className="group w-full h-full [perspective:1500px]">
                  <div 
                    className="relative w-full h-full transition-transform [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                    style={{
                      transitionDuration: "800ms",
                      transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.1)"
                    }}
                  >
                    
                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full bg-white border border-black/5 p-8 rounded-3xl flex flex-col justify-between [backface-visibility:hidden] z-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div>
                        {/* Step Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-[#F0F0F0] border border-black/5 flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-white transition-all duration-300 shadow-sm">
                            <Icon className="w-6 h-6 stroke-[2]" />
                          </div>
                          <span className="font-display-landeros text-3xl font-black text-black/20 group-hover:text-[#0A0A0A] transition-colors">{step.num}</span>
                        </div>
       
                        {/* Title */}
                        <h3 className="font-tech-landeros text-xl font-bold mb-4 text-[#0A0A0A]">
                          {step.title}
                        </h3>
       
                        {/* Description */}
                        <p className="font-semibold text-sm leading-relaxed text-[#6B6B6B]">
                          {step.description}
                        </p>
                      </div>
       
                      {/* Badge Tag */}
                      <div className="mt-4 pt-4 border-t border-black/5">
                        <span className="inline-block px-3 py-1 bg-black/5 border border-black/10 rounded-full text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
                          {step.badge}
                        </span>
                      </div>
                    </div>

                    {/* Back Face (Sketch Reveal) */}
                    <div className="absolute inset-0 w-full h-full bg-[#FCFCFC] border border-black/10 p-3 pb-4 rounded-3xl flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden shadow-md">
                      {/* Subtle Grid overlay */}
                      <div className="absolute inset-0 bg-grid-landeros opacity-[0.25] pointer-events-none" />
                      
                      {/* Decorative step number watermark */}
                      <div className="absolute top-4 right-6 text-black/[0.03] font-display-landeros text-7xl font-black select-none pointer-events-none">
                        {step.num}
                      </div>

                      {/* Sketch Container */}
                      <div className="relative flex-1 w-full flex items-center justify-center min-h-0">
                        <img 
                          src={step.sketch} 
                          alt={step.title}
                          className="max-w-[95%] max-h-[92%] object-contain select-none pointer-events-none mix-blend-multiply opacity-[0.85] transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>

                      {/* Subtle caption */}
                      <div className="relative z-10 text-center">
                        <span className="text-[11.5px] font-bold tracking-widest text-black/40 uppercase font-sans-landeros">
                          {step.title}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollRevealChild>
            );
          })}
        </ScrollReveal>
 
        {/* Dynamic CTA box at bottom */}
        <ScrollReveal direction="up" delay={200} className="mt-16 text-center">
          <button
            onClick={() => navigate("/signup")}
            className="btn-landeros-primary h-14 px-8 text-sm inline-flex items-center gap-2 text-black"
          >
            CLAIM YOUR 3 FREE UPLOADS <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </ScrollReveal>
 
      </div>

      {/* Background Pencil Sketches surrounding the content closer to content, larger, and more opaque */}
      <motion.div
        style={{ 
          y: ySketch,
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
        }}
        className="absolute bottom-[5%] left-[-100px] lg:left-[-150px] w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] pointer-events-none z-0 mix-blend-multiply opacity-[0.14] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_pdf_upload_cloud.png"
          alt="PDF Upload Cloud Sketch"
          className="w-full h-full object-contain scale-[1.08] drop-shadow-[2px_6px_12px_rgba(0,0,0,0.1)]"
          style={{ clipPath: "inset(5%)" }} />
      </motion.div>

      <motion.div
        style={{ 
          y: ySketch,
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
        }}
        className="absolute top-[5%] right-[-80px] lg:right-[30px] w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] pointer-events-none z-0 mix-blend-multiply opacity-[0.14] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_ai_processor_gears.png"
          alt="AI Processor Gears Sketch"
          className="w-full h-full object-contain scale-[1.08] drop-shadow-[2px_6px_12px_rgba(0,0,0,0.1)]"
          style={{ clipPath: "inset(5%)" }} />
      </motion.div>

      <motion.div
        style={{ 
          y: ySketch,
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
        }}
        className="absolute bottom-[3%] right-[-80px] lg:right-[-30px] w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] pointer-events-none z-0 mix-blend-multiply opacity-[0.14] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_draw_payout_chart.png"
          alt="Draw Payout Chart Sketch"
          className="w-full h-full object-contain scale-[1.08] drop-shadow-[2px_6px_12px_rgba(0,0,0,0.1)]"
          style={{ clipPath: "inset(5%)" }} />
      </motion.div>

      <motion.div
        style={{ 
          y: ySketch,
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
        }}
        className="absolute top-[-1%] left-[-80px] lg:left-[-150px] w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] pointer-events-none z-0 mix-blend-multiply opacity-[0.1] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_cleared_draws_calendar.png"
          alt="Cleared Draws Calendar Sketch"
          className="w-full h-full object-contain scale-[1.08] drop-shadow-[2px_6px_12px_rgba(0,0,0,0.1)]"
          style={{ clipPath: "inset(5%)" }} />
      </motion.div>
    </section>
  );
};
