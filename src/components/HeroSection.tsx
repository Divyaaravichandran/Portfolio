import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImage from '@/assets/profile-divya.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Decorative Elements */}
      <div className="decorative-blob w-96 h-96 bg-teal top-20 -left-48 animate-float" />
      <div className="decorative-blob w-64 h-64 bg-yellow -right-20 top-1/3 animate-float-delayed" />
      <div className="decorative-blob w-48 h-48 bg-purple bottom-20 left-1/4 animate-float" />
      
      {/* Decorative Shapes */}
      <svg className="absolute top-32 right-20 w-12 h-12 text-secondary animate-float hidden lg:block" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-40 left-20 w-16 h-16 text-accent animate-float-delayed hidden lg:block" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" rx="10" fill="currentColor" />
      </svg>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - Now on Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Background decoration */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl scale-110"
                animate={{ 
                  scale: [1.1, 1.2, 1.1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Image container */}
              <motion.div 
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profileImage}
                  alt="Divya - Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-4 -right-4 bg-card px-6 py-3 rounded-2xl shadow-card cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-foreground">Open to Work</span>
                </div>
              </motion.div>

              {/* Orbiting elements */}
              <motion.div
                className="absolute -top-4 left-1/2 w-8 h-8 bg-secondary rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  x: [-16, -16, -16]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/4 -left-6 w-6 h-6 bg-accent rounded-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Content - Now on Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="section-badge mb-6"
            >
              👋 Welcome to my Portfolio
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
            >
              Hello, I'm{' '}
              <motion.span 
                className="gradient-text inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Divya
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                A Passionate Developer
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              I'm a developer driven by curiosity and creativity, focused on crafting meaningful web experiences. I love exploring new technologies, solving problems, and continuously growing my skills. Building things that make an impact excites me.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                href="#projects" 
                className="btn-primary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn-outline inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <Download size={18} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-8 mt-12"
            >
              {[
                { number: '5+', label: 'Projects' },
                { number: '10+', label: 'Technologies' },
                { number: '2+', label: 'Years Learning' },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl font-display font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
