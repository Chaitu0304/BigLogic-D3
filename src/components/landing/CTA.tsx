import { useState, useEffect, useRef } from "react";
import { Zap, Clock, ShieldCheck, ArrowRight, FileText, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "./Footer";

export const CTA = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const ySketch = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  
  // Urgency Stateful Countdown Timer
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev; // Countdown ended
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 pb-0 bg-[#0A0A0A] bg-grid-landeros opacity-[1] border-b-0 font-sans-landeros text-white relative overflow-hidden w-full">
      {/* Huge diffused background glow behind the CTA container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-white/[0.015] to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Main Grand Slam Container Card */}
        <div className="bg-[#121212] text-white rounded-[32px] p-4 sm:p-8 md:p-14 shadow-premium-tactile relative overflow-hidden border border-white/10 mb-16">
          
          {/* Glass glows inside the card */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-tr from-white/10 to-white/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-stretch">
            
            {/* Left Column - Urgency & Direct Stack (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left">
              <div>
                {/* Premium Glowing Capsule Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/15 text-xs font-bold text-white tracking-widest mb-6 select-none shadow-[0_1px_1px_rgba(255,255,255,0.05),0_0_15px_rgba(255,255,255,0.02)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent font-tech-landeros uppercase tracking-widest">
                    LIMITED BETA COHORT ONLY
                  </span>
                </div>
                
                {/* Headline with glowing highlights */}
                <motion.h2 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.05] tracking-tight font-display-landeros text-white !text-white flex flex-col items-start gap-1"
                >
                  <span className="overflow-hidden block py-1 -my-1">
                    <motion.span
                      variants={{
                        hidden: { y: "110%" },
                        visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block"
                    >
                      Lock In Your Grand
                    </motion.span>
                  </span>
                  
                  <span className="overflow-hidden block py-1 -my-1">
                    <motion.span
                      variants={{
                        hidden: { y: "110%" },
                        visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block"
                    >
                      <span className="bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent">Slam Offer</span> Before
                    </motion.span>
                  </span>
                  
                  <span className="overflow-hidden block py-1 -my-1">
                    <motion.span
                      variants={{
                        hidden: { y: "110%" },
                        visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block"
                    >
                      The <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(245,158,11,0.15)]">Beta Fills</span>.
                    </motion.span>
                  </span>
                </motion.h2>

                {/* Technical Blueprint Axis Drafting Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0 }}
                  className="h-[1px] w-32 mb-8 bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                />
                
                {/* Micro-Progress Cohort Tracker */}
                <div className="flex flex-col gap-3 mb-10 max-w-xl">
                  <p className="text-lg font-semibold text-[#D9D9D9] leading-relaxed">
                    We are restricting our active cohort to exactly 100 firms to guarantee server speeds and direct support response. <span className="text-white font-bold">87 spots are already claimed.</span>
                  </p>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5 relative shadow-inner">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]" style={{ width: "87%" }} />
                  </div>
                  <div className="flex justify-between text-[9px] font-bold tracking-widest text-[#A3A3A3] font-tech-landeros uppercase select-none">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />87 CLAIMED</span>
                    <span className="flex items-center gap-1 text-amber-400"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />13 SPOTS REMAINING</span>
                  </div>
                </div>
                
                {/* High-Tech Countdown Instrument Panel Mockup */}
                <div className="bg-black/45 backdrop-blur-xl border border-white/10 p-5 rounded-2xl max-w-lg mb-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group">
                  {/* Background overlay details */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] to-transparent pointer-events-none" />
                  
                  <div className="text-left w-full sm:w-auto">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#A3A3A3] font-tech-landeros flex items-center gap-1.5 select-none">
                      <Clock className="w-3 h-3 text-[#A3A3A3]" />
                      BETA COHORT ENROLLMENT DEADLINE:
                    </h4>
                    
                    {/* Glowing clock digits */}
                    <div className="text-3xl font-black text-white mt-3.5 flex items-center gap-2 font-tech-landeros select-none">
                      <div className="flex flex-col items-center">
                        <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl shadow-inner font-mono tracking-tight text-white min-w-[50px] text-center relative overflow-hidden">
                          <div className="absolute top-0 inset-x-0 h-1/2 bg-white/[0.02] border-b border-white/5" />
                          <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]">{timeLeft.hours.toString().padStart(2, '0')}</span>
                        </div>
                        <span className="text-[8px] font-bold text-[#A3A3A3] mt-1 tracking-widest uppercase">HRS</span>
                      </div>
                      <span className="text-xl font-bold text-white/30 -mt-4 animate-pulse">:</span>
                      
                      <div className="flex flex-col items-center">
                        <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl shadow-inner font-mono tracking-tight text-white min-w-[50px] text-center relative overflow-hidden">
                          <div className="absolute top-0 inset-x-0 h-1/2 bg-white/[0.02] border-b border-white/5" />
                          <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                        </div>
                        <span className="text-[8px] font-bold text-[#A3A3A3] mt-1 tracking-widest uppercase">MINS</span>
                      </div>
                      <span className="text-xl font-bold text-white/30 -mt-4 animate-pulse">:</span>
                      
                      <div className="flex flex-col items-center">
                        <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl shadow-inner font-mono tracking-tight text-amber-400 min-w-[50px] text-center relative overflow-hidden">
                          <div className="absolute top-0 inset-x-0 h-1/2 bg-white/[0.02] border-b border-white/5" />
                          <span className="drop-shadow-[0_0_8px_rgba(245,158,11,0.55)]">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                        </div>
                        <span className="text-[8px] font-bold text-amber-400/80 mt-1 tracking-widest uppercase">SECS</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cohort Capacity Stats Block */}
                  <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-5">
                    <span className="text-[8px] font-bold text-[#A3A3A3] tracking-widest uppercase">COHORT CAPACITY</span>
                    <span className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-widest font-tech-landeros animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                      13 SEATS LEFT
                    </span>
                  </div>
                </div>

              </div>

              {/* Certificate-Inspired Double Guarantee Card */}
              <div className="bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[24px] relative max-w-2xl shadow-xl overflow-hidden group hover:border-white/15 transition-colors duration-300">
                {/* Decorative absolute glow overlay */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none" />
                
                <div className="absolute top-3 left-6 px-3 py-1 rounded-full bg-white text-[#0A0A0A] text-[9px] font-bold uppercase tracking-widest font-tech-landeros shadow-md border border-white/10 select-none">
                  THE 10-HOUR DOUBLE GUARANTEE
                </div>
                
                <h3 className="font-tech-landeros text-xl font-bold mb-3 text-white flex items-center gap-2 pt-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]" />
                  Double Your Money Back.
                </h3>
                
                <p className="font-semibold text-sm leading-relaxed text-[#D9D9D9] mb-6">
                  If BigLogicAI does not save your estimating team at least 10 hours in your first 30 days of use, we will not only refund your subscription 100% instantly &mdash; <span className="text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.2)]">we will write you a check for $500 for wasting your time.</span> We take 100% of the risk.
                </p>

                {/* Hand-signed signature section */}
                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest font-tech-landeros text-[#A3A3A3] select-none">
                    LEGAL BINDING CONTRACT
                  </span>
                  <div className="text-right select-none relative">
                    <div className="font-serif italic text-2xl font-semibold text-white tracking-wider font-sans select-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                      
                    </div>
                    <div className="text-[9px] font-bold uppercase text-[#A3A3A3] mt-1 tracking-widest font-tech-landeros">Founder, BigLogicAI</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column - Premium Glass Receipt Invoice (5 cols) */}
            <div className="lg:col-span-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[28px] shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between text-left hover-premium-card z-10 overflow-visible relative group">
              {/* Approved stamp legend effect overlapping the top border */}
              <div className="absolute top-0 left-8 sm:left-12 -translate-y-1/2 border-2 border-emerald-500 bg-[#0A0D0C] text-emerald-400 text-[10px] font-black uppercase px-4 py-1.5 rounded-xl tracking-widest select-none font-tech-landeros shadow-[0_4px_15px_rgba(16,185,129,0.25),_inset_0_1px_1px_rgba(255,255,255,0.1)] z-20 group-hover:scale-105 group-hover:shadow-[0_6px_22px_rgba(16,185,129,0.4)] transition-all duration-300">
                APPROVED PROPOSAL
              </div>
              
              <div>
                {/* Dashed receipt ticket header */}
                <div className="border-b border-dashed border-white/15 pb-4 mb-6 text-center select-none">
                  <h3 className="font-tech-landeros text-lg font-bold text-white tracking-wider">VALUE STACK RECEIPT</h3>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-[#A3A3A3] font-tech-landeros">INVOICE_PROPOSAL_COHORT_2026</span>
                </div>

                {/* Stack items with line highlights */}
                <div className="space-y-4 font-semibold text-xs text-[#D9D9D9]">
                  
                  {/* Item 1 */}
                  <div className="flex justify-between items-center gap-4 py-1.5 px-2.5 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[2.5]" />
                      <span>AI Draw Schedule Agent (10h saved)</span>
                    </span>
                    <span className="font-mono text-white shrink-0">$1,200/mo</span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex justify-between items-center gap-4 py-1.5 px-2.5 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[2.5]" />
                      <span>Deep Material Spec Extractor</span>
                    </span>
                    <span className="font-mono text-white shrink-0">$800/mo</span>
                  </div>

                  {/* Item 3 */}
                  <div className="flex justify-between items-center gap-4 py-1.5 px-2.5 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[2.5]" />
                      <span>Carrier Guideline Auditor</span>
                    </span>
                    <span className="font-mono text-white shrink-0">$1,500/mo</span>
                  </div>

                  {/* Item 4 */}
                  <div className="flex justify-between items-center gap-4 py-1.5 px-2.5 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[2.5]" />
                      <span>Excel Compiler & Firm Brain</span>
                    </span>
                    <span className="font-mono text-white shrink-0">$500/mo</span>
                  </div>

                </div>

                {/* Total price calculation segment */}
                <div className="border-t border-dashed border-white/15 pt-5 mt-6 space-y-3.5">
                  <div className="flex justify-between items-baseline font-bold text-[9px] text-[#A3A3A3] tracking-widest font-tech-landeros select-none">
                     <span>TOTAL ESTIMATED VALUE:</span>
                    <span className="line-through text-[#A3A3A3] font-mono font-bold">$4,000/mo</span>
                  </div>
                  
                  <div className="flex justify-between items-center font-bold font-tech-landeros text-white">
                    <span className="text-sm tracking-widest">YOUR PRICE:</span>
                    <span className="text-emerald-400 text-3xl font-black drop-shadow-[0_0_12px_rgba(52,211,153,0.35)]">$199/mo</span>
                  </div>
                  
                  <div className="text-[9px] font-bold uppercase text-emerald-400 tracking-widest text-center mt-4 bg-emerald-500/5 border border-emerald-500/10 py-2 rounded-full font-tech-landeros select-none shadow-[0_0_10px_rgba(16,185,129,0.02)]">
                    * First 3 Estimates 100% Free &bull; No Card
                  </div>
                </div>

                {/* Highly Realistic Glowing CSS Barcode segment */}
                <div className="flex items-center justify-center gap-[2px] h-10 mt-6 opacity-60 select-none">
                  {[1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1].map((width, idx) => (
                    <div
                      key={idx}
                      className="bg-white h-full"
                      style={{ width: `${width}px` }}
                    />
                  ))}
                </div>
                <div className="text-[9px] font-mono text-center text-[#A3A3A3] tracking-[0.25em] mt-1.5 select-none">
                  * BL-BETA-2026 *
                </div>

              </div>

              {/* Primary Call to Action Buttons */}
              <div className="mt-8 space-y-4">
                <button
                  onClick={() => navigate("/signup")}
                  className="w-full btn-landeros-secondary h-14 text-xs flex items-center justify-center gap-2 group/btn font-tech-landeros uppercase"
                >
                  CLAIM YOUR 3 FREE ESTIMATES <ArrowRight className="w-4 h-4 shrink-0 stroke-[2.5]" />
                </button>
                <div className="text-[9px] text-center font-bold uppercase tracking-widest text-[#A3A3A3] flex items-center justify-center gap-1.5 font-tech-landeros select-none">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  End-To-End AES-256 secure workspace
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Unified Footer nested right here inside the same outer full-width section container */}
        <Footer />

      </div>

      {/* Background Pencil Sketches surrounding the content (Inverted Glowing Chalk blackboard style) */}
      <motion.div
        style={{ y: ySketch, filter: "invert(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.25))" }}
        className="absolute top-[10%] left-[-150px] w-[350px] h-[350px] pointer-events-none z-0 opacity-[0.05] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_house_framing.png"
          alt="House Framing Sketch"
          className="w-full h-full object-contain scale-[1.08]"
         style={{ clipPath: "inset(5%)" }} />
      </motion.div>

      <motion.div
        style={{ y: ySketch, filter: "invert(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.25))" }}
        className="absolute top-[5%] right-[-150px] w-[350px] h-[350px] pointer-events-none z-0 opacity-[0.05] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_blueprint_layout.png"
          alt="Blueprint Layout Sketch"
          className="w-full h-full object-contain scale-[1.08]"
         style={{ clipPath: "inset(5%)" }} />
      </motion.div>

      <motion.div
        style={{ y: ySketch, filter: "invert(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.25))" }}
        className="absolute bottom-[35%] left-[-150px] w-[350px] h-[350px] pointer-events-none z-0 opacity-[0.05] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_construction_truck.png"
          alt="Construction Truck Sketch"
          className="w-full h-full object-contain scale-[1.08]"
         style={{ clipPath: "inset(5%)" }} />
      </motion.div>

      <motion.div
        style={{ y: ySketch, filter: "invert(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.25))" }}
        className="absolute bottom-[25%] right-[-150px] w-[350px] h-[350px] pointer-events-none z-0 opacity-[0.05] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_paint_roller.png"
          alt="Paint Roller Sketch"
          className="w-full h-full object-contain scale-[1.08]"
         style={{ clipPath: "inset(5%)" }} />
      </motion.div>
    </section>
  );
};
