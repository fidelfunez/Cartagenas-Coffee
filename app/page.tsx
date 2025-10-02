'use client'

import { motion } from 'framer-motion'
import { Coffee, Leaf, Star, MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-coffee-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-dark">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Coffee className="h-8 w-8 text-coffee-gold" />
              <span className="text-2xl font-bold font-playfair text-gradient">
                Cartagena's Coffee
              </span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#about" className="hover:text-coffee-gold transition-colors">Our Story</a>
              <a href="#products" className="hover:text-coffee-gold transition-colors">Products</a>
              <a href="#contact" className="hover:text-coffee-gold transition-colors">Contact</a>
              <button className="btn-primary">Order Now</button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80"
            alt="Honduran Coffee Farm"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-black/60 via-coffee-black/40 to-coffee-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold font-playfair mb-6"
            >
              <span className="text-gradient">Premium Honduran</span>
              <br />
              <span className="text-white">Coffee Experience</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-coffee-cream mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              From our family farms in Honduras to your cup. Experience the finest organic coffee 
              and discover our collection of premium cold brews.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="btn-primary text-lg px-10 py-4">
                Explore Our Coffee
              </button>
              <button className="btn-secondary text-lg px-10 py-4">
                Try Cold Brews
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 hidden lg:block"
        >
          <div className="glass p-4 rounded-full">
            <Leaf className="h-8 w-8 text-coffee-gold" />
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 hidden lg:block"
        >
          <div className="glass p-4 rounded-full">
            <Star className="h-8 w-8 text-coffee-gold" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-coffee-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              <span className="text-gradient">Our Story</span>
            </h2>
            <p className="text-xl text-coffee-cream max-w-3xl mx-auto">
              Three generations of passion, tradition, and excellence in every cup
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Coffee Farm in Honduras"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold font-playfair text-coffee-gold">
                Family Heritage
              </h3>
              <p className="text-lg text-coffee-cream leading-relaxed">
                Our journey began in the lush mountains of Honduras, where our family has been 
                cultivating premium coffee beans for over three generations. Each bean is carefully 
                selected and processed using traditional methods passed down through our family.
              </p>
              <p className="text-lg text-coffee-cream leading-relaxed">
                Today, we bring this same dedication to quality to our cold brew collection, 
                creating innovative flavors that honor our heritage while embracing modern tastes.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="glass p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-coffee-gold" />
                </div>
                <span className="text-coffee-gold font-semibold">100% Organic</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              <span className="text-gradient">Our Products</span>
            </h2>
            <p className="text-xl text-coffee-cream max-w-3xl mx-auto">
              Discover our premium collection of organic coffee and artisanal cold brews
            </p>
          </motion.div>

          {/* Organic Coffee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold font-playfair text-center mb-12 text-coffee-gold">
              Premium Organic Coffee
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold">Honduran Single Origin</h4>
                <p className="text-coffee-cream leading-relaxed">
                  Grown at high altitude in the mountains of Honduras, our single-origin coffee 
                  beans are hand-picked at peak ripeness and sun-dried using traditional methods. 
                  The result is a rich, full-bodied coffee with notes of chocolate and caramel.
                </p>
                <ul className="space-y-2 text-coffee-cream">
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-coffee-gold" />
                    <span>Premium Grade Beans</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-coffee-gold" />
                    <span>Single Origin from Family Farms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-coffee-gold" />
                    <span>Organic Certified</span>
                  </li>
                </ul>
                <button className="btn-primary">Order Coffee</button>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Premium Coffee Beans"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Cold Brew Collection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold font-playfair text-center mb-12 text-coffee-gold">
              Cold Brew Collection
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Classic Black", description: "Smooth and bold, our signature cold brew" },
                { name: "Vanilla Cream", description: "Rich vanilla notes with creamy finish" },
                { name: "Caramel Macchiato", description: "Sweet caramel with espresso undertones" },
                { name: "Mocha Delight", description: "Chocolate and coffee in perfect harmony" },
                { name: "Cinnamon Spice", description: "Warm spices with a refreshing kick" },
              ].map((brew, index) => (
                <motion.div
                  key={brew.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-20 h-20 bg-coffee-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Coffee className="h-10 w-10 text-coffee-black" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-coffee-gold">{brew.name}</h4>
                  <p className="text-coffee-cream">{brew.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-coffee-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="text-xl text-coffee-cream max-w-3xl mx-auto">
              Ready to experience the finest coffee? Contact us to place your order or learn more about our products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="glass p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-coffee-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-coffee-gold">Phone</h4>
                  <p className="text-coffee-cream">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="glass p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-coffee-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-coffee-gold">Email</h4>
                  <p className="text-coffee-cream">orders@cartagenascoffee.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="glass p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-coffee-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-coffee-gold">Location</h4>
                  <p className="text-coffee-cream">Honduras & United States</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-coffee-gold font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-coffee-black/50 border border-coffee-gold/30 rounded-lg text-white placeholder-coffee-cream focus:border-coffee-gold focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-coffee-gold font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-coffee-black/50 border border-coffee-gold/30 rounded-lg text-white placeholder-coffee-cream focus:border-coffee-gold focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-coffee-gold font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-coffee-black/50 border border-coffee-gold/30 rounded-lg text-white placeholder-coffee-cream focus:border-coffee-gold focus:outline-none"
                    placeholder="Tell us about your coffee needs..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-black py-12">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Coffee className="h-8 w-8 text-coffee-gold" />
              <span className="text-2xl font-bold font-playfair text-gradient">
                Cartagena's Coffee
              </span>
            </div>
            <p className="text-coffee-cream mb-4">
              Premium Honduran Coffee & Cold Brews
            </p>
            <p className="text-coffee-cream/70 text-sm">
              © 2024 Cartagena's Coffee. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
