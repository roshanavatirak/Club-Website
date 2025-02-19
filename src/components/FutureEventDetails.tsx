import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Clock, AlertCircle } from 'lucide-react';
import EventCountdown from "./EventCountdown";

const futureEventDetails = {
  '2': {
    title: 'Hackathon 2025',
    date: 'March 20, 2025',
    description: "Join us for Hackathon 2025, where creativity meets innovation! Collaborate with teams, brainstorm unique ideas, and work on projects that make a real-world impact. Don&apos;t miss this chance to network, learn, and showcase your skills.",
    expectedParticipants: 200,
    venue: "CSE Seminar Hall and CC Lab, Sipna College of Engineering & Technology",
    registrationDeadline: '2025-02-18 23:59:59',
    registrationFee: 'Free',
    registrationUrl: 'https://unstop.com/p/sipna-hackathon-sipna-college-of-engineering-and-technology-amravati-1405396?lb=lz98p4G0&utm_medium=Share&utm_source=shortUrl',
    // organizers: ['Alex Johnson', 'Sarah Chen', 'Mike Zhang'],
    organizers: ['Sipna Coders Club'],
    sponsors: ['Unstop'],
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    ],
    schedule: [
      "Round 1",
      "February 15: Registration Opens",
      "March 10: Registration Closes",
      "March 12: Online PPT Evaluation",
      "March 13: Online Result Declaration – Top 40 Teams Will Be Selected",
      "Round 2",
      "March 20: Final Day - Offline Hackathon",
      "March 20 Evening: Prize Distribution",
    ],
    
    
    prizes: [
      'First Prize: ₹11,000',
      'Second Prize: ₹7,000',
      'Third Prize: ₹4,000',
      'Special goodies by Unstop*',
    ],
  },
  // '1': {
  //   title: 'Tech Talk Series',
  //   date: 'April 5-7, 2024',
  //   description: `A three-day series of insightful talks from industry experts covering emerging technologies,
  //   best practices, and career guidance. Network with professionals and gain valuable insights into the tech industry.`,
  //   expectedParticipants: 150,
  //   venue: 'Sipna College Auditorium',
  //   registrationDeadline: 'April 1, 2024',
  //   registrationFee: '₹300',
  //   organizers: ['Emma Davis', 'David Kim', 'Lisa Wang'],
  //   sponsors: ['TechHub', 'InnovateX', 'FutureLearn'],
  //   images: [
  //     'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200',
  //     'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
  //     'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200',
  //   ],
  //   schedule: [
  //     'Day 1: Web Technologies',
  //     'Day 2: AI and Machine Learning',
  //     'Day 3: Cloud Computing and DevOps',
  //   ],
  //   speakers: [
  //     'Dr. Sarah Smith - AI Research Lead',
  //     'John Doe - Senior Software Architect',
  //     'Jane Wilson - Cloud Solutions Expert',
  //   ],
  // },
};

function FutureEventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
// const event = id ? futureEventDetails[id] : null;
const event = id ? futureEventDetails[id as keyof typeof futureEventDetails] : null;


  if (!event) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Event not found</h1>
          <button
            onClick={() => navigate('/future-events')}
            className="text-blue-600 hover:text-blue-800"
          >
            Back to Upcoming Events
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

  // const deadlineDate = new Date(event.registrationDeadline);
  // const today = new Date();
  // const daysRemaining = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));

  const deadlineDate = event?.registrationDeadline ? new Date(event.registrationDeadline) : null;
  const today = new Date();
  
  let daysRemaining: number = 0;
  
  if (deadlineDate instanceof Date && !isNaN(deadlineDate.getTime())) {
    const todayUTC = new Date(today.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const deadlineUTC = new Date(deadlineDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    
    daysRemaining = Math.ceil((deadlineUTC.getTime() - todayUTC.getTime()) / (1000 * 60 * 60 * 24));
  }
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/future-events')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Upcoming Events
        </button>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg flex items-center">
          <AlertCircle className="w-6 h-6 text-yellow-400 mr-3" />
          <div>
            <p className="font-medium text-yellow-700">
              Registration Deadline: {event.registrationDeadline}
            </p>
            <p className="text-yellow-600">
              {daysRemaining > 0 
                ? `Hurry up! Less than ${daysRemaining} days remaining to register!`
                : 'Registration closed'}
            </p>
            {/* <p className="text-yellow-600">
  {daysRemaining >= 0 ? (
    <>Hurry up! Only <EventCountdown registrationDeadline={event.registrationDeadline} /> days remaining to register!</>
  ) : (
    'Registration closed'
  )}
</p> */}

          </div>
        </div>

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

        <div className="max-w-4xl mx-auto">
          {/* <h1 className="text-4xl font-bold mb-4 text-black">{event.title}</h1> */}
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
  {event.title}
</h1>

          {/* <p className="text-xl text-gray-600 mb-8">{event.date}</p> */}
          <p className="text-xl text-gray-600 dark:text-white mb-8">{event.date}</p>


          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">About the Event</h2>
            <p className="text-gray-700 mb-6">{event.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-black">Event Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-medium ">Venue:</span> {event.venue}</li>
                  <li><span className="font-medium ">Expected Participants:</span> {event.expectedParticipants}</li>
                  <li><span className="font-medium">Registration Fee:</span> {event.registrationFee}</li>
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
                <h3 className="text-xl font-semibold mb-3 text-black">Schedule</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {event.schedule.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                {event && "prizes" in event && event.prizes.length > 0 && (
  <>
    <h3 className="text-xl font-semibold mb-3 mt-6">Prizes</h3>
    <ul className="list-disc ml-5 space-y-2 text-gray-700">
      {event.prizes.map((prize, index) => (
        <li key={index}>{prize}</li>
      ))}
    </ul>
  </>
)}

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

            <div className="mt-12 text-center">
              <div className="inline-block relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <a
                   href={(event as any ).registrationUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="relative flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg leading-none text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
                   >
                  <Clock className="w-5 h-5 mr-2" />
                  Register Now
                  <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded text-sm">
                    {/* {daysRemaining} days left */}
                    <EventCountdown registrationDeadline={event.registrationDeadline} />
                  </span>
                </a>
              </div>
              <p className="text-red-500 text-sm mt-4 animate-pulse">
                ⚡ Limited slots available! Register before {event.registrationDeadline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureEventDetails;