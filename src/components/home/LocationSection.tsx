import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const LocationSection = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-secondary text-sm uppercase tracking-widest font-medium">
                            Find Us
                        </span>
                        <h2 className="heading-lg text-primary mt-3 mb-6">
                            Visit Our Office
                        </h2>
                        <div className="accent-line mb-8" />

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-primary mb-1">Office Address</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        1st Floor, KRE Society Complex,<br />
                                        Opp. Karnataka Pharmacy College,<br />
                                        Gumpa Road, Bidar – 585403, Karnataka
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-primary mb-1">Contact Number</h4>
                                    <a
                                        href="tel:+919035119555"
                                        className="text-muted-foreground hover:text-secondary transition-colors"
                                    >
                                        +91 90351 19555
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-primary mb-1">Working Hours</h4>
                                    <p className="text-muted-foreground">
                                        Mon - Sat: 9:00 AM - 8:00 PM<br />
                                        Sunday: 10:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Link to="/contact" className="btn-primary mt-10 inline-flex">
                            Get in Touch
                        </Link>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-3xl overflow-hidden shadow-card"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30370.777779643853!2d77.47584935300623!3d17.915951866081834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec736d7f37ddd%3A0xbca074da1d1f5082!2sThe%20Bright%20Academy!5e0!3m2!1sen!2sin!4v1768234795159!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bright Tours & Travels Location"
                            className="w-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
