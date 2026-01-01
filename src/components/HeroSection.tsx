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
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-badge mb-6"
            >
              👋 Welcome to my Portfolio
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
            >
              Hello, I'm{' '}
              <span className="gradient-text">Divya</span>
              <br />
              A Passionate Developer
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              I'm a developer driven by curiosity and creativity, focused on crafting meaningful web experiences. I love exploring new technologies, solving problems, and continuously growing my skills. Building things that make an impact excites me.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2">
                View Portfolio
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-outline inline-flex items-center justify-center gap-2">
                Contact Me
                <Download size={18} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12"
            >
              {[
                { number: '5+', label: 'Projects' },
                { number: '10+', label: 'Technologies' },
                { number: '2+', label: 'Years Learning' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-display font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card shadow-lg">
                <img
                  src={profileImage}
                  alt="Divya - Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-card px-6 py-3 rounded-2xl shadow-card"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-foreground">Open to Work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
