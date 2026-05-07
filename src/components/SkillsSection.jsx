import { motion, warning } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Globe, Wrench, Brain, Sparkles, Spade } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'bg-teal-light',
    iconColor: 'text-primary',
    skills: ['Java', 'C', 'SQL', 'JavaScript'],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    color: 'bg-yellow-light',
    iconColor: 'text-secondary',
    skills: ['HTML', 'CSS', 'Tailwind', 'React'],
  },
  {
  title: 'Cloud', 
  icon: Sparkles, 
  color: 'bg-teal-light', 
  iconColor: 'text-primary', 
  skills: ['AWS', 'Netlify','Render'],  
  },
  {
    title: 'Soft Skills',
    icon: Brain,
    color: 'bg-blue-light',
    iconColor: 'text-blue-500',
    skills: ['Leadership', 'Adaptability', 'Logical Thinking', 'Time Management'],
  },
  {
    title: 'Tools & Frameworks',
    icon: Wrench,
    color: 'bg-purple-light',
    iconColor: 'text-accent',
    skills: ['Node.js & Express.js', 'MongoDB', 'MySQL', 'Git & GitHub', 'VS Code'],
  },
  {
    title: 'Core CS Concepts',
    icon: Code,
    color: 'bg-purple-light',
    iconColor: 'text-accent',
    skills: ['DBMS', 'OOPS', 'CN Basics', 'DSA Basics'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="decorative-blob w-80 h-80 bg-purple/20 -left-40 bottom-0" />
      <div className="decorative-blob w-64 h-64 bg-yellow/20 right-20 top-20" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">My Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
            Technologies I{' '}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                  <category.icon className={category.iconColor} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
