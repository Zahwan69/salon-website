import React from 'react';
import TeamCard from '../components/TeamCard';

const teamMembers = [
    {id: 1, name: "JESS", title: "Pro esthetician", specialty: "Great hair stylist", image: "jess.jpg"},
    {id: 2, name: "BARB", title: "Pro esthetician", specialty: "Great hair stylist", image: "jess.jpg"},
    {id: 3, name: "CONNIE", title: "Pro esthetician", specialty: "Great hair stylist", image: "jess.jpg"},
];

const TeamsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-extrabold text-center mb-16 text-gray-800">
                    Meet Our Team
                </h1>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map(member =>(
                        <TeamCard
                            key={member.id}
                            name={member.name}
                            title={member.title}
                            specialty={member.specialty}
                            image={member.image}
                        />
                    ))}
                </div>
        
            </div>
        </div>
    );
};

export default TeamsPage;