import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Our Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore all of our projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;