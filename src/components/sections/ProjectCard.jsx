import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/10 hover:shadow-lg hover:scale-[1.01] hover:border-blue-500/20">
        <div className="relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <CardHeader>
          <CardTitle className="text-white text-xl">{project.title}</CardTitle>
          <CardDescription className="text-gray-300 line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <Button
            asChild
            variant="link"
            className="text-blue-400 pl-0 hover:text-blue-300"
          >
            <a 
            href={project.link} 
            aria-label={`View project: ${project.title}`}
             target="_blank"
            >
              View Project <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;