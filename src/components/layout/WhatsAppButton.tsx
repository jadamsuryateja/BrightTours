import { motion } from "framer-motion";
import whatsappLogo from "@/assets/whatsapp.svg";

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/919035119555"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group bg-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <img src={whatsappLogo} alt="WhatsApp" className="w-full h-full object-cover" />
            <span className="absolute right-full mr-3 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 origin-right pointer-events-none">
                Chat with us
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
