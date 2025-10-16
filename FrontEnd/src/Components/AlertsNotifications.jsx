/* eslint-disable */

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, AlertTriangle, Mail, Smartphone, MessageSquare, Settings, Send, FlaskConical  } from "lucide-react";

import BackButton from "./BackButton";

export default function AlertsNotifications() {
  const [alerts] = useState([
    { id: 1, title: "Predicted ICU Surge", severity: "High", audience: "Admin & Doctors", time: "5 mins ago" },
    { id: 2, title: "Pollution Spike Detected", severity: "Moderate", audience: "Patients & Public", time: "30 mins ago" },
    { id: 3, title: "Festival Season Crowding Forecast", severity: "Low", audience: "All Staff", time: "2 hrs ago" },
  ]);

  const [channels, setChannels] = useState({
    sms: true,
    email: true,
    push: false,
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#061726] to-[#0A2236] text-white flex justify-center items-center p-8 font-sans">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1600px] bg-[#0F1F33]/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#1C3C52] p-10"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 flex items-center gap-3">
            <Bell size={28} /> Surge Alerts & Notifications
          </h1>
          <button className="bg-gradient-to-r from-teal-400 to-cyan-300 text-black px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-teal-900/30">
            + New Alert
          </button>
        </div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Alert Feed */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-6"
          >
            <h2 className="text-lg text-teal-300 mb-4 flex items-center gap-2">
              <AlertTriangle size={18} /> Active & Past Alerts
            </h2>

            <div className="space-y-4 overflow-y-auto max-h-[520px] pr-2">
              {alerts.map((a) => (
                <div
                  key={a.id}
                  className={`flex justify-between items-center p-4 rounded-xl border hover:scale-[1.01] transition-all cursor-pointer ${
                    a.severity === "High"
                      ? "border-red-500/60 bg-red-900/20"
                      : a.severity === "Moderate"
                      ? "border-yellow-500/60 bg-yellow-900/20"
                      : "border-teal-500/60 bg-teal-900/20"
                  }`}
                >
                  <div>
                    <p className="font-medium text-gray-200">{a.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{a.audience}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-sm font-semibold block ${
                        a.severity === "High"
                          ? "text-red-400"
                          : a.severity === "Moderate"
                          ? "text-yellow-300"
                          : "text-teal-300"
                      }`}
                    >
                      {a.severity}
                    </span>
                    <p className="text-xs text-gray-500">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Configuration & Testing */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-6 flex flex-col"
          >
            {/* Notification Channel Control */}
            <h2 className="text-lg text-teal-300 mb-4 flex items-center gap-2">
              <Settings size={18} /> Notification Channels
            </h2>
            <div className="space-y-3 mb-8">
              {[
                { key: "sms", label: "SMS", icon: <Smartphone size={16} /> },
                { key: "email", label: "Email", icon: <Mail size={16} /> },
                { key: "push", label: "App Push", icon: <MessageSquare size={16} /> },
              ].map((c) => (
                <label
                  key={c.key}
                  className="flex items-center justify-between bg-[#122E46] border border-[#1E4A5D] p-3 rounded-xl cursor-pointer hover:border-teal-400 transition"
                >
                  <div className="flex items-center gap-2">
                    {c.icon}
                    <span className="text-gray-200">{c.label}</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={channels[c.key]}
                    onChange={() =>
                      setChannels({ ...channels, [c.key]: !channels[c.key] })
                    }
                    className="w-4 h-4 accent-teal-400"
                  />
                </label>
              ))}
            </div>

            {/* Template Configurator */}
            <h2 className="text-lg text-teal-300 mb-4 flex items-center gap-2">
              <Send size={18} /> Advisory Template
            </h2>
            <textarea
              placeholder="Enter your advisory template message..."
              className="w-full h-28 bg-[#122E46] border border-[#1E4A5D] text-gray-200 text-sm rounded-xl p-3 mb-4 focus:outline-none focus:border-teal-400 resize-none"
            />

            <button className="w-full bg-gradient-to-r from-teal-400 to-cyan-300 text-black py-2 rounded-xl font-semibold hover:scale-[1.02] transition-transform shadow-md mb-8">
              Save Template
            </button>

            {/* A/B Testing */}
            <h2 className="text-lg text-teal-300 mb-4 flex items-center gap-2">
              <FlaskConical size={18} /> A/B Test Advisory
            </h2>
            <div className="flex gap-3 mb-4">
              <input
                placeholder="Version A text..."
                className="flex-1 bg-[#122E46] border border-[#1E4A5D] text-gray-200 text-sm rounded-xl p-3 focus:outline-none focus:border-teal-400"
              />
              <input
                placeholder="Version B text..."
                className="flex-1 bg-[#122E46] border border-[#1E4A5D] text-gray-200 text-sm rounded-xl p-3 focus:outline-none focus:border-teal-400"
              />
            </div>
            <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-300 text-black py-2 rounded-xl font-semibold hover:scale-[1.02] transition-transform shadow-md">
              Run A/B Test
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
