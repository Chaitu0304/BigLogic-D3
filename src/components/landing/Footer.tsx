import { Link } from "react-router-dom";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link
      to={to}
      className="text-[#9E9E9E] hover:text-white transition-all duration-200 flex items-center group font-medium"
    >
      <span className="w-0 group-hover:w-2.5 h-[2px] bg-white mr-0 group-hover:mr-2 transition-all duration-200" />
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white shadow-premium-tactile hover:bg-white hover:text-black transition-all duration-300"
  >
    <Icon className="w-4 h-4" />
  </a>
);

// Custom neural AI brain circuit SVG that glows with gold-amber currents from center out
const GlowingCircuit = () => {
  return (
    <div className="relative w-48 h-6 my-4 overflow-hidden select-none pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="circuitGlowLeft" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="circuitGlowRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Center Neural Node (CPU Brain) in Gold */}
        <circle
          cx="100"
          cy="12"
          r="4"
          fill="#FBBF24"
          filter="url(#glow)"
          className="animate-pulse"
        />
        <circle
          cx="100"
          cy="12"
          r="8"
          fill="url(#centerGlow)"
          className="animate-pulse"
          style={{ animationDuration: '2s' }}
        />

        {/* Left Circuit Path Paths */}
        <path
          d="M 92 12 H 50"
          stroke="url(#circuitGlowLeft)"
          strokeWidth="1.5"
          strokeDasharray="40"
          className="animate-circuit-flow-left"
        />
        <path
          d="M 94 12 L 80 4 H 30"
          stroke="url(#circuitGlowLeft)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <path
          d="M 94 12 L 85 20 H 40"
          stroke="url(#circuitGlowLeft)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Right Circuit Path Paths */}
        <path
          d="M 108 12 H 150"
          stroke="url(#circuitGlowRight)"
          strokeWidth="1.5"
          strokeDasharray="40"
          className="animate-circuit-flow-right"
        />
        <path
          d="M 106 12 L 120 4 H 170"
          stroke="url(#circuitGlowRight)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <path
          d="M 106 12 L 115 20 H 160"
          stroke="url(#circuitGlowRight)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Endpoint nodes */}
        <circle cx="30" cy="4" r="1.2" fill="#FBBF24" fillOpacity="0.7" />
        <circle cx="40" cy="20" r="1.2" fill="#FBBF24" fillOpacity="0.7" />
        <circle cx="50" cy="12" r="2.2" fill="#FBBF24" filter="url(#glow)" fillOpacity="0.9" />

        <circle cx="170" cy="4" r="1.2" fill="#FBBF24" fillOpacity="0.7" />
        <circle cx="160" cy="20" r="1.2" fill="#FBBF24" fillOpacity="0.7" />
        <circle cx="150" cy="12" r="2.2" fill="#FBBF24" filter="url(#glow)" fillOpacity="0.9" />
      </svg>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 w-full relative z-10 pt-16 font-sans-landeros text-white bg-grid-landeros overflow-hidden">
      
      {/* 1. GOLD BLUEPRINT AXIS DRAFTING LINE beneath the top border */}
      <div className="absolute top-0 inset-x-0 h-[1.2px] bg-gradient-to-r from-transparent via-amber-500/25 to-transparent pointer-events-none z-20" />
      
      {/* 2. PREMIUM AMBIENT BACKLIGHTS */}
      <div className="absolute bottom-[-120px] right-[-100px] w-96 h-96 bg-gradient-to-tr from-amber-500/[0.035] to-transparent rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[-150px] w-96 h-96 bg-gradient-to-tr from-white/[0.01] to-transparent rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="container mx-auto px-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-4 text-left">
            {/* Unified side-by-side logo lockup */}
            <Link 
              to="/" 
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="gap-2 group select-none"
            >
              <img 
                src="/logo-icon.png" 
                alt="BigLogic AI Logo" 
                className="h-15 md:h-15 object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.05)] group-hover:scale-[1.04] transition-all duration-300"
              />
              <img 
                src="/logo-title.png" 
                alt="BigLogic AI" 
                className="h-15 md:h-15 object-contain filter brightness-125 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              />
            </Link>
            
            {/* Glowing Golden Circuit beneath Title */}
            <GlowingCircuit />

            <p className="font-medium text-xs leading-relaxed text-[#9E9E9E] max-w-xs pt-1">
              Enterprise-grade AI agents automating the restoration lifecycle. Rebuilding estimate data into approved cash flows in 60 seconds.
            </p>
            <div className="flex gap-3 pt-3">
              <SocialIcon icon={Twitter} href="#" />
              <SocialIcon icon={Linkedin} href="#" />
              <SocialIcon icon={Github} href="#" />
            </div>
          </div>

          {/* Product Links */}
          <div className="text-left">
            <h4 className="font-tech-landeros text-sm font-bold text-white mb-6 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-xs">
              <FooterLink to="/signup">Draw Schedule Agent</FooterLink>
              <FooterLink to="/signup">Material Extraction</FooterLink>
              <FooterLink to="/signup">Carrier Guideline Audit</FooterLink>
              <FooterLink to="/signup">Excel Spreadsheets</FooterLink>
              <FooterLink to="/signup">Company Brain</FooterLink>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-left">
            <h4 className="font-tech-landeros text-sm font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-xs">
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Engineering Blog</FooterLink>
              <FooterLink to="/">Contact Support</FooterLink>
              <FooterLink to="/">Partner Ecosystem</FooterLink>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="text-left">
            <h4 className="font-tech-landeros text-sm font-bold text-white mb-6 uppercase tracking-wider">Stay Updated</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-semibold text-[#9E9E9E]">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>support@biglogic.ai</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-[#9E9E9E]">
                <MapPin className="w-4 h-4 text-white shrink-0" />
                <span>San Francisco, California</span>
              </div>
            </div>

            {/* Newsletter input - Premium Glassmorphic style */}
            <div className="mt-8 p-6 border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] to-transparent pointer-events-none" />
              <p className="text-[9px] font-bold uppercase text-amber-400 mb-3 tracking-widest font-tech-landeros flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                ENGINEERING CHANGELOG
              </p>
              <div className="flex gap-2 relative z-10">
                <input
                  type="email"
                  placeholder="Estimator email"
                  className="bg-black/45 border border-white/10 px-4 py-2.5 text-xs font-semibold w-full rounded-full focus:outline-none placeholder:text-white/20 text-white focus:border-amber-500/50 focus:shadow-[0_0_12px_rgba(245,158,11,0.15)] transition-all"
                />
                <button 
                  aria-label="Subscribe" 
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black flex items-center justify-center shrink-0 shadow-lg hover:from-amber-300 hover:to-amber-400 transition-all duration-300 active:scale-95 relative"
                >
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Trust & Guarantee Badge Row - Translucent green glass capsules */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-6 mb-8 text-[10px] font-bold uppercase tracking-wider font-tech-landeros text-[#9E9E9E]">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="flex items-center gap-2 border border-emerald-500/15 px-3.5 py-1.5 bg-emerald-500/[0.03] text-emerald-400 rounded-full select-none shadow-[0_1px_1px_rgba(16,185,129,0.02)]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
              SOC-2 TYPE II CERTIFIED
            </span>
            <span className="flex items-center gap-2 border border-emerald-500/15 px-3.5 py-1.5 bg-emerald-500/[0.03] text-emerald-400 rounded-full select-none shadow-[0_1px_1px_rgba(16,185,129,0.02)]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
              256-BIT END-TO-END ENCRYPTION
            </span>
            <span className="flex items-center gap-2 border border-emerald-500/15 px-3.5 py-1.5 bg-emerald-500/[0.03] text-emerald-400 rounded-full select-none shadow-[0_1px_1px_rgba(16,185,129,0.02)]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
              HIPAA COMPLIANT WORKSPACES
            </span>
          </div>
          <div className="text-emerald-400 flex items-center gap-1.5 font-sans-landeros font-semibold normal-case text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            No credit card required. Cancel in 1 click.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#9E9E9E] pb-12">
          <p className="relative z-10">
            © {new Date().getFullYear()} BigLogic Inc. All rights reserved. Made in U.S.A.
          </p>
          <div className="flex gap-6 font-semibold relative z-10">
            <Link to="/signup" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/signup" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/signup" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};
