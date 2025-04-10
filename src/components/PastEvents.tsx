import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import flutterflowImage from '../assets/team/workshop2024.jpg';
import Devthon2025Main from '../assets/DevThon 2025/DevThon2025Main.jpg'

const pastEvents = [
  {
    id: '1',
    title: 'FlutterFlow Workshop',
    date: 'October 25, 2024',
    thumbnail: flutterflowImage,
    description:
      'The Flutter Flow Workshop provided hands-on experience in building a WhatsApp Clone, covering UI design and real-time chat using Flutter Flow’s no-code platform.',
    participants: '100+',
  },
  {
    id: '2',
    title: 'DevThon 2025',
    date: 'March 20, 2025',
    thumbnail: Devthon2025Main, // Replace with actual devthon image later
    description:
      'DevThon 2025 brought together tech enthusiasts to collaborate, innovate, and create real-world impactful solutions. From brainstorming to building, it was an unforgettable hackathon experience.',
    participants: '550+',
  },
];



function PastEvents() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold mb-12 text-center dark:text-white">
          Past Events
        </h1>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => navigate(`/past-events/${event.id}`)}
              >
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {event.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {event.description}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    {event.participants} Participants
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastEvents;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';
// import flutterflowImage from '../assets/team/workshop2024.jpg';


// const pastEvents = [
//   {
//     id: '1',
//     title: 'FlutterFlow Workshop',
//     date: 'October 25, 2024',
//     thumbnail: flutterflowImage,
//     description: 'The Flutter Flow Workshop provided hands-on experience in building a WhatsApp Clone, covering UI design and real-time chat using Flutter Flow’s no-code platform.',
//     participants: '100+'
//   },
//   {
//     id: '2',
//     title: 'DevThon 2025',
//     date: 'March 20, 2025',
//     thumbnail:flutterflowImage , // Make sure you import or define devthonImage
//     description: 'DevThon 2025 brought together tech enthusiasts to collaborate, innovate, and create real-world impactful solutions. From brainstorming to building, it was an unforgettable hackathon experience.',
//     participants: '200+'
//   }
// ];

// function PastEvents() {
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

//         <h1 className="text-4xl font-bold mb-12 text-center">Past Events</h1>

//         {/* Centering the grid layout similar to Upcoming Events */}
//         <div className="flex justify-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-10xl">

//             <div></div> {/* Empty first column for alignment */}

//             {pastEvents.map((event) => (
//               <div
//                 key={event.id}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
//                 onClick={() => navigate(`/past-events/${event.id}`)}
//               >
//                 <img
//                   src={event.thumbnail}
//                   alt={event.title}
//                   className="w-full h-40 md:h-48 object-cover"
//                 />
//                 <div className="p-4 md:p-5">
//                   <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{event.title}</h3>
//                   <p className="text-gray-600 mb-1 text-sm md:text-base">{event.date}</p>
//                   <p className="text-gray-700 mb-3 text-sm md:text-base">{event.description}</p>
//                   <p className="text-blue-600 text-sm md:text-base">{event.participants} Participants</p>
//                 </div>
//               </div>
//             ))}

//             <div></div> {/* Empty third column for alignment */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PastEvents;

// //       {/* <div className="container mx-auto px-4">
// //         <div className="text-center mt-12">
// //           <p className="text-gray-600 dark:text-gray-300">
// //             Created by{' '}
// //             <a
// //               href="https://www.linkedin.com/in/roshan-avatirak"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
// //             >
// //               Roshan Avatirak
// //             </a>
// //           </p>
// //         </div>
// //       </div> */}
// //     </div>
// //   );
// // }

// // export default PastEvents;