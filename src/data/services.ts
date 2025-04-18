import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'AI Strategy Consulting',
    description: 'Developing comprehensive AI adoption strategies aligned with business goals to maximize ROI.',
    icon: 'lightbulb',
    details: 'Our AI Strategy Consulting service helps organizations identify the most impactful AI opportunities within their business. We conduct thorough assessments of your operations, data infrastructure, and business goals to develop a tailored AI roadmap. This includes prioritizing use cases, estimating ROI, planning resource requirements, and establishing governance frameworks to ensure ethical and responsible AI implementation.'
  },
  {
    id: 2,
    title: 'Workflow Automation',
    description: 'Creating custom automation solutions that eliminate repetitive tasks and streamline operations.',
    icon: 'cog',
    details: 'Our Workflow Automation services leverage AI to transform manual, time-consuming processes into efficient, automated workflows. We identify bottlenecks and repetitive tasks in your current operations, then design and implement automated solutions using a combination of RPA (Robotic Process Automation), machine learning algorithms, and integration with your existing systems. This results in significant time savings, reduced errors, and the ability to redirect human resources to higher-value activities.'
  },
  {
    id: 3,
    title: 'Custom AI Development',
    description: 'Building bespoke AI solutions tailored to specific business challenges and requirements.',
    icon: 'code',
    details: 'Our Custom AI Development service delivers purpose-built artificial intelligence solutions designed specifically for your unique business challenges. We take a full-lifecycle approach: from initial problem definition and data assessment through algorithm selection, model training, and deployment. Our team specializes in computer vision, natural language processing, predictive analytics, and recommendation systems, always focusing on creating explainable and maintainable AI systems that integrate seamlessly with your existing technology stack.'
  },
  {
    id: 4,
    title: 'AI Integration & Deployment',
    description: 'Seamlessly integrating AI solutions into existing systems and workflows for maximum impact.',
    icon: 'layers',
    details: 'Our AI Integration & Deployment service ensures your AI solutions work seamlessly with your existing technology ecosystem. We handle all aspects of the integration process, from API development and microservices architecture to data pipeline construction and cloud infrastructure setup. Our team follows DevOps best practices, implementing CI/CD pipelines for AI models that enable continuous improvement. We also provide comprehensive monitoring tools to track performance and maintain system health post-deployment.'
  }
];