import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "628388693780";
  const message = "Halo, saya tertarik dengan layanan wedding vendor Elegance Wedding. Boleh minta info lebih lanjut?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,45%)] animate-ping opacity-30" />
        
        <Button
          variant="whatsapp"
          size="xl"
          className="rounded-full shadow-2xl relative"
          asChild
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="hidden sm:inline">Chat Sekarang</span>
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
