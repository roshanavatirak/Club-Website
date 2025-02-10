import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';

const futureEvents = [
  {
    id: '1',
    title: 'Coding Competition 2024',
    date: 'March 15-16, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    description: 'A competitive coding event featuring algorithmic challenges and problem-solving tasks.',
    expectedParticipants: 200,
    registrationDeadline: 'March 10, 2024',
    registrationUrl: 'https://unstop.com/hackathon'
  },
  {
    id: '2',
    title: 'Tech Talk Series',
    date: 'April 5-7, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    description: 'Three days of insightful talks from industry experts on emerging technologies.',
    expectedParticipants: 150,
    registrationDeadline: 'April 1, 2024',
    registrationUrl: 'https://unstop.com/hackathon'
  },
  {
    id: '3',
    title: 'Summer Bootcamp 2024',
    date: 'May 1-15, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    description: 'Intensive two-week bootcamp covering web development, mobile apps, and cloud computing.',
    expectedParticipants: 100,
    registrationDeadline: 'April 20, 2024',
    registrationUrl: 'https://unstop.com/hackathon'
  },
  {
    id: '4',
    title: 'Blockchain Workshop',
    date: 'June 10, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    description: 'Learn about blockchain technology and build your first smart contract.',
    expectedParticipants: 80,
    registrationDeadline: 'June 5, 2024',
    registrationUrl: 'https://unstop.com/hackathon'
  },
  {
    id: '5',
    title: 'AI/ML Conference',
    date: 'July 20, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    description: 'Conference focusing on the latest developments in AI and Machine Learning.',
    expectedParticipants: 250,
    registrationDeadline: 'July 15, 2024',
    registrationUrl: 'https://unstop.com/hackathon'
  },
  {
    id: '6',
    title: 'Hackathon 2024',
    date: 'August 15-16, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    description: 'Annual hackathon event with exciting themes and amazing prizes.',
    expectedParticipants: 300,
    registrationDeadline: 'August 10, 2024',
    registrationUrl: 'https://unstop.com/hackathon'
  },
];

function FutureEvents() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureEvents.map((event) => {
            const daysRemaining = Math.ceil(
              (new Date(event.registrationDeadline) - new Date()) / (1000 * 60 * 60 * 24)
            );

            return (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <p className="text-green-600">Expected Participants: {event.expectedParticipants}</p>
                    <p className="text-red-600">Registration Deadline: {event.registrationDeadline}</p>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() => navigate(`/future-events/${event.id}`)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View Details
                    </button>
                    
                    {event.registrationUrl && (
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        Register
                        <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded text-sm">
                          {daysRemaining}d
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FutureEvents;