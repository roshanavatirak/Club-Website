import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Linkedin, Instagram } from 'lucide-react';

const coreMembers = [
  { 
    name: "Alex Johnson", 
    role: "President", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/alex-johnson",
    instagram: "https://instagram.com/alexjohnson"
  },
  { 
    name: "Sarah Chen", 
    role: "Vice President", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/sarah-chen",
    instagram: "https://instagram.com/sarahchen"
  },
  { 
    name: "Mike Zhang", 
    role: "Technical Lead", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/mike-zhang",
    instagram: "https://instagram.com/mikezhang"
  },
  { 
    name: "Emma Davis", 
    role: "Event Coordinator", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/emma-davis",
    instagram: "https://instagram.com/emmadavis"
  },
  { 
    name: "David Kim", 
    role: "Secretary", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/david-kim",
    instagram: "https://instagram.com/davidkim"
  },
  { 
    name: "Lisa Wang", 
    role: "Treasurer", 
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/lisa-wang",
    instagram: "https://instagram.com/lisawang"
  },
  { 
    name: "Tom Wilson", 
    role: "Marketing Head", 
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/tom-wilson",
    instagram: "https://instagram.com/tomwilson"
  },
  { 
    name: "Priya Patel", 
    role: "Technical Writer", 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/priya-patel",
    instagram: "https://instagram.com/priyapatel"
  },
  { 
    name: "James Lee", 
    role: "Web Master", 
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/james-lee",
    instagram: "https://instagram.com/jameslee"
  },
  { 
    name: "Nina Rodriguez", 
    role: "Design Lead", 
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/nina-rodriguez",
    instagram: "https://instagram.com/ninarodriguez"
  },
  { 
    name: "Ryan Chang", 
    role: "Content Creator", 
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/ryan-chang",
    instagram: "https://instagram.com/ryanchang"
  },
  { 
    name: "Maya Singh", 
    role: "Community Manager", 
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/maya-singh",
    instagram: "https://instagram.com/mayasingh"
  }
];

function Team() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-12 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Our Team</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {coreMembers.map((member, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover ring-4 ring-gray-100 dark:ring-gray-700"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4 font-medium">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300 transition-colors p-2 hover:bg-pink-100 dark:hover:bg-pink-900/30 rounded-full"
                    aria-label={`${member.name}'s Instagram`}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creator Credit */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            Created by{' '}
            <a
              href="https://www.linkedin.com/in/roshan-avatirak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              Roshan Avatirak
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;