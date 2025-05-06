import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from './ProjectCard';
import Button from '../ui/Button';

const projects = [
  {
    id: '1',
    title: 'Local Bakery Website',
    description: 'Developed a responsive website for a local bakery, showcasing their products and services.',
    imageUrl: 'https://th.bing.com/th/id/OIP.N0TEN9wIteXihkDRAzrGRwHaEo?w=300&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    category: 'Web Development',
    technologies: ['React', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: '2',
    title: 'Restaurant Website Design',
    description: 'Designed and built a website for a local restaurant, including online menu and reservation system.',
    imageUrl: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    category: 'Web Development',
    technologies: ['Next.js', 'Contentful'],
    link: '#',
  },
  {
    id: '3',
    title: 'E-commerce Store for Local Art',
    description: 'Created an online store for a local artist to sell their artwork.',
    imageUrl: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg',
    category: 'Web Development',
    technologies: ['React', 'Shopify API'],
    link: '#',
  },
];

const Projects = ({ scrollToSection }) => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Our Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 border-blue-500/30"
            onClick={() => scrollToSection('projects')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;