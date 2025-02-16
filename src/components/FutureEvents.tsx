import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';

const futureEvents = [
  {
    id: '2',
    title: 'Hackathon 2025',
    date: 'March 20, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    description: 'Join us for Hackathon 2025, where creativity meets innovation! Collaborate with teams, brainstorm unique ideas, and work on projects that make a real-world impact. Don’t miss this chance to network, learn, and showcase your skills.',
    expectedParticipants: 200,
    registrationDeadline: 'March 10, 2025',
    registrationUrl: 'https://unstop.com/hackathon'
  }
];

function FutureEvents() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const eventDate = new Date("2025-02-16T23:59:59");
    const today = new Date();
    const timeDiff = eventDate.getTime() - today.getTime();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysLeft(days > 0 ? days : 0);
  }, []);

  useEffect(() => {
    if (daysLeft < 1) {
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
  }, [daysLeft]);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate('/')} className="flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
        <h1 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-3xl">
            {futureEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={event.thumbnail} alt={event.title} className="w-full h-40 md:h-48 object-cover" />
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{event.title}</h3>
                  <p className="text-gray-600 mb-1 text-sm md:text-base">{event.date}</p>
                  <p className="text-gray-700 mb-3 text-sm md:text-base">{event.description}</p>
                  <div className="space-y-1">
                    <p className="text-green-600 text-sm md:text-base">Expected Participants: {event.expectedParticipants}</p>
                    <p className="text-red-600 text-sm md:text-base">Registration Deadline: {event.registrationDeadline}</p>
                  </div>
                  {daysLeft === 0 && (
                    <div className="mt-3 text-red-500 font-semibold">
                      Countdown: {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
                    </div>
                  )}
                  {event.registrationUrl && (
                    <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all">
                      <Clock className="w-4 h-4 mr-2" />
                      Register
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureEvents;
