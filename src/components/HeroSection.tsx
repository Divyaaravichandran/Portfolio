import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Award } from 'lucide-react';
import profileImage from '@/assets/profile-divya.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[hsl(258,60%,55%)] via-[hsl(258,65%,50%)] to-[hsl(258,70%,45%)]">
      {/* Decorative circles */}
      <motion.div 
        className="absolute top-20 right-[15%] w-32 h-32 rounded-full border-2 border-white/10"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 right-[10%] w-20 h-20 rounded-full border-2 border-white/10"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-1/3 left-[5%] w-16 h-16 rounded-full bg-white/5"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating dots */}
      <motion.div 
        className="absolute top-40 right-32 w-3 h-3 rounded-full bg-teal-400"
        animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-yellow-400"
        animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glowing background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-400/40 to-blue-500/40 rounded-full blur-3xl scale-125"
                animate={{ scale: [1.2, 1.3, 1.2], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Image container */}
              <motion.div 
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Divya - Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Experience badge - top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-2 md:top-4 md:right-0 bg-white px-4 py-2 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">2+</div>
                    <div className="text-xs text-gray-500">Years Learning</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Award badge - bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute bottom-8 -left-4 md:bottom-12 md:-left-8 bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-2 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-white" />
                  <span className="font-semibold text-white text-sm">Passionate Coder</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 text-center lg:text-left"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <motion.div 
                className="w-2 h-2 bg-orange-400 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-white/90 text-sm font-medium">Available for freelance work</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <motion.span 
                className="text-yellow-300"
                animate={{ textShadow: ["0 0 20px rgba(253,224,71,0.3)", "0 0 40px rgba(253,224,71,0.5)", "0 0 20px rgba(253,224,71,0.3)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Divya,
              </motion.span>
              <br />
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                A Passionate Developer
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              A passionate developer dedicated to crafting professional, functional, and modern web experiences that make a difference.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a 
                href="#projects" 
                className="group inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { number: '5+', label: 'Projects' },
                { number: '10+', label: 'Technologies' },
                { number: '2+', label: 'Years Learning' },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-3xl font-display font-bold text-white"
                    whileHover={{ scale: 1.1, color: "#fde047" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-white/60">{stat.label}</div>
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
