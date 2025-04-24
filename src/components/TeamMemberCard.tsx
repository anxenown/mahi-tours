// components/TeamMemberCard.tsx

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
      <div className=" relative">
        <img src={image} alt={name} className="h-full w-full object-cover " />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
