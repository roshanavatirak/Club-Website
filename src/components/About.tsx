import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Code2, Users, Target, Rocket, Book, Trophy, Briefcase, Globe } from 'lucide-react';

function About() {
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

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">About Sipna Coder’s Club</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering students to become exceptional developers and innovators through hands-on learning,
            collaboration, and real-world projects.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-300">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To create a vibrant ecosystem of tech innovators and leaders who will shape the future of technology. 
                We strive to bridge the gap between academic learning and industry demands by fostering practical 
                skills, innovation, and professional growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To nurture technical excellence and innovation through:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <Rocket className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  Practical skill development
                </li>
                <li className="flex items-center">
                  <Book className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  Industry-aligned learning
                </li>
                <li className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  Competitive programming
                </li>
                <li className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  Career preparation
                </li>
                <li className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  Global tech community engagement
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Code2 className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">Technical Excellence</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Advanced coding workshops</li>
                <li>• Project-based learning</li>
                <li>• Latest technology exposure</li>
                <li>• Hands-on training sessions</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">Community & Network</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Peer learning groups</li>
                <li>• Industry mentorship</li>
                <li>• Alumni connections</li>
                <li>• Team collaborations</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Target className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">Career Growth</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Interview preparation</li>
                <li>• Resume building</li>
                <li>• Industry exposure</li>
                <li>• Internship guidance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Activities & Programs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Activities & Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Technical Activities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg mr-4">
                    <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </span>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">Coding Competitions</h4>
                    <p className="text-gray-600 dark:text-gray-300">Regular contests to enhance problem-solving skills</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg mr-4">
                    <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </span>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">Hackathons</h4>
                    <p className="text-gray-600 dark:text-gray-300">24-hour coding marathons for innovative solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg mr-4">
                    <Book className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </span>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">Tech Workshops</h4>
                    <p className="text-gray-600 dark:text-gray-300">Hands-on sessions on emerging technologies</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Professional Development</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-yellow-100 dark:bg-yellow-900/50 p-2 rounded-lg mr-4">
                    <Briefcase className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </span>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">Career Guidance</h4>
                    <p className="text-gray-600 dark:text-gray-300">Expert advice on career paths and opportunities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 dark:bg-red-900/50 p-2 rounded-lg mr-4">
                    <Users className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </span>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">Mock Interviews</h4>
                    <p className="text-gray-600 dark:text-gray-300">Practice sessions with industry professionals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-lg mr-4">
                    <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">Industry Connect</h4>
                    <p className="text-gray-600 dark:text-gray-300">Networking events with tech companies</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto px-4">
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
      </div> */}
    </div>
  );
}

export default About;