import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const pastEvents = [
  {
    id: '1',
    title: 'Annual Hackathon 2023',
    date: 'November 15-16, 2023',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    description: 'A 24-hour coding marathon where students built innovative solutions.',
    participants: 150,
  },
  {
    id: '2',
    title: 'Web Development Workshop',
    date: 'October 5, 2023',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    description: 'Hands-on workshop covering modern web development technologies.',
    participants: 80,
  },
  {
    id: '3',
    title: 'AI/ML Bootcamp',
    date: 'September 20, 2023',
    thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    description: 'Intensive training on artificial intelligence and machine learning concepts.',
    participants: 100,
  },
  {
    id: '4',
    title: 'Competitive Programming Contest',
    date: 'August 12, 2023',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    description: 'A challenging coding competition testing algorithmic skills.',
    participants: 120,
  },
  {
    id: '5',
    title: 'Tech Talk Series',
    date: 'July 25, 2023',
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    description: 'Industry experts sharing insights on emerging technologies.',
    participants: 200,
  },
  {
    id: '6',
    title: 'Mobile App Development Workshop',
    date: 'June 15, 2023',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    description: 'Learning mobile app development using React Native.',
    participants: 90,
  },
];

function PastEvents() {
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

        <h1 className="text-4xl font-bold mb-12 text-center">Past Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => navigate(`/past-events/${event.id}`)}
            >
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-700">{event.description}</p>
                <p className="text-blue-600 mt-4">{event.participants} Participants</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PastEvents;