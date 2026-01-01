import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const education = [
  {
    title: 'B.Tech in Information Technology',
    institution: 'Kongu Engineering College',
    period: '2023 - 2027',
    description: 'Pursuing my bachelor\'s degree with focus on software development and emerging technologies.',
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'Global Matric Higher Secondary School',
    period: '2022 - 2023',
    description: 'Completed higher secondary education with strong foundation in science and mathematics.',
  },
];

const experience = [
  {
    title: 'In-Plant Training - Artificial Intelligence',
    company: 'G TECH SPARK',
    period: '10 Days',
    description: 'Gained hands-on experience with AI concepts, machine learning fundamentals, and practical applications.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="decorative-blob w-72 h-72 bg-teal/30 -right-36 top-0" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
            My Journey &{' '}
            <span className="gradient-text">Background</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A glimpse into my educational journey and professional experience that shapes who I am today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/30 pb-6 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px]" />
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{item.institution}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-yellow-light flex items-center justify-center">
                <Briefcase className="text-secondary" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-secondary/30 pb-6 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-secondary -translate-x-[9px]" />
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                    <div className="flex items-center gap-2 text-secondary text-sm font-medium mb-2">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{item.company}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20"
            >
              <h4 className="font-semibold text-foreground mb-2">🚀 Always Learning</h4>
              <p className="text-muted-foreground text-sm">
                Beyond formal education, I'm constantly exploring new technologies through online courses, 
                personal projects, and community involvement. Currently focused on mastering full-stack development 
                and AI/ML applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
