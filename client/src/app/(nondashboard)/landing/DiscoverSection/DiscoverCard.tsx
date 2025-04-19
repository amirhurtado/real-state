import { LucideIcon } from "lucide-react";

interface DiscoverCardProps {
  icon: LucideIcon
  title: string;
  description: string;
}

const DiscoverCard = ({
  icon : Icon,
  title,
  description,

}: DiscoverCardProps) => {
  return (
    <div className="p-4 w-full  flex flex-col items-center justify-center text-center shadow-lg ">
      
      <Icon strokeWidth={1} className="mb-4" size={40} />

      <h3 className="text-lg font-semibold mb-3 text-primary ">{title}</h3>
      <p className="text-sm mb-6 text-gray-500">{description}</p>

    </div>
  );
};

export default DiscoverCard;
