import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Dekorasi meja mewah", span: "md:col-span-1 md:row-span-1" },
  { src: gallery2, alt: "Tenda pernikahan outdoor", span: "md:col-span-1 md:row-span-2" },
  { src: gallery5, alt: "Garden wedding aesthetic", span: "md:col-span-1 md:row-span-2" },
  { src: gallery3, alt: "Pasangan pengantin bahagia", span: "md:col-span-1 md:row-span-1" },
  { src: gallery6, alt: "Kursi & meja dekorasi premium", span: "md:col-span-1 md:row-span-1" },
  { src: gallery4, alt: "Wedding cake premium", span: "md:col-span-1 md:row-span-1" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
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
            Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Galeri <span className="italic">Karya Kami</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Setiap pernikahan adalah kanvas unik yang kami ciptakan dengan penuh cinta dan dedikasi.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} relative group overflow-hidden rounded-2xl cursor-pointer`}
            >
              <div className="aspect-square md:aspect-auto md:h-full relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/40 transition-all duration-500" />
                
                {/* Caption */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-primary-foreground font-serif text-xl">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Pernikahan" },
            { number: "8", label: "Tahun Pengalaman" },
            { number: "50+", label: "Partner Vendor" },
            { number: "100%", label: "Kepuasan Klien" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-secondary/50">
              <h3 className="font-serif text-3xl md:text-4xl text-wine mb-2">
                {stat.number}
              </h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
