import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "afifa & deri",
    location: "jakarta",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    text: "Pernikahan kami benar-benar seperti mimpi yang menjadi kenyataan. Tim sangat profesional dan detail dalam setiap aspek. Terima kasih sudah mewujudkan hari terbaik dalam hidup kami!",
    rating: 5,
  },
  {
    name: "Dilan & Milea",
    location: "Bandung",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    text: "Dekorasi yang luar biasa indah! Semua tamu kagum dengan desain venue kami. Koordinasi yang sempurna dari awal hingga akhir acara.",
    rating: 5,
  },
  {
    name: "Siti & Rahman",
    location: "Surabaya",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    text: "Vendor terbaik yang pernah kami temui. Responsif, kreatif, dan sangat memahami keinginan kami. Hasil foto dan video-nya juga sangat memukau!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-blush overflow-hidden">
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
            Testimoni
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Kata Mereka <span className="italic">Tentang Kami</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kepuasan klien adalah prioritas utama kami. Berikut cerita dari pasangan yang sudah mempercayakan hari spesial mereka kepada kami.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-card rounded-2xl p-8 shadow-elegant border border-border"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-wine/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-wine/20"
                />
                <div>
                  <h4 className="font-serif text-lg text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
