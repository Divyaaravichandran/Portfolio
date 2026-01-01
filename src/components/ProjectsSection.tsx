import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Plane, Shield, Cpu, Mail, ShoppingCart } from 'lucide-react';

const projects = [
  {
    title: 'Travel Blogging Platform',
    description: 'A full-featured travel blog platform with blog creation, media upload, search/filter/sort functionality, and location tagging.',
    tech: ['React', 'Node.js', 'MongoDB'],
    icon: Plane,
    color: 'from-teal-500 to-emerald-500',
    category: 'Full Stack',
  },
  {
    title: 'Hostel Outpass System',
    description: 'Android application with real-time approval workflow, push notifications, and Firebase integration for hostel management.',
    tech: ['Java/Kotlin', 'Firebase', 'Android'],
    icon: Shield,
    color: 'from-orange-500 to-amber-500',
    category: 'Mobile',
  },
  {
    title: 'Smart Crop Advisory System',
    description: 'ML-powered system providing crop recommendations, weather-based suggestions, and pest management tips for farmers.',
    tech: ['Python', 'Machine Learning', 'Flask'],
    icon: Cpu,
    color: 'from-green-500 to-lime-500',
    category: 'AI/ML',
  },
  {
    title: 'AI Phishing Email Detector',
    description: 'NLP-based email scanning tool with risk scoring and AI classification to detect phishing attempts.',
    tech: ['Python', 'NLP', 'TensorFlow'],
    icon: Mail,
    color: 'from-red-500 to-rose-500',
    category: 'AI/ML',
  },
  {
    title: 'eCart Management System',
    description: 'E-commerce platform with product listing, cart management, and checkout simulation functionality.',
    tech: ['Angular', 'Node.js', 'MySQL'],
    icon: ShoppingCart,
    color: 'from-violet-500 to-purple-500',
    category: 'Full Stack',
  },
];

const categories = ['All', 'Full Stack', 'Mobile', 'AI/ML'];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="decorative-blob w-96 h-96 bg-primary/15 -left-48 top-1/4" />
      <div className="decorative-blob w-64 h-64 bg-secondary/20 right-0 bottom-20" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-badge mb-4">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my work spanning web development, mobile apps, and AI/ML solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-primary'
                  : 'bg-card text-muted-foreground hover:bg-muted border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              layout
              className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border card-hover"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                <project.icon className="text-white/30" size={80} />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
