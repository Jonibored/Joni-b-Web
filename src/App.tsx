import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Youtube, Mail, X } from 'lucide-react';

// --- DATA CONFIGURATION ---
// Aquí puedes cambiar tus textos, imágenes y enlaces.
const PORTFOLIO_DATA = {
  name: "Joni b",
  role: "Ilustrador & Artista Digital",
  bio: "Me dedico a la ilustración, la creación de loops animados cortos, el dibujo y la experimentación con herramientas de IA. Mi trabajo explora la intersección entre lo tradicional y lo tecnológico, buscando siempre nuevas formas de narrar historias visuales a través de atmósferas frías y melancólicas.",
  socials: {
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/",
    email: "hola@jonib.com"
  },
  images: [
    { id: 1, src: "https://picsum.photos/seed/joni1/800/1000", alt: "Ilustración 1", title: "Sueño Frío" },
    { id: 2, src: "https://picsum.photos/seed/joni2/1000/800", alt: "Ilustración 2", title: "Eco" },
    { id: 3, src: "https://picsum.photos/seed/joni3/800/800", alt: "Ilustración 3", title: "Vacío" },
    { id: 4, src: "https://picsum.photos/seed/joni4/800/1200", alt: "Ilustración 4", title: "Luz de Neón" },
    { id: 5, src: "https://picsum.photos/seed/joni5/1200/800", alt: "Ilustración 5", title: "IA Experimento 01" },
    { id: 6, src: "https://picsum.photos/seed/joni6/800/800", alt: "Ilustración 6", title: "Retrato" },
  ],
  videos: [
    { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://picsum.photos/seed/vid1/800/450", title: "Loop Animado 1" },
    { id: 2, src: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://picsum.photos/seed/vid2/800/450", title: "Loop Animado 2" },
  ]
};

// --- COMPONENTS ---

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-200 font-sans selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#05070a]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl tracking-widest uppercase text-white">{PORTFOLIO_DATA.name}</a>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-slate-400">
            <a href="#bio" className="hover:text-white transition-colors">Bio</a>
            <a href="#galeria" className="hover:text-white transition-colors">Galería</a>
            <a href="#videos" className="hover:text-white transition-colors">Videos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,30,50,0.4)_0%,rgba(5,7,10,1)_100%)] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-3xl"
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white mb-6">
            {PORTFOLIO_DATA.name}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light tracking-widest uppercase mb-12">
            {PORTFOLIO_DATA.role}
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <a href="#galeria" className="inline-block border border-white/20 rounded-full px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
              Ver Trabajo
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-32 px-6 bg-[#080b11]">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-5">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Sobre mí</h2>
              <div className="w-12 h-px bg-cyan-800 mb-8"></div>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light">
                {PORTFOLIO_DATA.bio}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Galería</h2>
            <p className="text-slate-500 tracking-widest uppercase text-sm">Ilustración & IA</p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {PORTFOLIO_DATA.images.map((img, index) => (
              <motion.div 
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="font-serif text-xl text-white">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="py-32 px-6 bg-[#080b11]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Loops Animados</h2>
            <p className="text-slate-500 tracking-widest uppercase text-sm">Movimiento & Atmósfera</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.videos.map((vid, index) => (
              <motion.div 
                key={vid.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative rounded-sm overflow-hidden bg-black aspect-video"
              >
                <video 
                  src={vid.src} 
                  poster={vid.poster}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  controls
                  preload="none"
                  muted
                  loop
                />
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-white/10">
                    {vid.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,30,50,0.3)_0%,rgba(5,7,10,1)_100%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">Trabajemos juntos</h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto font-light">
              Si estás interesado en colaborar, encargar una ilustración o simplemente saludar, no dudes en escribirme.
            </p>
            
            <a 
              href={`mailto:${PORTFOLIO_DATA.socials.email}`}
              className="inline-flex items-center gap-3 border border-white/20 rounded-full px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 mb-16"
            >
              <Mail size={18} />
              {PORTFOLIO_DATA.socials.email}
            </a>

            <div className="flex justify-center gap-8">
              <a href={PORTFOLIO_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors p-2">
                <Instagram size={24} />
              </a>
              <a href={PORTFOLIO_DATA.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors p-2">
                <Youtube size={24} />
              </a>
              <a href={PORTFOLIO_DATA.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors p-2">
                <TikTokIcon className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 text-slate-600 text-sm tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Todos los derechos reservados.</p>
      </footer>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Ampliada" 
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
