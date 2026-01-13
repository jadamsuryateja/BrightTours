import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Shield, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import aboutBgImg from "@/assets/chauffeur-service.jpg";

const AboutSection = () => {
    return (
        <section id="about" className="relative">
            {/* Story Section */}
            <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={aboutBgImg}
                        alt="Professional chauffeur service"
                        className="w-full h-full object-cover"
                    />
                    {/* Stronger gradient overlay on mobile for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-oxford-blue via-oxford-blue/95 to-oxford-blue/80 md:via-oxford-blue/90 md:to-transparent lg:via-50% lg:to-70%" />
                </div>

                <div className="container-custom relative z-10 flex justify-end py-12 md:py-20">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-12"
                    >
                        <span className="text-secondary text-xs sm:text-sm uppercase tracking-widest font-medium">
                            Est. in Bidar
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-3 mb-6">
                            Travel Made Easy
                        </h2>
                        <div className="accent-line mb-6 md:mb-8" />

                        <div className="space-y-4 md:space-y-6 text-white/90 leading-relaxed text-sm sm:text-base font-medium">
                            <p>
                                At Bright Tours & Travels, we believe that the journey is just as important
                                as the destination. Whether it's a weekend getaway, a family pilgrimage,
                                or the most important day of your life – your wedding – we ensure every
                                mile is traveled in comfort and style.
                            </p>
                            <p>
                                Our fleet of well-maintained vehicles, combined with professional chauffeurs
                                who understand the roads and respect your time, makes us the trusted choice
                                for families and businesses across Karnataka and beyond.
                            </p>
                            <p>
                                With All India Permits and a commitment to safety, we've successfully
                                served hundreds of happy families, making their travel dreams a reality.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 md:mt-10 border-t border-white/10 pt-6 md:pt-8">
                            {[
                                { number: "50+", label: "Happy Weddings" },
                                { number: "10+", label: "Years Experience" },
                                { number: "100%", label: "Satisfaction" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-2xl sm:text-3xl font-heading font-bold text-secondary">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs sm:text-sm text-white/70 mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            {/* Values Section */}
            <section className="relative py-24 bg-muted/30 overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <span className="text-secondary text-sm uppercase tracking-widest font-medium">
                            Our Promise
                        </span>
                        <h2 className="heading-xl text-primary mt-4 mb-6">Core Values</h2>
                        <div className="accent-line-center" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Clock, title: "On Time", desc: "We value your time as much as you do. Punctuality is our hallmark." },
                            { icon: Shield, title: "Safe & Secure", desc: "Rigorous maintenance and vetted chauffeurs for your peace of mind." },
                            { icon: Users, title: "Professional", desc: "Experienced drivers who prioritize your comfort and safety above all." },
                            { icon: Award, title: "Quality First", desc: "From booking to destination, experience premium service at every step." },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-3xl bg-white border border-border/50 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                                    <value.icon className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </section>
    );
};

export default AboutSection;
