import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import F1 from '../assets/flutterflow/F1.jpg';
import F2 from '../assets/flutterflow/F2.jpg';
import F3 from '../assets/flutterflow/F3.jpg';
import F4 from '../assets/flutterflow/F4.jpg';

const eventDetails = {
  '1': {
    title: 'FlutterFlow Workshop',
    date: 'October 25, 2024',
    description: `The Flutter Flow Workshop provided an immersive hands-on experience, guiding participants in building a WhatsApp Clone using Flutter Flow’s powerful no-code platform. Attendees learned to design intuitive UI, integrate real-time chat functionality, and implement user authentication seamlessly. This workshop empowered participants with practical knowledge of app development, helping them create a fully functional project with ease.`,
    participants: '100+',
    venue: 'Sipna College of Engineering & Technology',
    organizers: ['Sipna Coder’s Club'],
    sponsors: ['NA'],
    images: [
      F1,
      F2,
      F3,
      F4,
    ],
    highlights: [
      'Introduction to Flutter Flow – No-code app development basics',
      'Designed & developed a WhatsApp-like UI with smooth navigation',
      'Integrated real-time chat functionality with backend support',
      'Explored database integration and scalability best practices',
      'Hands-on coding exercises & live project implementation',
      
      ],
  },
  // Add more
};

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // const event = id ? eventDetails[id] : null;
  
const event = id && eventDetails[id as keyof typeof eventDetails];


  if (!event) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Event not found</h1>
          <button
            onClick={() => navigate('/past-events')}
            className="text-blue-600 hover:text-blue-800"
          >
            Back to Past Events
          </button>
        </div>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % event.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + event.images.length) % event.images.length);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/past-events')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Past Events
        </button>

        {/* Image Slider */}
        <div className="relative h-[500px] mb-12 rounded-xl overflow-hidden">
          <div className="absolute inset-0">
            {event.images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`${event.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {event.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Event Details */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <p className="text-xl text-gray-600 dark:text-white mb-8">{event.date}</p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">About the Event</h2>
            <p className="text-gray-700 mb-6">{event.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-black">Event Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-medium">Venue:</span> {event.venue}</li>
                  <li><span className="font-medium">Participants:</span> {event.participants}</li>
                  <li>
                    <span className="font-medium">Organizers:</span>
                    <ul className="list-disc ml-5">
                      {event.organizers.map((organizer, index) => (
                        <li key={index}>{organizer}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-black">Highlights</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {event.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3 text-black">Sponsors</h3>
              <div className="flex flex-wrap gap-4">
                {event.sponsors.map((sponsor, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
                  >
                    {sponsor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;