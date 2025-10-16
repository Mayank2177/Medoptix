/* eslint-disable */

// src/Components/AdvisoriesPublic.jsx
import { Share2, Clock, PhoneCall, MessageCircle, Video, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import BackButton from "./BackButton";  

export default function AdvisoriesPublic() {
  const advisories = [
    {
      id: 1,
      title: "High Pollution Alert – Respiratory Patients",
      content: "Avoid outdoor travel between 7 AM – 10 AM. Use masks. Prefer teleconsultation if symptoms worsen.",
      time: "Updated 2 hours ago",
      urgency: "High",
      link: "#teleconsult"
    },
    {
      id: 2,
      title: "Festival Surge Advisory",
      content: "Expected OPD crowd during Diwali week. Check real-time ER wait times before visiting.",
      time: "Updated 5 hours ago",
      urgency: "Moderate",
      link: "#waittimes"
    },
    {
      id: 3,
      title: "Flu Season Notice",
      content: "Fever and cold cases rising. Maintain distance and wash hands frequently. Visit triage center if fever persists.",
      time: "Updated 1 day ago",
      urgency: "Low",
      link: "#triage"
    },
  ];

  return (
    <div className="min-h-screen bg-[#061824] text-gray-100 p-8 flex flex-col gap-8 items-center justify-start">
      <BackButton />
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-center max-w-4xl"
      >
        <h1 className="text-3xl font-bold text-teal-400">Patient Advisories & Public Updates</h1>
        <p className="text-gray-400 mt-2">
          Stay informed about hospital wait times, teleconsultation options, and emergency advisories.
        </p>
      </motion.div>

      {/* Advisory Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl w-full">
        {advisories.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border
              ${item.urgency === "High"
                ? "border-red-500 bg-[#1A2B38]"
                : item.urgency === "Moderate"
                ? "border-yellow-400 bg-[#1A2B38]"
                : "border-green-500 bg-[#1A2B38]"}`}
          >
            <h2 className="text-xl font-semibold text-teal-300 mb-2">{item.title}</h2>
            <p className="text-gray-300 mb-4">{item.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span className="flex items-center gap-1"><Clock size={14}/> {item.time}</span>
              <button className="flex items-center gap-1 hover:text-teal-300">
                <Share2 size={14}/> Share
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advisory Widgets Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        {/* Wait Time Widget */}
        <div className="bg-[#0F2A3C] rounded-2xl p-6 flex flex-col items-center text-center border border-gray-700">
          <Clock className="text-yellow-400 mb-3" size={28}/>
          <h3 className="text-teal-300 font-semibold mb-1">Current ER Wait Time</h3>
          <p className="text-2xl font-bold text-gray-100">~ 25 mins</p>
          <p className="text-gray-400 mt-1">Updated just now</p>
        </div>

        {/* Teleconsultation Widget */}
        <div className="bg-[#0F2A3C] rounded-2xl p-6 flex flex-col items-center text-center border border-gray-700">
          <Video className="text-teal-400 mb-3" size={28}/>
          <h3 className="text-teal-300 font-semibold mb-1">Teleconsultation Available</h3>
          <p className="text-gray-400 mb-3">Book a video consultation with hospital doctors instantly.</p>
          <button className="bg-teal-500 text-black px-4 py-2 rounded-xl hover:bg-teal-400">
            Book Now
          </button>
        </div>

        {/* Triage Guidance Widget */}
        <div className="bg-[#0F2A3C] rounded-2xl p-6 flex flex-col items-center text-center border border-gray-700">
          <MessageCircle className="text-blue-400 mb-3" size={28}/>
          <h3 className="text-teal-300 font-semibold mb-1">Triage Questionnaire</h3>
          <p className="text-gray-400 mb-3">Answer a few questions to check if you need emergency care.</p>
          <button className="bg-blue-500 text-black px-4 py-2 rounded-xl hover:bg-blue-400">
            Start Check
          </button>
        </div>
      </motion.div>

      {/* Footer Info */}
      <div className="text-center text-gray-500 text-sm mt-10">
        <p>Data updated in real time from hospital servers. For emergencies, contact helpline at <span className="text-teal-400">+91-98765-43210</span>.</p>
      </div>
    </div>
  );
}
