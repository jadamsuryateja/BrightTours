import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Bright Tours Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl">Bright Tours</h3>
                <p className="text-xs tracking-widest uppercase text-primary-foreground/70">& Travels</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Travel Made Easy. Verified service provider in Bidar with All India Permits.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/toursandtravelsbright"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Fleet", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {[
                "Wedding Logistics",
                "Outstation Trips",
                "Airport Transfers",
                "Pilgrimage Tours",
                "Corporate Rentals",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm leading-relaxed">
                  1st Floor, KRE Society Complex,<br />
                  Opp. Karnataka Pharmacy College,<br />
                  Gumpa Road, Bidar - 585403
                </span>
              </li>
              <li>
                <a
                  href="tel:+919035119555"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  +91 90351 19555
                </a>
              </li>
              <li>
                <a
                  href="mailto:brightgroup9595@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  brightgroup9595@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Reveal Typography */}
        <div className="mt-12 mb-6 overflow-hidden py-2">
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10vw] leading-none font-heading font-bold text-center text-white/5 uppercase tracking-tighter select-none"
          >
            Bright Tours
          </motion.h1>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Bright Tours & Travels. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span>All India Permit</span>
              <span>•</span>
              <span>Sanitized Vehicles</span>
              <span>•</span>
              <span>Professional Chauffeurs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
