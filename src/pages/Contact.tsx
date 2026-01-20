import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, MapPin, Mail, MessageCircle, Calendar, Users, Car, Route } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";
import contactBgImg from "@/assets/contact-bg.jpg";
import { Helmet } from "react-helmet-async";

const formSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(10, "Please enter a valid phone number").max(15),
  trip_type: z.string().min(1, "Please select a trip type"),
  vehicle_pref: z.string().min(1, "Please select a vehicle"),
  seats: z.string().min(1, "Please enter number of passengers"),
  travel_date: z.string().min(1, "Please select a travel date"),
  pickup_location: z.string(),
  drop_location: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const vehicleOptions = [
  "Innova/SUV",
  "Tempo Traveller",
  "Luxury Bus",
  "Sedan",
];

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get vehicle from navigation state if available
  const preSelectedVehicle = location.state?.vehicle || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      phone: "",
      trip_type: "",
      vehicle_pref: preSelectedVehicle,
      seats: "",
      travel_date: "",
      pickup_location: "",
      drop_location: "",
    },
  });

  // Update form if state changes (e.g. navigation within app)
  useEffect(() => {
    if (preSelectedVehicle) {
      setValue("vehicle_pref", preSelectedVehicle);
    }
  }, [preSelectedVehicle, setValue]);

  const generateWhatsAppMessage = (data: FormData) => {
    const lines = [
      "Hello Bright Tours!",
      "",
      "*New Booking Inquiry*",
      "",
      `*Name:* ${data.full_name}`,
      `*Phone:* ${data.phone}`,
      `*Trip Type:* ${data.trip_type}`,
      `*Vehicle:* ${data.vehicle_pref}`,
      `*Passengers:* ${data.seats}`,
      `*Date:* ${data.travel_date}`,
      `*From:* ${data.pickup_location}`,
      `*To:* ${data.drop_location}`,
      "",
      "Please provide a quote.",
    ];

    return encodeURIComponent(lines.join("\n"));
  };

  const handleWhatsApp = (data: FormData) => {
    const message = generateWhatsAppMessage(data);
    // Use a direct URL with standard encoding
    window.open(`https://wa.me/919035119555?text=${message}`, "_blank");
  };

  const onSubmit = (data: FormData) => {
    handleWhatsApp(data);
  };

  return (
    <main className="overflow-x-hidden w-full max-w-[100vw]">
      <Helmet>
        <title>Contact Us | Bright Tours & Travels Bidar</title>
        <meta
          name="description"
          content="Book your luxury travel vehicle today. Contact Bright Tours & Travels for weddings, corporate events, and outstation trips in Bidar."
        />
        <link rel="canonical" href="https://brighttours.in/contact" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactBgImg}
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          {/* Dark tint for better text visibility */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-secondary text-sm uppercase tracking-widest font-medium drop-shadow-md">
              Get in Touch
            </span>
            <h1 className="heading-xl text-white mt-4 mb-6 drop-shadow-lg">
              Book Your Ride
            </h1>
            <p className="text-white/90 text-lg leading-relaxed drop-shadow-md font-medium">
              Ready to explore? Fill out the form below and we'll get back to you
              with a personalized quote within hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <span className="text-secondary text-sm uppercase tracking-widest font-medium">
                Contact Information
              </span>
              <h2 className="heading-lg text-primary mt-3 mb-6">
                Get in Touch
              </h2>
              <div className="accent-line-center mb-8" />

              <p className="text-muted-foreground leading-relaxed mb-10">
                Ready to explore? Book now and make memories that last.
                We're here to help you plan the perfect journey.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+919035119555"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                    <Phone className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+91 90351 19555</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919035119555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">Quick response guaranteed</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Office Address</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      1st Floor, KRE Society Complex,<br />
                      Opp. Karnataka Pharmacy College,<br />
                      Gumpa Road, Bidar - 585403
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">brightgroup9595@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                <h3 className="heading-md text-primary mb-2">Request a Quote</h3>
                <p className="text-muted-foreground mb-8">
                  Fill in your travel details and we'll send you a customized quote.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("full_name")}
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      />
                      {errors.full_name && (
                        <p className="text-destructive text-sm mt-1">{errors.full_name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Phone Number *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Trip Type & Vehicle */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Type of Trip *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                        <input
                          {...register("trip_type")}
                          type="text"
                          placeholder="e.g. Wedding, Outstation, etc."
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        />
                      </div>
                      {errors.trip_type && (
                        <p className="text-destructive text-sm mt-1">{errors.trip_type.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Vehicle Preference *
                      </label>
                      <div className="relative">
                        <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                        <select
                          {...register("vehicle_pref")}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select vehicle</option>
                          {vehicleOptions.map((vehicle) => (
                            <option key={vehicle} value={vehicle}>{vehicle}</option>
                          ))}
                        </select>
                      </div>
                      {errors.vehicle_pref && (
                        <p className="text-destructive text-sm mt-1">{errors.vehicle_pref.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Seats & Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Number of Passengers *
                      </label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                        <input
                          {...register("seats")}
                          type="number"
                          min="1"
                          placeholder="e.g., 15"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        />
                      </div>
                      {errors.seats && (
                        <p className="text-destructive text-sm mt-1">{errors.seats.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Travel Date *
                      </label>
                      <input
                        {...register("travel_date")}
                        type="date"
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      />
                      {errors.travel_date && (
                        <p className="text-destructive text-sm mt-1">{errors.travel_date.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Pickup & Drop Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        From (Pickup Location)
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                        <input
                          {...register("pickup_location")}
                          type="text"
                          placeholder="Enter pickup city/location"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        />
                      </div>
                      {errors.pickup_location && (
                        <p className="text-destructive text-sm mt-1">{errors.pickup_location.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        To (Drop Location)
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                        <input
                          {...register("drop_location")}
                          type="text"
                          placeholder="Enter drop city/location"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        />
                      </div>
                      {errors.drop_location && (
                        <p className="text-destructive text-sm mt-1">{errors.drop_location.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      className="btn-primary flex-1"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Get Quote via WhatsApp
                    </button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground">
                    We typically respond within 30 minutes during business hours.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30370.777779643853!2d77.47584935300623!3d17.915951866081834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec736d7f37ddd%3A0xbca074da1d1f5082!2sThe%20Bright%20Academy!5e0!3m2!1sen!2sin!4v1768234795159!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bright Tours & Travels Location"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
