import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-bus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury tour bus on scenic mountain highway"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark tint for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 lg:py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6 md:mb-8"
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-secondary fill-secondary flex-shrink-0" />
            <span className="text-white/90 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-medium whitespace-nowrap">
              Premium Travel Services
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight tracking-tight text-white mb-4 sm:mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block"
            >
              Luxury on Wheels.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block text-secondary mt-2 sm:mt-3"
            >
              Your Journey, Our Drive.
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4"
          >
            From wedding logistics to cross-country adventures. Experience travel with
            All India Permits and professional chauffeurs who put your comfort first.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto px-2 sm:px-0"
          >
            <Link to="/services" className="btn-hero group w-full sm:w-auto">
              View Our Fleet
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="btn-hero-outline w-full sm:w-auto">
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-3xl mx-auto px-2 sm:px-0"
        >
          {[
            { icon: Shield, label: "Verified Business" },
            { icon: Clock, label: "On Time, Every Time" },
            { icon: Star, label: "50+ Happy Weddings" },
            { icon: Shield, label: "All India Permit" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary flex-shrink-0" />
              <span className="text-white/80 text-[10px] sm:text-xs md:text-sm text-center leading-tight">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
