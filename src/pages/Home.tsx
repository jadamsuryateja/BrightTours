import { Helmet } from "react-helmet-async";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import LocationSection from "@/components/home/LocationSection";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Bright Tours & Travels | Luxury Car & Bus Rental Bidar</title>
        <meta
          name="description"
          content="Premium car and bus rental services in Bidar, Karnataka. Wedding logistics, outstation trips, airport transfers with professional chauffeurs. All India Permit."
        />
        <link rel="canonical" href="https://brighttours.in/" />
      </Helmet>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <LocationSection />
    </main>
  );
};

export default Home;
