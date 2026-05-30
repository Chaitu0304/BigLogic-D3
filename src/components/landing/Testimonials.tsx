import { useRef } from "react";
import { ShieldCheck, Quote } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlueprintHeading } from "../ui/BlueprintHeading";

const Premium3DStar = ({ index = 0 }: { index?: number }) => {
  const delays = [
    "delay-0",
    "delay-75",
    "delay-150",
    "delay-200",
    "delay-300"
  ];
  
  const rotations = [
    "group-hover:rotate-[6deg]",
    "group-hover:rotate-[-4deg]",
    "group-hover:rotate-[8deg]",
    "group-hover:rotate-[-6deg]",
    "group-hover:rotate-[10deg]"
  ];

  return (
    <svg 
      className={`w-[17px] h-[17px] drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.18)] filter shrink-0 transition-all duration-500 ease-out group-hover:scale-[1.45] group-hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.28)] ${delays[index]} ${rotations[index]}`}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Light facet gold gradient */}
        <linearGradient id="gold-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3C4" />
          <stop offset="50%" stopColor="#FBCA67" />
          <stop offset="100%" stopColor="#D98A1A" />
        </linearGradient>
        
        {/* Dark facet gold gradient (creates chiseled 3D contrast) */}
        <linearGradient id="gold-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E39C20" />
          <stop offset="50%" stopColor="#AB7013" />
          <stop offset="100%" stopColor="#694202" />
        </linearGradient>
      </defs>
      
      {/* Point 1 (Top) */}
      <path d="M12 2 L9 9.5 L12 12 Z" fill="url(#gold-light)" />
      <path d="M12 2 L12 12 L15 9.5 Z" fill="url(#gold-dark)" />
      
      {/* Point 2 (Right) */}
      <path d="M22 9 L15 9.5 L12 12 Z" fill="url(#gold-light)" />
      <path d="M22 9 L12 12 L16 14.5 Z" fill="url(#gold-dark)" />
      
      {/* Point 3 (Bottom Right) */}
      <path d="M18 20 L16 14.5 L12 12 Z" fill="url(#gold-light)" />
      <path d="M18 20 L12 12 L12 17 Z" fill="url(#gold-dark)" />
      
      {/* Point 4 (Bottom Left) */}
      <path d="M6 20 L12 17 L12 12 Z" fill="url(#gold-light)" />
      <path d="M6 20 L12 12 L8 14.5 Z" fill="url(#gold-dark)" />
      
      {/* Point 5 (Left) */}
      <path d="M2 9 L8 14.5 L12 12 Z" fill="url(#gold-light)" />
      <path d="M2 9 L12 12 L9 9.5 Z" fill="url(#gold-dark)" />
    </svg>
  );
};

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const ySketch = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const proof = [
    {
      metric: "Draw cycles cut from 38 days to 4 days.",
      quote: "We had over $1.2M in outstanding lender draws choked in bank inspection cycles. BigLogic's AI Draw Scheduler parsed our Xactimate files and mapped them perfectly to bank milestones. We had the cash in our bank in 4 days. Absolutely life-changing for cash flow.",
      author: "Greg S.",
      role: "CEO, Apex Restoration",
      location: "Dallas, Texas",
      verified: true
    },
    {
      metric: "Saved 18 hours of PM review per project.",
      quote: "Deep material extraction used to take our Project Managers hours of manual reading. BigLogic isolates homeowner cabinetry, flooring, and paint specs instantly. We've eliminated all purchasing errors and completely freed up our team to focus on site execution.",
      author: "Mark T.",
      role: "COO, Titan Reconstruction",
      location: "Orlando, Florida",
      verified: true
    },
    {
      metric: "99.8% compliance rate. Zero carrier pushbacks.",
      quote: "We were skeptical about using AI for carrier-facing documents. But BigLogic's auditor engine is trained exactly on the top 10 insurance guidelines. We have processed 120+ estimates in 6 months without a single compliance rejection.",
      author: "Sarah D.",
      role: "Principal Adjuster, Elite Claims",
      location: "Sacramento, California",
      verified: true
    },
    {
      metric: "Overhead reduced by 72% within 30 days.",
      quote: "We were drowning in paperwork and had to hire third-party coordinators just to keep up with the spreadsheet mapping. BigLogic automated our entire backend in a single day. Our overhead is down 72%, and our PMs are back in the field.",
      author: "Dan K.",
      role: "Managing Director, Ironclad Builders",
      location: "Charlotte, North Carolina",
      verified: true
    },
    {
      metric: "Avoided $45k in material purchasing mistakes.",
      quote: "In reconstruction, estimate specs are buried in hundreds of PDF pages. We used to miss homeowner window or flooring choices all the time. BigLogic's Deep material extractor pulls everything instantly. We haven't had a single purchasing mistake since.",
      author: "Robert L.",
      role: "Founder, Guardian Restoration",
      location: "Denver, Colorado",
      verified: true
    },
    {
      metric: "One operator now manages 45 active rebuilds.",
      quote: "Before BigLogic, we needed three full-time coordinators to manage bank draws and insurance folders for our files. Now, our single office manager runs the entire Reconstruction Pipeline with ease. It's a complete game-changer for scaling.",
      author: "Jessica M.",
      role: "Director of Operations, Rebuild Pros",
      location: "Phoenix, Arizona",
      verified: true
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-premium-luxury-gradient bg-grid-premium border-b border-black/5 font-sans-landeros text-[#0A0A0A] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-black/3 to-black/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header */}
        <BlueprintHeading
          badge={<span>CLIENT EVIDENCE BOARD</span>}
          title="Bold Claims. Backed By Specific Proof."
          subtitle="We don't deal in vague promises. Here is the exact data and direct feedback from active restoration owners operating commercial and residential operations."
          align="left"
          className="mb-20 max-w-4xl text-left"
        />

        {/* Testimonials Infinite Marquee */}
        <ScrollReveal direction="up" delay={150} className="w-full">
          <div className="overflow-hidden relative marquee-fade-mask w-full py-4 select-none hover-pause">
            <div className="flex w-max">
              {/* Strip 1 */}
              <div className="flex gap-6 animate-marquee shrink-0 pr-6">
                {proof.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-b from-white to-[#FAF9F6] border border-black/[0.06] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-3xl flex flex-col justify-between relative overflow-visible w-[380px] h-[380px] shrink-0 group hover:border-black/[0.16] hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2.5 transition-all duration-500 ease-out"
                  >
                    {/* Giant Watermark Quote Decoration */}
                    <div className="absolute top-6 right-8 text-black/[0.015] z-0 transition-colors group-hover:text-black/[0.035] pointer-events-none">
                      <Quote className="w-16 h-16 fill-current rotate-180" />
                    </div>

                    <div className="relative z-10 text-left">
                      {/* Stars */}
                      <div className="flex items-center gap-1.5 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Premium3DStar key={i} index={i} />
                        ))}
                      </div>

                      {/* Big Metric Callout */}
                      <h3 className="font-tech-landeros text-sm md:text-base font-black mb-4 text-[#0A0A0A] leading-snug border-b border-black/[0.06] pb-3 tracking-tight">
                        "{item.metric}"
                      </h3>

                      {/* Testimonial Quote */}
                      <p className="font-semibold text-xs leading-relaxed text-[#3A3A3A] line-clamp-6">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center justify-between border-t border-black/[0.05] pt-4 mt-auto bg-[#F5F5F3]/50 -mx-8 -mb-8 p-6 rounded-b-[24px] relative z-10">
                      <div className="text-left">
                        <h4 className="font-bold text-xs text-[#0A0A0A] font-tech-landeros">{item.author}</h4>
                        <p className="text-[10px] font-bold text-[#6B6B6B] mt-0.5">{item.role}</p>
                        <p className="text-[9px] font-bold text-[#6B6B6B] uppercase font-tech-landeros mt-0.5">{item.location}</p>
                      </div>
                      {item.verified && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-black/10 text-[9px] font-bold uppercase tracking-wider text-[#0A0A0A] shrink-0 shadow-sm">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          <span>VERIFIED</span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Strip 2 (Duplicated) */}
              <div className="flex gap-6 animate-marquee shrink-0 pr-6" aria-hidden="true">
                {proof.map((item, index) => (
                  <div 
                    key={`dup-${index}`} 
                    className="bg-gradient-to-b from-white to-[#FAF9F6] border border-black/[0.06] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-3xl flex flex-col justify-between relative overflow-visible w-[380px] h-[380px] shrink-0 group hover:border-black/[0.16] hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2.5 transition-all duration-500 ease-out"
                  >
                    {/* Giant Watermark Quote Decoration */}
                    <div className="absolute top-6 right-8 text-black/[0.015] z-0 transition-colors group-hover:text-black/[0.035] pointer-events-none">
                      <Quote className="w-16 h-16 fill-current rotate-180" />
                    </div>

                    <div className="relative z-10 text-left">
                      {/* Stars */}
                      <div className="flex items-center gap-1.5 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Premium3DStar key={i} index={i} />
                        ))}
                      </div>

                      {/* Big Metric Callout */}
                      <h3 className="font-tech-landeros text-sm md:text-base font-black mb-4 text-[#0A0A0A] leading-snug border-b border-black/[0.06] pb-3 tracking-tight">
                        "{item.metric}"
                      </h3>

                      {/* Testimonial Quote */}
                      <p className="font-semibold text-xs leading-relaxed text-[#3A3A3A] line-clamp-6">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center justify-between border-t border-black/[0.05] pt-4 mt-auto bg-[#F5F5F3]/50 -mx-8 -mb-8 p-6 rounded-b-[24px] relative z-10">
                      <div className="text-left">
                        <h4 className="font-bold text-xs text-[#0A0A0A] font-tech-landeros">{item.author}</h4>
                        <p className="text-[10px] font-bold text-[#6B6B6B] mt-0.5">{item.role}</p>
                        <p className="text-[9px] font-bold text-[#6B6B6B] uppercase font-tech-landeros mt-0.5">{item.location}</p>
                      </div>
                      {item.verified && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-black/10 text-[9px] font-bold uppercase tracking-wider text-[#0A0A0A] shrink-0 shadow-sm">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          <span>VERIFIED</span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Background Pencil Sketches surrounding the content closer to content, larger, and more opaque */}
      <motion.div
        style={{ y: ySketch }}
        className="absolute bottom-[-10%] left-[-80px] lg:left-[-140px] w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] pointer-events-none z-0 mix-blend-multiply opacity-[0.15] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_testimonial_agreement.png"
          alt="Testimonial Agreement Sketch"
          className="w-full h-full object-contain scale-[1.08] drop-shadow-[2px_6px_12px_rgba(0,0,0,0.15)]"
         style={{ clipPath: "inset(5%)" }} />
      </motion.div>

      <motion.div
        style={{ y: ySketch }}
        className="absolute top-[1%] right-[-80px] lg:right-[20px] w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] pointer-events-none z-0 mix-blend-multiply opacity-[0.2] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_testimonial_stars.png"
          alt="Testimonial Stars Sketch"
          className="w-full h-full object-contain scale-[1.08] drop-shadow-[2px_6px_12px_rgba(0,0,0,0.15)]"
         style={{ clipPath: "inset(5%)" }} />
      </motion.div>

      <motion.div
        style={{ y: ySketch }}
        className="absolute bottom-[-3%] right-[-80px] lg:right-[-180px] w-[350px] h-[350px] lg:w-[600px] lg:h-[500px] pointer-events-none z-0 mix-blend-multiply opacity-[0.15] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_testimonial_phone.png"
          alt="Testimonial Phone Sketch"
          className="w-full h-full object-contain scale-[1.08] drop-shadow-[2px_6px_12px_rgba(0,0,0,0.15)]"
         style={{ clipPath: "inset(5%)" }} />
      </motion.div>

      <motion.div
        style={{ y: ySketch }}
        className="absolute top-[-10%] left-[-80px] lg:left-[-120px] w-[350px] h-[350px] lg:w-[600px] lg:h-[500px] pointer-events-none z-0 mix-blend-multiply opacity-[0.15] overflow-hidden hidden md:block"
      >
        <img
          src="/sketch_testimonial_megaphone.png"
          alt="Testimonial Megaphone Sketch"
          className="w-full h-full object-contain scale-[1.08] drop-shadow-[2px_6px_12px_rgba(0,0,0,0.15)]"
         style={{ clipPath: "inset(5%)" }} />
      </motion.div>
    </section>
  );
};

