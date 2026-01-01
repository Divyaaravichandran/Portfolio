import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Layers, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building responsive, modern websites with HTML, CSS, JavaScript, and frameworks like React. Clean code that looks great on any device.',
    color: 'bg-teal-light',
    iconColor: 'text-primary',
    features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimized'],
  },
  {
    icon: Layers,
    title: 'Full-Stack Projects',
    description: 'Complete applications with frontend, backend (Node.js), and databases (MongoDB, MySQL, SQLite). End-to-end solutions for your needs.',
    color: 'bg-yellow-light',
    iconColor: 'text-secondary',
    features: ['API Development', 'Database Design', 'Authentication'],
  },
  {
    icon: GraduationCap,
    title: 'Student Projects & Freelancing',
    description: 'Assistance with academic projects or freelance tasks, delivering functional solutions with clean, maintainable code.',
    color: 'bg-purple-light',
    iconColor: 'text-accent',
    features: ['Academic Projects', 'Code Documentation', 'Technical Support'],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="decorative-blob w-72 h-72 bg-primary/20 -right-36 bottom-0" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
            What I Can{' '}
            <span className="gradient-text">Do For You</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From concept to deployment, I offer comprehensive development services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group bg-card rounded-3xl p-8 shadow-card border border-border card-hover relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={service.iconColor} size={32} />
                </div>
                
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-200"
                >
                  Get Started
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
