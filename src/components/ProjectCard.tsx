import React, { useState } from 'react';
import type { Project } from '../types/project';
import Modal from './Modal';
import ProjectStats from './ProjectStats';

const ProjectCard = ({ title, description, detailedInfo, icon, gradient, features, stats }: Project) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
        <div className="relative p-8 h-full min-h-[300px] flex flex-col">
          <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl w-fit mb-6`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="mt-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-gray-300 hover:text-white font-medium inline-flex items-center group/btn"
            >
              Learn more
              <svg 
                className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl w-fit mb-4`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        {stats && <ProjectStats {...stats} />}
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">{detailedInfo}</p>
          <h4 className="text-white mt-4 mb-2">Key Features</h4>
          <ul className="text-gray-300">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;