import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Users, Calendar, Target, ChevronLeft, ChevronRight, Clock, AlertCircle, Linkedin, Instagram } from 'lucide-react';
import flutterflowImage from '../assets/team/workshop2024.jpg';
import techTitansImage from '../assets/team/techtitans.jpg';

const pastEvents = [
  {
    title: "A One-Day FlutterFlow Workshop 2024",
    date: "25th October, 2024",
    description: "Workshop Focus: Building Mobile Apps using FlutterFlow, a no-code/low-code platform."
  }
];

const futureEvents = [
  {
    title: "Hackathon 2025",
    date: "March 20, 2025",
    description: "Join us for Hackathon 2025, where creativity meets innovation! Collaborate with teams, brainstorm unique ideas, and work on projects that make a real-world impact. Don't miss this chance to network, learn, and showcase your skills."
  }
];

const events = [
  {
    title: "Hackathon 2025",
    image: "https://upevents.nl/wp-content/blogs.dir/1/files/2020/05/Corona-Proof-Activities-Hackathon-1920x1080.png",
    date: "March 20, 2025",
    registrationUrl: "https://unstop.com/hackathon",
    registrationDeadline: "March 10, 2025"
  },
  {
    title: "FlutterFlow Workshop",
    image: flutterflowImage,
    date: "October 25, 2024"
  },
  {
    title: "Tech Titans",
    image: techTitansImage,
    // date: "25th October, 2026"
  
  }
];

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
    name: "Vrushabh Shelokar", 
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

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [daysLeft, setDaysLeft] = useState(0); // ✅ Initialize state properly
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const eventDate = new Date("2025-02-16T23:59:59"); // Set your actual event date
    const today = new Date();

    const timeDiff = eventDate.getTime() - today.getTime();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // setDaysLeft(days > 0 ? days : 0); // ✅ Prevent negative values
    setDaysLeft(days > 0 ? days : 0);

  }, []); // Run only once
  useEffect(() => {
  
    if (daysLeft <1) { // ✅ Start countdown when today is the event day
      const deadline = new Date("2025-02-16T23:59:59");
      deadline.setHours(23, 59, 59, 999);
  
      const countdownTimer = setInterval(() => {
        const now = new Date();
        const timeDiff = deadline.getTime() - now.getTime();
  
        if (timeDiff <= 0) {
          clearInterval(countdownTimer);
          setCountdown({ hours: 0, minutes: 0, seconds: 0 });
        } else {
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
          setCountdown({ hours, minutes, seconds });
        }
      }, 1000);
  
      return () => clearInterval(countdownTimer);
    }
  }, [daysLeft]); // ✅ Trigger countdown when `daysLeft` updates
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentSlide];
  const showRegistration = currentEvent.registrationUrl && currentEvent.registrationDeadline;
  const showCountdown = daysLeft === 0;



  return (
    <>
      {/* Hero Section with Slider */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
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
                              {showCountdown ? (
                                <span className="font-mono">
                                  {countdown.hours.toString().padStart(2, '0')}:
                                  {countdown.minutes.toString().padStart(2, '0')}:
                                  {countdown.seconds.toString().padStart(2, '0')}
                                </span>
                              ) : (
                                `${daysLeft} days left`
                              )}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Hackathon 2025</h2>
            <p className="text-xl text-blue-100 mb-8">
              Showcase your coding skills, solve real-world problems, and win exciting prizes!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">₹22,000+</h3>
                <p className="text-blue-200">in Prizes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">12 Hours</h3>
                <p className="text-blue-200">of Coding</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {showCountdown ? (
                    <span className="font-mono">
                      {countdown.hours.toString().padStart(2, '0')}:
                      {countdown.minutes.toString().padStart(2, '0')}:
                      {countdown.seconds.toString().padStart(2, '0')}
                    </span>
                  ) : (
                    `${daysLeft} Days`
                  )}
                </h3>
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
                    {showCountdown ? (
                      <span className="font-mono">
                        {countdown.hours.toString().padStart(2, '0')}:
                        {countdown.minutes.toString().padStart(2, '0')}:
                        {countdown.seconds.toString().padStart(2, '0')}
                      </span>
                    ) : (
                      `${daysLeft}d left`
                    )}
                  </span>
                </a>
              </div>
              <div className="flex items-center text-yellow-300 text-sm">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span>Limited slots available! Register before March 10, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 dark:text-white">About Sipna Coder’s Club</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              We are a community of passionate programmers, developers, and tech enthusiasts
              dedicated to fostering innovation and technical excellence.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Code2 className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Learn</h3>
                <p className="text-gray-600 dark:text-gray-300">Master new technologies and programming concepts</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Connect</h3>
                <p className="text-gray-600 dark:text-gray-300">Network with like-minded tech enthusiasts</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Target className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Grow</h3>
                <p className="text-gray-600 dark:text-gray-300">Build projects and advance your career</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Events</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => navigate('/past-events')}
            >
              <Calendar className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Past Events</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {pastEvents.map((event, index) => (
                  <li key={index} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {event.title} - {event.date}
                  </li>
                ))}
              </ul>
            </div>
            <div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => navigate('/future-events')}
            >
              <Calendar className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Upcoming Events</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {futureEvents.map((event, index) => (
                  <li key={index} className="hover:text-green-600 dark:hover:text-green-400">
                    {event.title} - {event.date}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Members Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Core Members</h2>
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
                  <h3 className="text-xl font-semibold text-center dark:text-white">{member.name}</h3>
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

