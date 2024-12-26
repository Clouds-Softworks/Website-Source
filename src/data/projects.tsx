import { Rocket, Code, Terminal, Layers } from 'lucide-react';
import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'Riviera',
    description: 'Roblox exploit with reliable execution and decent script support',
    detailedInfo: 'Riviera is a good choice for exploiting and it is relatively new.',
    icon: <Terminal className="w-6 h-6 text-white" />,
    gradient: 'from-light-gray-500 to-white-500',
    features: [
      'Stable with minimal crashes',
      'Updates to the current Roblox verion fast',
      'Script hub integration',
      'Beginner friendly interface'
    ],
    stats: {
      level: 3,
      unc: '45%',
      type: 'UNC',
      type2: 'External'
    }
  },
  {
    title: 'Interstellar',
    description: 'Premium-grade Roblox executor',
    detailedInfo: 'Interstellar is a great choice for users who want a decent executor at a low cost.',
    icon: <Rocket className="w-6 h-6 text-white" />,
    gradient: 'from-light-gray-500 to-white-500',
    features: [
      'Can execute almost any script',
      'Almost 0 env escapes',
      'Premium support for premium users',
      'Frequent updates'
    ],
    stats: {
      level: 7,
      unc: '94%',
      type: 'UNC',
      type2: 'External'
    }
  },
  {
    title: 'iAPI',
    description: 'Roblox cheat API',
    detailedInfo: 'iAPI provides users with an open source api to make executors with .',
    icon: <Code className="w-6 h-6 text-white" />,
    gradient: 'from-light-gray-500 to-white-500',
    features: [
      'Is not currently out',
      
    ],
    stats: {
      level: 3,
      unc: '46%',
      type: 'sUNC',
      type2: 'Internal'
    }
  },
  {
    title: 'Expect more soon!',
    description: '',
    detailedInfo: '',
    icon: <Layers className="text-white"/>,
    gradient: 'from-light-gray-500 to-white-500',
    features: [
      'Soon!'

    ]

  }
];
