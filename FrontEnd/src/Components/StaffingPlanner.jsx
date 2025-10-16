/* eslint-disable */

import { useState } from "react";
import { motion } from "framer-motion";
import { User, CalendarClock, CheckCircle, XCircle, PhoneCall, Users } from "lucide-react";

import BackButton from "./BackButton";

export default function StaffingPlanner() {
  const [shifts, setShifts] = useState([
    { id: 1, name: "Dr. Meena", role: "Cardiologist", shift: "Morning", contact: "+91 9876543210" },
    { id: 2, name: "Dr. Arjun", role: "Surgeon", shift: "Evening", contact: "+91 9123456789" },
    { id: 3, name: "Nurse Kavita", role: "ICU Nurse", shift: "Night", contact: "+91 9090909090" },
  ]);

  const [aiSuggestions, setAiSuggestions] = useState([
    { shift: "Morning", recommended: 8, current: 6 },
    { shift: "Evening", recommended: 7, current: 5 },
    { shift: "Night", recommended: 5, current: 5 },
  ]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#061726] to-[#0A2236] text-white flex justify-center items-center p-8 font-sans">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1600px] bg-[#0F1F33]/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#1C3C52] p-10"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 flex items-center gap-2">
            <CalendarClock size={26} /> Staffing Planner / Roster
          </h1>
          <button className="bg-gradient-to-r from-teal-400 to-cyan-300 text-black px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-teal-900/30">
            Publish Schedule
          </button>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* AI Suggested Staffing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-6"
          >
            <h2 className="text-lg text-teal-300 mb-4 flex items-center gap-2">
              <Users size={18} /> AI Suggested Staffing
            </h2>
            <div className="space-y-4">
              {aiSuggestions.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-[#122E46] p-3 rounded-xl border border-[#1E4A5D]"
                >
                  <div>
                    <p className="text-sm text-gray-300">{s.shift} Shift</p>
                    <p className="text-xs text-gray-400">Recommended: {s.recommended}</p>
                  </div>
                  <span
                    className={`text-lg font-semibold ${
                      s.current >= s.recommended ? "text-teal-300" : "text-yellow-400"
                    }`}
                  >
                    {s.current}/{s.recommended}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Approve / Reject Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-6 flex flex-col justify-between"
          >
            <h2 className="text-lg text-teal-300 mb-4 flex items-center gap-2">
              <CheckCircle size={18} /> Approve / Manage Roster
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-teal-400 text-black px-5 py-2 rounded-xl hover:scale-105 transition-transform shadow-md">
                <CheckCircle size={18} /> Approve AI Suggestions
              </button>
              <button className="flex items-center gap-2 bg-gradient-to-r from-red-400 to-pink-400 text-black px-5 py-2 rounded-xl hover:scale-105 transition-transform shadow-md">
                <XCircle size={18} /> Reject Suggestions
              </button>
              <button className="flex items-center gap-2 bg-[#14364A] px-5 py-2 rounded-xl border border-[#1E4A5D] hover:border-teal-300 transition">
                <PhoneCall size={18} /> Call On-Call Staff
              </button>
            </div>
          </motion.div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Timeline / Roster Grid */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-6"
          >
            <h2 className="text-lg text-teal-300 mb-4">Shift Timeline</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-gray-300">
                <thead>
                  <tr className="bg-[#122E46] text-gray-400">
                    <th className="py-3 px-4 text-left rounded-l-lg">Staff Name</th>
                    <th className="py-3 px-4">Role</th>
                    <th className="py-3 px-4">Shift</th>
                    <th className="py-3 px-4 rounded-r-lg">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {shifts.map((s) => (
                    <tr
                      key={s.id}
                      className="border-b border-[#1E4A5D] hover:bg-[#14364A] transition"
                    >
                      <td className="py-3 px-4 flex items-center gap-2">
                        <User className="text-teal-400" size={16} /> {s.name}
                      </td>
                      <td className="py-3 px-4">{s.role}</td>
                      <td className="py-3 px-4">{s.shift}</td>
                      <td className="py-3 px-4 text-cyan-300">{s.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Contact / Call Tree */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-6 flex flex-col"
          >
            <h2 className="text-lg text-teal-300 mb-4 flex items-center gap-2">
              <PhoneCall size={18} /> On-Call / Fallback List
            </h2>
            <div className="space-y-4 overflow-y-auto max-h-[400px]">
              {shifts.map((s) => (
                <div
                  key={s.id}
                  className="flex justify-between items-center bg-[#122E46] border border-[#1E4A5D] rounded-xl p-3 hover:border-teal-400 transition"
                >
                  <div>
                    <p className="text-sm text-gray-200">{s.name}</p>
                    <p className="text-xs text-gray-400">{s.role}</p>
                  </div>
                  <button className="bg-gradient-to-r from-teal-400 to-cyan-300 text-black text-xs px-3 py-1 rounded-lg shadow-md hover:scale-105 transition">
                    Call
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
