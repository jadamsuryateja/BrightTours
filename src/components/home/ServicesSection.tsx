import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Users, Snowflake, Music, Briefcase, Check, ArrowRight,
    MapPin, Calendar, Clock, Car
} from "lucide-react";

import luxuryBusImg from "@/assets/Close-up Green Bus on Field.png";
import tempoImg from "@/assets/White Van in Field.png";
import carImg from "@/assets/Car Close-up.png";
import weddingCarImg from "@/assets/luxury-wedding-car.jpg";

const vehicles = [
    {
        name: "Luxury Bus",
        category: "Large Group",
        image: luxuryBusImg,
        features: ["40+ Seats", "Push-back Seats", "Ample Luggage", "Mood Lighting"],
        idealFor: "Weddings, School Trips, Corporate Events",
        icon: Users,
    },
    {
        name: "Tempo Traveller",
        category: "Mid-Sized Group",
        image: tempoImg,
        features: ["12/14/17 Seater", "AC / Non-AC", "Music System", "Comfortable Seating"],
        idealFor: "Family Pilgrimages, Group Tours",
        icon: Music,
    },
    {
        name: "Innova Crysta / SUV",
        category: "Family",
        image: carImg,
        features: ["6+1 Seater", "Captain Seats", "Air Conditioned", "Premium Comfort"],
        idealFor: "Family Outings, Business Travel",
        icon: Snowflake,
    },
];

const services = [
    { icon: Calendar, title: "Daily & Weekly Rentals" },
    { icon: MapPin, title: "Doorstep Delivery & Pickup" },
    { icon: Clock, title: "Hourly Rental Options" },
    { icon: Car, title: "Inter-city Cab Services" },
];

const ServicesSection = () => {
    return (
        <section id="services" className="relative">
            {/* Fleet Grid */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-secondary text-sm uppercase tracking-widest font-medium">
                            Choose Your Ride
                        </span>
                        <h2 className="heading-lg text-primary mt-3 mb-4">Our Vehicles</h2>
                        <div className="accent-line-center" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vehicles.map((vehicle, index) => (
                            <motion.div
                                key={vehicle.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 border border-border/50 flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm border border-border/50">
                                        {vehicle.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <h3 className="heading-md text-primary mb-2 text-xl">{vehicle.name}</h3>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <div className="p-1 rounded-full bg-secondary/10">
                                                <vehicle.icon className="w-3 h-3 text-secondary" />
                                            </div>
                                            <span>Ideal for: <span className="font-medium text-foreground">{vehicle.idealFor}</span></span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {vehicle.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted/50 text-muted-foreground text-[10px] font-medium border border-border/50"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        to="/contact"
                                        state={{ vehicle: vehicle.name === "Innova Crysta / SUV" ? "Innova/SUV" : vehicle.name }}
                                        className="mt-auto w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm text-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="relative min-h-[600px] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={weddingCarImg}
                        alt="Luxury wedding car transport"
                        className="w-full h-full object-cover"
                    />
                    {/* Smoother gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-oxford-blue/95 via-oxford-blue/50 to-transparent" />
                </div>

                <div className="container-custom relative z-10 py-20">
                    <div className="w-full lg:w-3/5 pr-6 lg:pr-12">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-secondary text-sm uppercase tracking-widest font-medium">
                                Wedding Season Special
                            </span>
                            <h2 className="heading-lg text-white mt-3 mb-6">
                                Legacies are built on Perfect Moments.
                            </h2>
                            <div className="accent-line mb-8" />

                            <p className="text-white/80 leading-relaxed mb-8 text-lg font-medium">
                                Your wedding logistics should be flawless. From luxury bridal cars to comfortable guest shuttles,
                                we ensure every journey is as memorable as the destination.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="btn-primary"
                                >
                                    Plan Your Transport
                                </Link>
                                <a
                                    href="https://wa.me/919035119555"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-hero-outline"
                                >
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ServicesSection;
