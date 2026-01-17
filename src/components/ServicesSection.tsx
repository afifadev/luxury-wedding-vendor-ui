import { motion } from "framer-motion";
import { Users, Palette, Tent, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Users,
    title: "Wedding Organizer",
    description: "Tim profesional yang akan mengurus seluruh rangkaian acara pernikahan Anda dari awal hingga akhir.",
    features: ["Koordinasi vendor", "Timeline management", "Rehearsal & ceremony"],
    price: "Mulai Rp 15.000.000",
  },
  {
    icon: Palette,
    title: "Dekorasi Premium",
    description: "Desain dekorasi eksklusif yang mencerminkan kepribadian dan gaya unik pasangan.",
    features: ["Konsep custom", "Fresh flowers", "Lighting design"],
    price: "Mulai Rp 25.000.000",
  },
  {
    icon: Tent,
    title: "Sewa Tenda & Venue",
    description: "Penyediaan tenda premium dan perlengkapan venue untuk acara indoor maupun outdoor.",
    features: ["Tenda VIP & Standar", "AC & sound system", "Kursi & meja dekorasi"],
    price: "Mulai Rp 10.000.000",
  },
  {
    icon: Camera,
    title: "Fotografer & Videografer",
    description: "Abadikan momen terindah dengan tim fotografi profesional kami.",
    features: ["Cinematic video", "Pre-wedding shoot", "Same day edit"],
    price: "Mulai Rp 12.000.000",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-blush">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-wine uppercase tracking-widest mb-4">
            Layanan Kami
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Paket Pernikahan <span className="italic">Lengkap</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Pilih layanan sesuai kebutuhan Anda, atau kombinasikan untuk mendapatkan 
            paket lengkap dengan harga spesial.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-500 border border-border hover:border-wine/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-wine/10 flex items-center justify-center mb-5 group-hover:bg-wine group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-wine group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-wine" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="pt-4 border-t border-border">
                <p className="font-serif text-lg text-wine font-medium">
                  {service.price}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-wine rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-14"
        >
          <Button variant="wine" size="xl">
            Lihat Semua Paket
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
