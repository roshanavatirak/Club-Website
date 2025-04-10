import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { MessageCircle, Instagram, Linkedin } from 'lucide-react';


// Define a type for the event object
interface EventData {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  description: string;
  expectedParticipants: number;
  registrationDeadline: string;
  registrationUrl: string;
}

// Add your future events here
const futureEvents: EventData[] = [
  // {
  //   id: '1',
  //   title: 'Sample Event',
  //   date: 'January 1, 2026',
  //   thumbnail: 'path/to/image',
  //   description: 'Event description goes here.',
  //   expectedParticipants: 100,
  //   registrationDeadline: '2026-01-01 23:59:59',
  //   registrationUrl: 'https://example.com'
  // }
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

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-3xl">
            <div></div> {/* Empty first column */}
            {futureEvents.length === 0 ? (
  <div className="col-span-full text-center text-gray-500 space-y-4">
    <h2 className="text-2xl font-semibold text-gray-700">No Upcoming Events</h2>
    <p className="text-base">
      Looks like there are no events scheduled right now. But don’t worry, exciting opportunities are just around the corner!
    </p>
    <p className="text-sm italic">
      Stay connected with Sipna Coders Club — something amazing is brewing behind the scenes.
    </p>
    <p className="text-sm">
      Follow us on social media or check back soon to be the first to know about future workshops, hackathons, and more!
    </p>

    {/* Social Links */}
    <div className="flex justify-center items-center gap-6 pt-4">
      <a
        href="https://www.instagram.com/sipna_coders_club"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors"
      >
        <Instagram className="w-5 h-5" />
        <span className="text-sm font-medium">Sipna Coders Club</span>
      </a>
      <a
        href="https://www.linkedin.com/company/sipna-coders-club"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
      >
        <Linkedin className="w-5 h-5" />
        <span className="text-sm font-medium">Sipna Coders Club</span>
      </a>
    </div>
  </div>
)  : (
              futureEvents.map((event) => (
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
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          Register
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
            <div></div> {/* Empty third column */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureEvents;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, Clock } from 'lucide-react';

// // Define a type for the event object
// interface EventData {
//   id: string;
//   title: string;
//   date: string;
//   thumbnail: string;
//   description: string;
//   expectedParticipants: number;
//   registrationDeadline: string;
//   registrationUrl: string;
// }

// // Add your future events here
// const futureEvents: EventData[] = [
//   // {
//   //   id: '1',
//   //   title: 'Sample Event',
//   //   date: 'January 1, 2026',
//   //   thumbnail: 'path/to/image',
//   //   description: 'Event description goes here.',
//   //   expectedParticipants: 100,
//   //   registrationDeadline: '2026-01-01 23:59:59',
//   //   registrationUrl: 'https://example.com'
//   // }
// ];

// function FutureEvents() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen pt-24 pb-12">
//       <div className="container mx-auto px-4">
//         <button
//           onClick={() => navigate('/')}
//           className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
//         >
//           <ArrowLeft className="w-5 h-5 mr-2" />
//           Back to Home
//         </button>

//         <h1 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h1>

//         <div className="flex justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-3x1">
//             <div></div> {/* Empty first column */}

//             {futureEvents.length === 0 ? (
//               <div className="col-span-full text-center text-gray-500">
//                 No upcoming events at the moment. Stay tuned!
//               </div>
//             ) : (
//               futureEvents.map((event) => (
//                 <div
//                   key={event.id}
//                   className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//                 >
//                   <img
//                     src={event.thumbnail}
//                     alt={event.title}
//                     className="w-full h-40 md:h-48 object-cover"
//                   />
//                   <div className="p-4 md:p-5">
//                     <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{event.title}</h3>
//                     <p className="text-gray-600 mb-1 text-sm md:text-base">{event.date}</p>
//                     <p className="text-gray-700 mb-3 text-sm md:text-base">{event.description}</p>
//                     <div className="space-y-1">
//                       <p className="text-green-600 text-sm md:text-base">Expected Participants: {event.expectedParticipants}</p>
//                       <p className="text-red-600 text-sm md:text-base">Registration Deadline: {event.registrationDeadline}</p>
//                     </div>

//                     <div className="mt-3 flex justify-between items-center">
//                       <button
//                         onClick={() => navigate(`/future-events/${event.id}`)}
//                         className="text-blue-600 hover:text-blue-800 text-sm md:text-base"
//                       >
//                         View Details
//                       </button>

//                       {event.registrationUrl && (
//                         <a
//                           href={event.registrationUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
//                         >
//                           <Clock className="w-4 h-4 mr-2" />
//                           Register
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//             <div></div> {/* Empty third column */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FutureEvents;
