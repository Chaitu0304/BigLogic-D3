import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { OfferTransformation } from "@/components/landing/OfferTransformation";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Services } from "@/components/landing/Services";
import { RoiCalculator } from "@/components/landing/RoiCalculator";
import { Testimonials } from "@/components/landing/Testimonials";
import { FomoScarcity } from "@/components/landing/FomoScarcity";
import { GrandSlamOffer } from "@/components/landing/GrandSlamOffer";
import Faq from "@/components/landing/Faq";
import { CTA } from "@/components/landing/CTA";
import { Navigate } from "react-router-dom";
import { Preloader } from "@/components/landing/Preloader";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      {/* Luxury Preloader preloader layer */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main landing content with luxury entrance animation */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.99 }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          y: isLoading ? 16 : 0,
          scale: isLoading ? 0.99 : 1
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="theme-landeros min-h-screen bg-[#FCFBFE] antialiased relative overflow-x-hidden"
      >
        <Navbar />
        <Hero />
        <OfferTransformation />
        <HowItWorks />
        <Services />
        <RoiCalculator />
        <Testimonials />
        <FomoScarcity />
        <GrandSlamOffer />
        <Faq />
        <CTA />
      </motion.div>
    </>
  );
};

export default Index;
