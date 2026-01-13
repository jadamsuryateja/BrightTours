import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic for Home Page
      if (location.pathname === "/") {
        const sections = ["about", "services"];
        let current = "Home";

        // Check offset for each section
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If section top is within view (with some offset)
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = section.charAt(0).toUpperCase() + section.slice(1);
            }
          }
        }

        // Use hash if available and no scroll interaction yet, or fallback to scroll spy
        setActiveSection(current);
      } else {
        // Non-home pages
        if (location.pathname === "/contact") setActiveSection("Contact");
        else setActiveSection("");
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll to section
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === "/" && !location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActiveLink = (name: string) => {
    return activeSection === name;
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
        className={`w-full transition-all duration-500 ${isScrolled
          ? "glass-nav py-3 shadow-soft"
          : "bg-transparent py-5"
          }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Bright Tours Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-semibold text-lg leading-tight transition-colors ${isScrolled ? "text-primary" : "text-white"
                }`}>
                Bright Tours
              </span>
              <span className={`text-xs tracking-widest uppercase transition-colors ${isScrolled ? "text-muted-foreground" : "text-white/70"
                }`}>
                & Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${isScrolled
                  ? isActiveLink(link.name)
                    ? "text-secondary"
                    : "text-foreground hover:text-secondary"
                  : isActiveLink(link.name)
                    ? "text-secondary"
                    : "text-white/90 hover:text-white"
                  }`}
              >
                {link.name}
                {isActiveLink(link.name) && (
                  <div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919035119555"
              className={`hidden lg:flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-secondary" : "text-white hover:text-secondary"
                }`}
            >
              <Phone className="w-4 h-4" />
              +91 90351 19555
            </a>

            <Link
              to="/contact"
              className="hidden md:inline-flex btn-primary !py-3 !px-6 text-xs"
            >
              Get Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"
                }`}
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>


      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-background md:hidden flex flex-col transition-all duration-300"
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-border/50">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Bright Tours Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-lg leading-tight text-primary">
                  Bright Tours
                </span>
                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                  & Travels
                </span>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-foreground hover:text-destructive transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 flex flex-col justify-center items-center gap-8 p-8">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-heading font-medium tracking-wide transition-colors ${isActiveLink(link.name)
                    ? "text-secondary"
                    : "text-foreground hover:text-secondary"
                    }`}
                >
                  {link.name}
                </Link>
              </div>
            ))}

            <div className="flex flex-col items-center gap-6 mt-8 w-full">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full max-w-xs justify-center"
              >
                Get Quote
              </Link>

              <a
                href="tel:+919035119555"
                className="flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 90351 19555
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
