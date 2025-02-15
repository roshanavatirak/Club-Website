import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const eventDetails = {
  '1': {
    title: 'Annual Hackathon 2023',
    date: 'November 15-16, 2023',
    description: `Our flagship 24-hour coding marathon brought together 150 talented students from various colleges. 
    Participants worked on innovative solutions across multiple tracks including AI/ML, Web Development, and Mobile Apps.
    The event featured mentoring sessions, technical workshops, and exciting prizes for the winning teams.`,
    participants: 150,
    venue: 'Sipna College of Engineering & Technology',
    organizers: ['Alex Johnson', 'Sarah Chen', 'Mike Zhang'],
    sponsors: ['TechCorp', 'DevHub', 'CloudServices'],
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    ],
    highlights: [
      'Over 30 projects submitted',
      'Prizes worth ₹1,00,000',
      'Industry expert mentoring',
      'Professional networking opportunities',
    ],
  },
  // Add more event details as needed
};

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const event = id ? eventDetails[id] : null;

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
          <p className="text-xl text-gray-600 mb-8">{event.date}</p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
            <p className="text-gray-700 mb-6">{event.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Event Details</h3>
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
                <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {event.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Sponsors</h3>
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