import { Rocket } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
  }

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="relative group p-6 rounded-xl border border-white/10 bg-muted/50 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(76,175,80,0.3)] overflow-hidden">
      
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-secondary/20 to-transparent rounded-br-full pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-4 text-secondary group-hover:rotate-6 transition-transform duration-300">
          {icon || <Rocket size={32} />}
        </div>
        <h3 className="font-Poppins text-lg text-white font-semibold mb-2">
          {title || "Título do Card"}
        </h3>
        <p className="text-gray-300 text-sm">
          {description || "Descrição breve e clara do conteúdo ou funcionalidade apresentada neste card."}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
