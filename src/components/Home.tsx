import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Users, Calendar, Target, ChevronLeft, ChevronRight, Clock, AlertCircle, Linkedin, Instagram } from 'lucide-react';

const events = [
  {
    title: "Hackathon 2024",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
    date: "Coming Soon",
    registrationUrl: "https://unstop.com/hackathon",
    registrationDeadline: "March 10, 2024"
  },
  {
    title: "Code Workshop",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    date: "Next Month"
  },
  {
    title: "Tech Symposium",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
    date: "Planning Phase"
  }
];

const coreMembers = [
  { 
    name: "Roshan Avatirak", 
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
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/priya-patel",
    instagram: "https://instagram.com/priyapatel"
  },
  { 
    name: "James Lee", 
    role: "Web Master", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/james-lee",
    instagram: "https://instagram.com/jameslee"
  },
  { 
    name: "Nina Rodriguez", 
    role: "Design Lead", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/nina-rodriguez",
    instagram: "https://instagram.com/ninarodriguez"
  },
  { 
    name: "Ryan Chang", 
    role: "Content Creator", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/ryan-chang",
    instagram: "https://instagram.com/ryanchang"
  },
  { 
    name: "Maya Singh", 
    role: "Community Manager", 
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/maya-singh",
    instagram: "https://instagram.com/mayasingh"
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentSlide];
  const showRegistration = currentEvent.registrationUrl && currentEvent.registrationDeadline;
  const daysRemaining = showRegistration
    ? Math.ceil((new Date(currentEvent.registrationDeadline) - new Date()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <>
      {/* Hero Section with Slider */}
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          {events.map((event, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="container mx-auto h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">{event.title}</h1>
                    <p className="text-xl mb-8">{event.date}</p>
                    {showRegistration && (
                      <div className="space-y-4">
                        <div className="inline-block relative group">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                          <a
                            href={currentEvent.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg leading-none text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
                          >
                            <Clock className="w-5 h-5 mr-2" />
                            Register Now
                            <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded text-sm">
                              {daysRemaining} days left
                            </span>
                          </a>
                        </div>
                        <p className="text-yellow-400 text-sm animate-pulse">
                          ⚡ Limited slots available! Register before {currentEvent.registrationDeadline}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Registration Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-600/30 rounded-full px-4 py-2 mb-6">
              <Clock className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Registration Open</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Hackathon 2024</h2>
            <p className="text-xl text-blue-100 mb-8">
              Showcase your coding skills, solve real-world problems, and win exciting prizes!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">₹1,00,000</h3>
                <p className="text-blue-200">in Prizes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">24 Hours</h3>
                <p className="text-blue-200">of Coding</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">{daysRemaining} Days</h3>
                <p className="text-blue-200">to Register</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="inline-block relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <a
                  href="https://unstop.com/hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg leading-none text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  Register for Hackathon
                  <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded text-sm">
                    {daysRemaining}d left
                  </span>
                </a>
              </div>
              <div className="flex items-center text-yellow-300 text-sm">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span>Limited slots available! Register before March 10, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Sipna Coders Club</h2>
            <p className="text-lg text-gray-600 mb-12">
              We are a community of passionate programmers, developers, and tech enthusiasts
              dedicated to fostering innovation and technical excellence.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <Code2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Learn</h3>
                <p className="text-gray-600">Master new technologies and programming concepts</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Connect</h3>
                <p className="text-gray-600">Network with like-minded tech enthusiasts</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Grow</h3>
                <p className="text-gray-600">Build projects and advance your career</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Events</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div 
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => navigate('/past-events')}
            >
              <Calendar className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Past Events</h3>
              <ul className="space-y-2">
                <li>Annual Hackathon 2023</li>
                <li>Web Development Workshop</li>
                <li>AI/ML Bootcamp</li>
              </ul>
            </div>
            <div 
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => navigate('/future-events')}
            >
              <Calendar className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
              <ul className="space-y-2">
                <li>Coding Competition - March 2024</li>
                <li>Tech Talk Series - April 2024</li>
                <li>Summer Bootcamp - May 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Members Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Core Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-100 dark:ring-blue-900"
                  />
                  <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300 transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
