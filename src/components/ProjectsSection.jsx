import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Plane, Shield, Cpu, Mail, ShoppingCart, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'Travel Blogging Platform',
    description: 'A full-featured travel blog platform with blog creation, media upload, search/filter/sort functionality, and location tagging.',
    tech: ['React', 'Node.js', 'MongoDB'],
    icon: Plane,
    color: 'from-teal-500 to-emerald-500',
    category: 'Full Stack',
    github: 'https://github.com/Divyaaravichandran/travel-blog',
  },
  {
    title: 'Hostel Outpass System',
    description: 'Android application with real-time approval workflow, push notifications, and Firebase integration for hostel management.',
    tech: ['Java/Kotlin', 'Firebase', 'Android'],
    icon: Shield,
    color: 'from-orange-500 to-amber-500',
    category: 'Mobile App',
    github: 'https://github.com/Divyaaravichandran/hostel-outpass-system',
  },
  {
    title: 'Smart Crop Advisory System',
    description: 'ML-powered system providing crop recommendations, weather-based suggestions, and pest management tips for farmers.',
    tech: ['Python', 'Machine Learning', 'Flask'],
    icon: Cpu,
    color: 'from-green-500 to-lime-500',
    category: 'AI/ML',
    github: 'https://github.com/Divyaaravichandran/Smart-crop-advisory-system',
  },
  {
    title: 'AI Phishing Email Detector',
    description: 'NLP-based email scanning tool with risk scoring and AI classification to detect phishing attempts.',
    tech: ['Python', 'NLP', 'TensorFlow'],
    icon: Mail,
    color: 'from-red-500 to-pink-500',
    category: 'AI/ML',
    github: 'https://github.com/Divyaaravichandran/CyberSecurity',
  },
  {
    title: 'Inventory Management System',
    description: 'A full-stack inventory system for managing rice stock, supplier details, and sales tracking with real-time updates and reporting features.',
    tech: ['React', 'MongoDB', 'JavaScript'],
    icon: ShoppingCart,
    color: 'from-blue-500 to-cyan-500',
    category: 'Web Application',
    github: 'https://github.com/Divyaaravichandran/Inventory_app',
  },
  {
    title: 'Intelligence Expense & Bill Management Platform',
    description: 'Developed an intelligent financial management system to automate expense tracking, bill processing, and provide real-time business insights through interactive dashboards and analytics.',
    tech: ['React', 'MongoDB', 'Hugging Face', 'AWS'],
    icon: BarChart3,
    color: 'from-indigo-500 to-violet-500',
    category: 'Web Application',
    github: 'https://github.com/Divyaaravichandran/ExpenseTracker',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my work spanning web development, mobile apps, and AI/ML solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border card-hover"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                <project.icon className="text-white/30" size={80} />

                <div className="absolute top-4 right-4 flex gap-2">
                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Github size={18} />
                  </a>

                  {/* External Link (optional for live demo later) */}
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                  {project.category}
                </span>
              </div>

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