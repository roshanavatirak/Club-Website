import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import EventCountdown from "./EventCountdown";
import DevThon2025 from '../assets/DevThon 2025/devThon logo.png'


const futureEvents = [
 
  {
    id: '2',
    title: 'DevThon 2025',
    date: 'March 20, 2025',
    thumbnail: DevThon2025,
    description: 'Join us for DevThon 2025, where creativity meets innovation! Collaborate with teams, brainstorm unique ideas, and work on projects that make a real-world impact. Don’t miss this chance to network, learn, and showcase your skills.',
    expectedParticipants: 200,
    registrationDeadline: '2025-03-12 23:59:59',
    registrationUrl: 'https://unstop.com/p/sipna-hackathon-sipna-college-of-engineering-and-technology-amravati-1405396?lb=lz98p4G0&utm_medium=Share&utm_source=shortUrl'
  }
  
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

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <div className="flex justify-center">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-3x1">
        <div></div> {/* Empty first column */}
        {futureEvents.map((event, index) => {
  if (!event?.registrationDeadline) return null; // Skip if no deadline

  // const daysRemaining = Math.ceil(
  //   (new Date(event.registrationDeadline).getTime() - new Date().getTime()) /
  //     (1000 * 60 * 60 * 24)
  // );

            return (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{event.title}</h3>
                  <p className="text-gray-600 mb-1 text-sm md:text-base">{event.date}</p>
                  <p className="text-gray-700 mb-3 text-sm md:text-base">{event.description}</p>
                  <div className="space-y-1">
                    <p className="text-green-600 text-sm md:text-base">Expected Participants: {event.expectedParticipants}</p>
                    <p className="text-red-600 text-sm md:text-base">Registration Deadline: {event.registrationDeadline}</p>
                  </div>
                  



                  <div className="mt-3 flex justify-between items-center">
                    <button
                      onClick={() => navigate(`/future-events/${event.id}`)}
                      className="text-blue-600 hover:text-blue-800 text-sm md:text-base"
                    >
                      View Details
                    </button>
                    
                    {event.registrationUrl && (
                    //   <a
                    //     href={event.registrationUrl}
                    //     target="_blank"
                    //     rel="noopener noreferrer"
                    //     className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
                    //   >
                    //     <Clock className="w-4 h-4 mr-2" />
                    //     Register
                    //     <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded text-sm">
                    //       {/* {daysRemaining}d */}
                          
                    // {/* Event Countdown Component */}
                   
                    //   <EventCountdown registrationDeadline={event.registrationDeadline} />
                   
                    //     </span>
                    //   </a>
                    <a
  href={event.registrationUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
>
  <Clock className="w-4 h-4 mr-2" />
  Register
  <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded text-sm">
    <EventCountdown registrationDeadline={event.registrationDeadline} />
  </span>
</a>

                    )}
                  </div>
                </div>
              </div>
            );
          })}
           <div></div> {/* Empty third column */}
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

export default FutureEvents;