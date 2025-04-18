import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We begin by thoroughly understanding your business challenges, goals, and current processes through stakeholder interviews and data analysis.',
    icon: 'search'
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'Based on our findings, we develop a comprehensive AI strategy with prioritized use cases and a clear implementation roadmap.',
    icon: 'map'
  },
  {
    id: 3,
    title: 'Development',
    description: 'Our technical team designs and builds custom AI solutions using cutting-edge technologies and agile methodologies.',
    icon: 'code-2'
  },
  {
    id: 4,
    title: 'Integration',
    description: 'We seamlessly integrate the AI solution into your existing systems and workflows, ensuring minimal disruption.',
    icon: 'plug'
  },
  {
    id: 5,
    title: 'Optimization',
    description: 'Through continuous monitoring and iteration, we ensure your AI solution performs optimally and adapts to changing conditions.',
    icon: 'activity'
  }
];