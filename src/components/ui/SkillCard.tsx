import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  // Dynamically get the icon component
  const IconComponent = LucideIcons[skill.icon as keyof typeof LucideIcons];

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      className="bg-white rounded-lg p-3 flex flex-col items-center shadow-sm transition-all duration-300"
    >
      <div className="text-primary mb-2">
        {IconComponent && <IconComponent size={24} />}
      </div>
      <p className="text-sm font-medium text-center">{skill.name}</p>
    </motion.div>
  );
};

export default SkillCard;