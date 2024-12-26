import React from 'react';

interface ProjectStatsProps {
  level: number;
  unc: string;
  type: 'UNC' | 'sUNC';
  type2: 'External' | 'Internal';
}

const ProjectStats: React.FC<ProjectStatsProps> = ({ level, unc, type, type2 }) => (
  <div className="flex gap-4 mb-4">
    <div className="bg-gray-800 rounded-lg p-3">
      <span className="text-gray-400 text-sm">Level</span>
      <p className="text-white font-bold">{level}</p>
    </div>
    <div className="bg-gray-800 rounded-lg p-3">
      <span className="text-gray-400 text-sm">{type}</span>
      <p className="text-white font-bold">{unc}</p>
    </div>
    <div className="bg-gray-800 rounded-lg p-3">
      <span className="text-gray-400 text-sm">Type</span>
      <p className="text-white font-bold">{type2}</p>
    </div>
    
  </div>
);

export default ProjectStats;