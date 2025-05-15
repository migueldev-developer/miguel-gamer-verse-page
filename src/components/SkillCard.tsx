
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const SkillCard = ({ name, description, icon: Icon, color }: SkillCardProps) => {
  return (
    <div className="gamer-card group">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-russo mb-2 group-hover:text-gamer-purple transition-colors">{name}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default SkillCard;
