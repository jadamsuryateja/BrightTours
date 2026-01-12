import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, MessageCircle } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
          alt="Luxury Travel Journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-oxford-blue/95 via-oxford-blue/80 to-transparent" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tropical-teal/10 border border-tropical-teal/20 text-tropical-teal mb-6 backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Wedding Season Special</span>
            </div>

            <h2 className="heading-lg text-white mb-6 leading-tight">
              Legacies are built on <br className="hidden md:block" />
              <span className="text-tropical-teal">Perfect Moments.</span>
            </h2>

            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-light">
              Your wedding logistics should be flawless. From luxury bridal cars to comfortable guest shuttles, we ensure every journey is as memorable as the destination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="btn-primary group"
              >
                Plan Your Transport
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/919035119555?text=Hello!%20I'm%20planning%20a%20wedding%20and%20need%20transport%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white font-button uppercase tracking-widest rounded-full transition-all duration-300 text-sm hover:bg-white hover:text-oxford-blue backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Optional: Add a visual element or keep it clean for the background to shine */}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
