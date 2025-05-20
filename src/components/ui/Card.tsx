import {
  Leaf,
  Zap,
  Recycle,
  Droplet,
  CarFront,
  Wheat,
} from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon?: "enerji" | "su" | "atik" | "gida" | "ulasim" | "iklim";
}

const iconMap = {
  enerji: <Zap size={50} className="text-primary group-hover:text-surface" />,
  su: <Droplet size={50} className="text-primary group-hover:text-surface" />,
  atik: <Recycle size={50} className="text-primary group-hover:text-surface" />,
  gida: <Wheat size={50} className="text-primary group-hover:text-surface" />,
  ulasim: (
    <CarFront size={50} className="text-primary group-hover:text-surface" />
  ),
  iklim: <Leaf size={50} className="text-primary group-hover:text-surface" />,
};

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="border border-content rounded-lg p-4 cursor-pointer hover:bg-primary hover:border-primary group transition duration-300 ease-in-out">
      <div className="flex items-center mb-4 gap-2">
        {icon && iconMap[icon]}
        <h2 className="text-lg font-semibold text-content group-hover:text-surface transition-colors duration-300  ease-in-out">
          {title}
        </h2>
      </div>
      <p className="text-sm text-content/70 mb-4 group-hover:text-surface transition duration-300 ease-in-out">
        {description}
      </p>
    </div>
  );
};

export default Card;
