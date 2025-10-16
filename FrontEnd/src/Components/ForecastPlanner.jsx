/* eslint-disable */

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Activity, Cloud, Users, Package } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import BackButton from "./BackButton";

export default function ForecastPlanner() {
  const [festival, setFestival] = useState(false);
  const [pollution, setPollution] = useState(50);
  const [epidemic, setEpidemic] = useState(1);

  const baselineData = [
    { day: "Mon", admissions: 120 },
    { day: "Tue", admissions: 130 },
    { day: "Wed", admissions: 125 },
    { day: "Thu", admissions: 150 },
    { day: "Fri", admissions: 160 },
    { day: "Sat", admissions: 140 },
    { day: "Sun", admissions: 135 },
  ];

  const scenarioData = baselineData.map((d) => ({
    ...d,
    admissions:
      d.admissions *
      (1 +
        (festival ? 0.2 : 0) +
        (pollution / 300) +
        (epidemic - 1) * 0.15),
  }));

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#061726] to-[#0A2236] text-white flex justify-center items-center p-8 font-sans">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1600px] bg-[#0F1F33]/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#1C3C52] p-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 flex items-center gap-2">
            <Activity size={26} /> Forecast & Scenario Planner
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-8 shadow-md flex flex-col justify-between"
          >
            <div>
              <h2 className="flex items-center gap-2 text-lg text-teal-300 mb-5">
                <Calendar size={18} /> Scenario Controls
              </h2>

              <div className="bg-[#122E46] rounded-xl p-4 mb-5 text-sm text-gray-400 text-center border border-[#1E4A5D]">
                📅 Select Date Range (e.g., 15–22 Oct)
              </div>

              {/* Sliders + Toggles */}
              <div className="space-y-6">
                <label className="flex items-center justify-between">
                  <span>Festival Period</span>
                  <input
                    type="checkbox"
                    checked={festival}
                    onChange={(e) => setFestival(e.target.checked)}
                    className="w-5 h-5 accent-teal-400"
                  />
                </label>

                <div>
                  <label className="flex justify-between items-center">
                    <span>Pollution Index</span>
                    <span className="text-teal-300">{pollution}</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={300}
                    value={pollution}
                    onChange={(e) => setPollution(Number(e.target.value))}
                    className="w-full accent-teal-400 mt-1"
                  />
                </div>

                <div>
                  <label className="flex justify-between items-center">
                    <span>Epidemic Severity</span>
                    <span className="text-teal-300">{epidemic}</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={epidemic}
                    onChange={(e) => setEpidemic(Number(e.target.value))}
                    className="w-full accent-teal-400 mt-1"
                  />
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 w-full py-3 bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-teal-300 hover:to-cyan-200 rounded-xl text-black font-semibold shadow-lg shadow-teal-900/40 transition-all"
            >
              Generate Recommended Staffing & Supplies
            </motion.button>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-8 shadow-md flex flex-col"
          >
            <h2 className="text-lg text-teal-300 mb-4">Forecast Comparison</h2>

            {/* Chart */}
            <div className="flex-1 h-[450px] bg-[#122E46] rounded-xl p-4 border border-[#1E4A5D]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={scenarioData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1F3B52" />
                  <XAxis dataKey="day" stroke="#8ED1D1" />
                  <YAxis stroke="#8ED1D1" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0F2A3C",
                      border: "1px solid #144E54",
                      color: "#fff",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="admissions"
                    stroke="#00E6C3"
                    strokeWidth={2.5}
                    name="Scenario Forecast"
                  />
                  <Line
                    type="monotone"
                    dataKey="admissions"
                    data={baselineData}
                    stroke="#2F91D6"
                    strokeWidth={2}
                    name="Baseline Forecast"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* KPI Summary */}
            <div className="grid grid-cols-3 gap-6 mt-6 text-center">
              <div className="bg-[#122E46] p-4 rounded-xl border border-[#1E4A5D] hover:border-teal-400 transition">
                <Users className="mx-auto mb-2 text-teal-400" />
                <p className="text-xs text-gray-400">Recommended Staff</p>
                <p className="text-lg font-semibold text-teal-300">
                  {Math.round(50 + epidemic * 10 + pollution / 50)}
                </p>
              </div>

              <div className="bg-[#122E46] p-4 rounded-xl border border-[#1E4A5D] hover:border-teal-400 transition">
                <Package className="mx-auto mb-2 text-teal-400" />
                <p className="text-xs text-gray-400">Supply Units Needed</p>
                <p className="text-lg font-semibold text-teal-300">
                  {Math.round(100 + pollution / 5)}
                </p>
              </div>

              <div className="bg-[#122E46] p-4 rounded-xl border border-[#1E4A5D] hover:border-teal-400 transition">
                <Cloud className="mx-auto mb-2 text-teal-400" />
                <p className="text-xs text-gray-400">Risk Level</p>
                <p className="text-lg font-semibold text-red-400">
                  {epidemic >= 4 ? "High" : epidemic >= 2 ? "Moderate" : "Low"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
