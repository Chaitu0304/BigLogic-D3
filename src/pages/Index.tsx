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
import { Footer } from "@/components/landing/Footer";
import { Navigate } from "react-router-dom";

const Index = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="theme-landeros min-h-screen bg-[#FCFBFE] antialiased relative overflow-x-hidden">
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
      <Footer />
    </div>
  );
};

export default Index;
