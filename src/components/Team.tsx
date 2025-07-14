import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Linkedin, Instagram } from 'lucide-react';
import anandimg from '../assets/team/anand.jpg'
import vrushabhimg from '../assets/team/Vrushabh.jpg'
import dishaimg from '../assets/team/Disha.jpg'
import vaishnviimg from '../assets/team/vaishnavi.jpg'
import apurvaimg from '../assets/team/Apurva.jpg'
import ritesh from '../assets/team/Ritesh.jpg'
import nandita from '../assets/team/Nandita.jpg'
import nishchay from '../assets/team/nishchay.jpg'

const coreMembers = [
  { 
    name: "Anand Tayde", 
    role: "President", 
    image: anandimg,
    linkedin: "https://www.linkedin.com/in/anandtayde/",
    instagram: "https://www.instagram.com/mr_anand._.t/?hl=en"
  },
  { 
    name: "Pranav Raut", 
    role: "Vice President", 
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHZTxv65cbZ5Q/profile-displayphoto-shrink_400_400/B4EZVkWWgkHUAg-/0/1741145337418?e=1747267200&v=beta&t=pdyhgo44vuzG9BZ_k2K8uxayPXxxK0qpfACJXmODA44",
    linkedin: "https://www.linkedin.com/in/rautpranav13/",
    instagram: "https://www.instagram.com/raut.pranav13/?hl=en"
  },
  { 
    name: "Nishchay Sahu", 
    role: "Treasurer", 
    image: nishchay,
    linkedin: "https://www.linkedin.com/in/nishchay-sahu-648625282/",
    instagram: "https://www.instagram.com/_nishchay_sahu/?hl=en"
  },
  { 
    name: "Disha Chauhan", 
    role: "Secretary", 
    image: dishaimg,
    linkedin: "https://www.linkedin.com/in/disha-chauhan-50742b259/",
    instagram: "https://www.instagram.com/disha_chauhan04/?hl=en"
  },
  { 
    name: "Roshan Avatirak", 
    role: "Public Relation Officer(PRO)", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQGUhq3OGxTMTg/profile-displayphoto-shrink_400_400/B56ZYPtbvXGoAk-/0/1744020291660?e=1758153600&v=beta&t=s96Jvzj0z4FoRoKZeLf8x_jDQYdkZIaQ6ImEPTGOx1s",
    linkedin: "https://www.linkedin.com/in/roshan-avatirak/",
    // instagram: ""
  },
  { 
    name: "Vrushabh Shelokar", 
    role: "Public Relation Officer(PRO)", 
    image: vrushabhimg,
    linkedin: "https://www.linkedin.com/in/vrushabh-shelokar-786427314/",
    instagram: "https://www.instagram.com/vrush_459/?hl=en"
  },
  { 
    name: "Pratik Dhokne", 
    role: "Technical Head", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQFOjMzi0x10hA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728919202228?e=1744848000&v=beta&t=desCndH3-hDVNfhL66Ep6PkdUUi9j8EtzNDy2kBRXr8",
    linkedin: "https://www.linkedin.com/in/pratikdhokne/",
    instagram: "https://www.instagram.com/pratikdhokne/?hl=en"
  },
  { 
    name: "Apurva Pande", 
    role: "Executive Member(Head)", 
    image: apurvaimg,
    linkedin: "https://www.linkedin.com/in/apurva-pande-491b2129b/",
    instagram: "https://www.instagram.com/apurvapande27/?hl=en"
  },
  { 
    name: "Prit Thombare", 
    role: "Executive Member", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQHu_La6ZByesg/profile-displayphoto-shrink_400_400/B56ZVRiEk6GsAk-/0/1740829642741?e=1747267200&v=beta&t=j8HEGoMnh9KFaekpjdk_RdhvKfqq8O8-MbGcpkJCEY0",
    linkedin: "https://www.linkedin.com/in/prit-thombare-6b741a296/",
    instagram: "https://www.instagram.com/gaauureeee/?hl=en"
  },
  { 
    name: "Ritesh Pawar", 
    role: "Executive Member", 
    image: ritesh,
    linkedin: "",
    instagram: "https://www.instagram.com/ritesh_deshmukh_26?utm_source=qr&igsh=aHhpM3Z0bnFjYzl0"
  },
  { 
    name: "Nandita Sahu", 
    role: "Executive Member", 
    image: nandita,
    linkedin: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=nandita-sahu-97923a333",
    instagram: "https://www.instagram.com/__nanditasahu_?utm_source=qr&igsh=eTJrdTl1NmtyMHcy"
  },
  { 
    name: "Vaishnavi Jaiswal", 
    role: "Executive Member", 
    image: vaishnviimg,
    linkedin: "https://www.linkedin.com/in/vaishnavi-jaiswal-570915300/",
    instagram: "https://www.instagram.com/_vaishnavi_12.7/?hl=en"
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
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none"  />
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
        {/* <div className="text-center mt-12">
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
        </div> */}
      </div>
    </div>
  );
}

export default Team;