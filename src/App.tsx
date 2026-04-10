/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Menu, 
  X,
  Instagram,
  Twitter,
  Facebook
} from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Oversized Graphic Tee",
    price: "$35",
    category: "Streetwear",
    image: "https://images.unsplash.com/photo-1558191053-8edcb01e1da3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: "$85",
    category: "Essentials",
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Cargo Utility Pants",
    price: "$65",
    category: "New Arrivals",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Minimalist Hoodie",
    price: "$55",
    category: "Essentials",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
  }
];

const highlights = [
  { icon: <TrendingUp className="w-6 h-6" />, title: "Trendy Streetwear", desc: "Fresh, bold styles for everyday confidence" },
  { icon: <Zap className="w-6 h-6" />, title: "Everyday Essentials", desc: "Simple, clean, and comfortable basics" },
  { icon: <Star className="w-6 h-6" />, title: "New Arrivals", desc: "Stay updated with our latest collections" },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Premium Quality", desc: "Long-lasting fashion you can trust" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-white/80 backdrop-blur-md border-b border-brand-black/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display tracking-tighter"
          >
            SUJAN
          </motion.div>
          
          <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-widest">
            <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
            <a href="#products" className="hover:text-brand-accent transition-colors">Shop</a>
            <a href="#why" className="hover:text-brand-accent transition-colors">Why Us</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-brand-black/5 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-brand-white pt-24 px-6 flex flex-col space-y-8 text-3xl font-display"
        >
          <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)}>SHOP</a>
          <a href="#why" onClick={() => setIsMenuOpen(false)}>WHY US</a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80" 
            alt="Fashion Hero"
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[15vw] md:text-[20vw] font-display leading-[0.8] tracking-tighter uppercase"
          >
            SUJAN
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-3xl font-serif italic mt-4"
          >
            Dress Bold. Live Your Style.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <a 
              href="#products"
              className="inline-flex items-center space-x-3 bg-brand-black text-brand-white px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-all group"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-10 w-full overflow-hidden border-y border-brand-black/10 py-4">
          <div className="marquee-track space-x-12 whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-2xl font-display text-stroke tracking-widest opacity-30">
                DRESS BOLD • LIVE YOUR STYLE • SUJAN • 
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display mb-8">BEYOND CLOTHING</h2>
            <p className="text-xl text-brand-white/70 leading-relaxed font-light">
              At SUJAN, we believe fashion is more than just clothing—it’s a statement. 
              Our goal is to provide modern, stylish, and affordable outfits for everyone 
              who wants to look good and feel even better. 
            </p>
            <p className="text-xl text-brand-white/70 mt-6 leading-relaxed font-light">
              We carefully select each piece to match current trends while ensuring top 
              quality and comfort. Whether you're going for a casual vibe or a bold look, 
              SUJAN is your go-to destination.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=80" 
              alt="About Sujan"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-brand-black/10 rounded-3xl hover:border-brand-accent transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-black text-brand-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
                <p className="text-brand-black/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-6xl font-display">NEW ARRIVALS</h2>
              <p className="text-brand-black/60 mt-2 font-serif italic">Curated for the bold.</p>
            </div>
            <button className="hidden md:flex items-center space-x-2 font-bold hover:text-brand-accent transition-colors">
              <span>VIEW ALL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>
                  <button className="absolute bottom-4 right-4 bg-brand-black text-brand-white p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-brand-black/60 font-mono">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-24 px-6 bg-brand-white border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-display mb-16">WHY CHOOSE SUJAN?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-4xl font-display text-brand-accent">01</div>
              <h4 className="text-2xl font-bold">MODERN COLLECTIONS</h4>
              <p className="text-brand-black/60">Designed for today’s generation who aren't afraid to stand out.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-display text-brand-accent">02</div>
              <h4 className="text-2xl font-bold">PREMIUM FABRICS</h4>
              <p className="text-brand-black/60">We prioritize comfort and durability in every single stitch.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-display text-brand-accent">03</div>
              <h4 className="text-2xl font-bold">FAST SERVICE</h4>
              <p className="text-brand-black/60">Reliable delivery to get your style to your doorstep quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-accent rounded-[3rem] p-12 md:p-24 text-center text-brand-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-display leading-tight">YOUR STYLE JOURNEY <br/> STARTS HERE.</h2>
              <p className="text-xl md:text-2xl mt-8 font-light max-w-2xl mx-auto opacity-90">
                Shop now at SUJAN and upgrade your wardrobe today. 
                Explore. Choose. Wear with Confidence.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                <button className="w-full sm:w-auto bg-brand-white text-brand-black px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-black hover:text-brand-white transition-all">
                  SHOP NOW
                </button>
                <button className="w-full sm:w-auto border-2 border-brand-white text-brand-white px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-white hover:text-brand-black transition-all">
                  VIEW CATALOG
                </button>
              </div>
            </div>
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-black/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-brand-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-brand-white/10 pb-12">
          <div className="col-span-2">
            <h3 className="text-4xl font-display mb-6 tracking-tighter">SUJAN</h3>
            <p className="text-brand-white/60 max-w-sm">
              Dress Bold. Live Your Style. The ultimate destination for modern streetwear and everyday essentials.
            </p>
            <div className="flex space-x-6 mt-8">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-brand-accent transition-colors" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-brand-accent transition-colors" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-brand-accent transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-brand-white/60">
              <li><a href="#" className="hover:text-brand-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-brand-white transition-colors">Shop All</a></li>
              <li><a href="#why" className="hover:text-brand-white transition-colors">Why Sujan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-4 text-brand-white/60">
              <li><a href="#" className="hover:text-brand-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-brand-white/40 text-sm">
          <p>© 2026 SUJAN. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-brand-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-brand-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
