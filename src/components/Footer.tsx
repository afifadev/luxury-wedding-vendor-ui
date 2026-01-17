import { motion } from "framer-motion";
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wine text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl mb-4">Elegance Wedding</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Mewujudkan pernikahan impian Anda dengan sentuhan elegan dan profesional sejak 2016.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Layanan</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Wedding Organizer</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Dekorasi</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sewa Tenda</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Fotografi</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg mb-4">Perusahaan</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Testimoni</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Karir</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Kontak</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Jl. Dewi Sartika No 23, Palu Selatan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="https://wa.me/628388693780" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  +62 838-8693-780
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span>hello@elegancewedding.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Elegance Wedding. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 fill-rose-gold text-rose-gold" /> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
