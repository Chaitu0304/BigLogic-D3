import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Zap, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsNavVisible(window.scrollY > 5 || location.pathname !== "/");
    };
    
    // Set initial values
    setIsScrolled(window.scrollY > 20);
    setIsNavVisible(window.scrollY > 5 || location.pathname !== "/");

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Automations", id: "services" },
    { name: "How it Works", id: "how-it-works" },
    { name: "ROI Math", id: "roi-calculator" },
    { name: "Evidence", id: "testimonials" },
    { name: "Who It's For", id: "who-its-for" },
    { name: "FAQ", id: "faq" },
  ];

  const logoVariants = {
    hidden: { x: -16, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 16, delay: 2.5 }
    }
  };

  const linkContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 2.6
      }
    }
  };

  const linkItemVariants = {
    hidden: { y: -12, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 140, damping: 14 }
    }
  };

  const actionsVariants = {
    hidden: { x: 16, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 16, delay: 2.9 }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate={isNavVisible ? "visible" : "hidden"}
      variants={{
        hidden: { y: -100, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 110,
            damping: 18
          }
        }
      }}
      style={{ x: "-50%" }}
      className="fixed top-5 left-1/2 z-50 w-[96%] lg:w-[95%] xl:w-[86%] lg:max-w-[1080px] xl:max-w-[1200px]"
    >
      {/* Floating Glass Capsule Wrapper with Double Boundary Frame */}
      <div 
        className={`rounded-full border transition-all duration-300 px-5 py-2.5 flex items-center justify-between backdrop-blur-xl ${
          isScrolled 
            ? "border-white/20 bg-white/75 shadow-[0_10px_30px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.7)]" 
            : "border-white/10 bg-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.6)]"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Brand Logo with Glowing Status Indicator */}
          <motion.div variants={logoVariants} initial="hidden" animate="visible">
            <Link 
              to="/" 
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center group shrink-0 select-none"
            >
              <img 
                src="/logo-light-theme.png" 
                alt="BigLogic AI Logo" 
                className="h-8 md:h-9 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)] group-hover:scale-[1.02] transition-all duration-300 select-none"
              />
            </Link>
          </motion.div>
 
          {/* Desktop Menu Link Pill Wrappers */}
          <motion.div 
            variants={linkContainerVariants} 
            initial="hidden" 
            animate="visible"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-[10.5px] xl:text-[12.5px] font-bold uppercase tracking-wider text-[#6B6B6B] whitespace-nowrap shrink-0"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={`#${link.id}`}
                variants={linkItemVariants}
                onClick={(e) => scrollToSection(e, link.id)}
                className="relative py-1.5 px-3.5 rounded-full hover:bg-[#0A0A0A]/5 text-[#6B6B6B] hover:text-[#0A0A0A] transition-all duration-300 tracking-widest font-tech-landeros group select-none"
              >
                {link.name}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#0A0A0A] transition-all duration-300 group-hover:w-2" />
              </motion.a>
            ))}
          </motion.div>
  
          {/* Unified Action Buttons */}
          <motion.div 
            variants={actionsVariants} 
            initial="hidden" 
            animate="visible"
            className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0 whitespace-nowrap"
          >
            {localStorage.getItem("token") ? (
              <button
                onClick={() => navigate("/dashboard")}
                className="px-4 xl:px-5 py-2.5 text-[11px] xl:text-[11.5px] font-bold btn-landeros-primary flex items-center gap-1.5 group shrink-0"
              >
                DASHBOARD <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 rounded-full border border-black/5 hover:bg-neutral-100/50 transition-colors text-[11px] xl:text-[11.5px] font-bold text-[#0A0A0A] uppercase tracking-widest font-tech-landeros shrink-0 select-none"
                >
                  SIGN IN
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="px-4 xl:px-5 py-2.5 text-[11px] xl:text-[11.5px] font-bold btn-landeros-primary flex items-center gap-1.5 group shrink-0"
                >
                  GET STARTED <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </>
            )}
          </motion.div>
 
          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <button
              className="p-2 rounded-full bg-[#0A0A0A] text-white border border-black/10 hover:bg-neutral-800 transition-all active:scale-95 duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
 
      {/* Premium Frosted Glass Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-[68px] left-2 right-2 z-40 lg:hidden p-5 border border-white/20 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.7)] bg-white/85 backdrop-blur-lg"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] hover:text-[#0A0A0A] py-2.5 px-3 rounded-xl hover:bg-black/5 transition-all font-tech-landeros"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-black/10 my-2" />
              <div className="flex flex-col gap-2 pt-1">
                {localStorage.getItem("token") ? (
                  <button
                    onClick={() => {
                      navigate("/dashboard");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2.5 text-center text-xs font-bold btn-landeros-primary"
                  >
                    DASHBOARD
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        navigate("/login");
                        setMobileMenuOpen(false);
                      }}
                      className="w-full py-2.5 text-center text-xs font-bold text-[#0A0A0A] border border-black/10 rounded-full hover:bg-black/5 transition-colors"
                    >
                      SIGN IN
                    </button>
                    <button
                      onClick={() => {
                        navigate("/signup");
                        setMobileMenuOpen(false);
                      }}
                      className="w-full py-2.5 text-center text-xs font-bold btn-landeros-primary flex items-center justify-center gap-1"
                    >
                      START FREE NOW <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
