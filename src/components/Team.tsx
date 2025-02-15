import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Linkedin, Instagram } from 'lucide-react';

const coreMembers = [
  { 
    name: "Anand Tayde", 
    role: "President", 
    image: "https://media.licdn.com/dms/image/v2/D5635AQHw8cqRoC849Q/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727291285065?e=1740117600&v=beta&t=r95hyjtnxiqUAhNcwN01Dy6EfA3eMh2TkiKnNvWBp0k",
    linkedin: "https://www.linkedin.com/in/anandtayde/",
    instagram: "https://www.instagram.com/mr_anand._.t/?hl=en"
  },
  { 
    name: "Pranav Raut", 
    role: "Vice President", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQEGnq1TXMaP1A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720788756740?e=1744848000&v=beta&t=dV8EFQedg9h-x_auWIjNtz4WGAGtPGXf1ThzCcE042k",
    linkedin: "https://www.linkedin.com/in/rautpranav13/",
    instagram: "https://www.instagram.com/raut.pranav13/?hl=en"
  },
  { 
    name: "Nishchay Sahu", 
    role: "Treasuree", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQHAgIuHA_7dMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694451636949?e=1744848000&v=beta&t=sbIq5EoBDyRzAVhtpUpuZSglfc6VILArRZ6WdbLTBpA",
    linkedin: "https://www.linkedin.com/in/nishchay-sahu-648625282/",
    instagram: "https://www.instagram.com/_nishchay_sahu/?hl=en"
  },
  { 
    name: "Disha Chauhan", 
    role: "Secretary", 
    image: "",
    linkedin: "https://www.linkedin.com/in/disha-chauhan-50742b259/",
    instagram: "https://www.instagram.com/disha_chauhan04/?hl=en"
  },
  { 
    name: "Roshan Avatirak", 
    role: "Public Relation Officer(PRO)", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQGbtd8AP6e4og/profile-displayphoto-shrink_400_400/B56ZSikwgdHsAg-/0/1737894333710?e=1744848000&v=beta&t=FnkvkaivVQXspeaGK1ElaQVXrDUdNLL_7K92pZZtrK4",
    linkedin: "https://www.linkedin.com/in/roshan-avatirak/",
    // instagram: ""
  },
  { 
    name: "Vrushabh Selokar", 
    role: "Public Relation Officer(PRO)", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQHbuAK0ekJikw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728185113978?e=1744848000&v=beta&t=ddzxTaobk_pYk1bIy3NvK51RuOMi-rOgl_MegpmEis4",
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
    image: "https://www.linkedin.com/in/apurva-pande-491b2129b/",
    linkedin: "https://www.linkedin.com/in/apurva-pande-491b2129b/",
    instagram: "https://www.instagram.com/apurvapande27/?hl=en"
  },
  { 
    name: "Prit Thombare", 
    role: "Executive Member", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQFM6AlD09epCQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721844801475?e=1744848000&v=beta&t=qhuBs2ttRL5MO7KC3mxDfiUw5uHGJ0HpmBBM0J42jXI",
    linkedin: "https://www.linkedin.com/in/prit-thombare-6b741a296/",
    instagram: "https://www.instagram.com/gaauureeee/?hl=en"
  },
  { 
    name: "Ritesh Pawar", 
    role: "Executive Member", 
    image: "",
    linkedin: "",
    instagram: ""
  },
  { 
    name: "Nandita Sahu", 
    role: "Executive Member", 
    image: "",
    linkedin: "",
    instagram: ""
  },
  { 
    name: "Vaishnavi Jaiswal", 
    role: "Executive Member", 
    image: "https://media.licdn.com/dms/image/v2/D4E35AQGhL5Q8xJmP-w/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1729869995146?e=1740225600&v=beta&t=warHxwb6dzxMMkyXdDnIhU2SbHY4fRvhir9y8x3m46k",
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