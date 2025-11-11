import React from'react';

const TeamCard = ({ name, title, specialty, image}) => {
    return (
        <div className=" flex flex-col items-center bg-black rounded-2xl shadow-sm 
                    p-8 transform hover:scale-[1.07] hover:shadow-sm 
                    transition duration-600">

        {/* 1. Image (Circular for a friendly, personal touch) */}
      {/* TODO: Place image files (jessica.jpg, etc.) in your 'public' folder */}
      <img 
        className="w-32 h-32 object-cover rounded-full border-4 border-pink-100 mb-4" 
        src={image || 'placeholder-person.jpg'} 
        alt={`Headshot of ${name}`} 
      />
      
      {/* 2. Name & Title */}
      <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-lg text-pink-600 font-semibold mb-3">{title}</p>
      
      {/* 3. Specialty/Tag */}
      <span className="bg-gray-100 text-gray-600 text-sm font-medium 
                       px-3 py-1 rounded-full">{specialty}</span>
      
    </div>
  );    
};

export default TeamCard;
    
