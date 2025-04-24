// components/TeamSection.tsx
import Image from "next/image";
import TeamMemberCard from "./TeamMemberCard";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Ashwini Dubey",
      role: "CEO & Founder",
      image: "/images/ashwini.jpg/",
    },
    {
      name: "Ankit Dubey",
      role: "Tour Director",
      image: "/images/ankit.jpg/",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
