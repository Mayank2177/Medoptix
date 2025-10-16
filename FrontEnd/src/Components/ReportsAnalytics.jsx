/* eslint-disable */

// src/Components/ReportsAnalytics.jsx
import { motion } from "framer-motion";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FileText, Download, Calendar, Send, Settings2 } from "lucide-react";
import { useState } from "react";

import BackButton from "./BackButton";

export default function ReportsAnalytics() {
  const [timeRange, setTimeRange] = useState("Monthly");

  const accuracyData = [
    { name: "Week 1", accuracy: 86 },
    { name: "Week 2", accuracy: 88 },
    { name: "Week 3", accuracy: 90 },
    { name: "Week 4", accuracy: 92 },
  ];

  const utilizationData = [
    { resource: "Beds", utilization: 78 },
    { resource: "Oxygen", utilization: 82 },
    { resource: "PPE", utilization: 67 },
    { resource: "Staff Hours", utilization: 85 },
  ];

  return (
    <div className="min-h-screen bg-[#061824] text-gray-100 p-8 flex flex-col gap-8 items-center">
      <BackButton />
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl"
      >
        <div>
          <h1 className="text-3xl font-bold text-teal-400">Reports & Analytics</h1>
          <p className="text-gray-400 text-sm mt-1">
            Export forecast accuracy, utilization, and performance reports for management & compliance.
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <Calendar size={18} className="text-teal-400" />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-[#0F2A3C] text-gray-200 rounded-xl px-3 py-2 text-sm border border-gray-700 focus:ring-2 focus:ring-teal-500"
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
        {[
          { label: "Forecast Accuracy", value: "92%", color: "text-green-400" },
          { label: "Avg. Resource Utilization", value: "81%", color: "text-yellow-400" },
          { label: "Cost Savings (This Month)", value: "₹3.2L", color: "text-teal-400" },
        ].map((card, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.1 }}
            className="bg-[#0F2A3C] rounded-2xl p-6 shadow-lg border border-gray-700 flex flex-col items-center text-center hover:shadow-teal-500/20"
          >
            <p className="text-gray-400 text-sm mb-1">{card.label}</p>
            <h2 className={`text-3xl font-bold ${card.color}`}>{card.value}</h2>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Forecast Accuracy Chart */}
        <div className="bg-[#0F2A3C] p-6 rounded-2xl border border-gray-700 shadow-md">
          <h3 className="text-teal-300 font-semibold mb-4">Forecast Accuracy Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E3A4C" />
              <XAxis dataKey="name" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: "#0F2A3C", border: "1px solid #1E3A4C" }} />
              <Line type="monotone" dataKey="accuracy" stroke="#14B8A6" strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Utilization Chart */}
        <div className="bg-[#0F2A3C] p-6 rounded-2xl border border-gray-700 shadow-md">
          <h3 className="text-teal-300 font-semibold mb-4">Resource Utilization Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={utilizationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E3A4C" />
              <XAxis dataKey="resource" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: "#0F2A3C", border: "1px solid #1E3A4C" }} />
              <Bar dataKey="utilization" fill="#0D9488" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Report Builder */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0F2A3C] p-8 rounded-2xl border border-gray-700 w-full max-w-7xl mt-6 shadow-md"
      >
        <h3 className="text-teal-300 font-semibold mb-4 flex items-center gap-2">
          <FileText size={18}/> Report Builder
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-gray-400 text-sm mb-1">Select Period</label>
            <select className="bg-[#112E42] w-full p-2 rounded-lg border border-gray-600 text-gray-200">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Quarterly</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-1">Report Type</label>
            <select className="bg-[#112E42] w-full p-2 rounded-lg border border-gray-600 text-gray-200">
              <option>Forecast Accuracy</option>
              <option>Utilization</option>
              <option>Cost Analysis</option>
              <option>Comprehensive</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-1">Format</label>
            <select className="bg-[#112E42] w-full p-2 rounded-lg border border-gray-600 text-gray-200">
              <option>PDF</option>
              <option>CSV</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-end">
          <button className="flex items-center gap-2 bg-teal-500 text-black px-4 py-2 rounded-xl hover:bg-teal-400 transition">
            <Download size={16}/> Export Report
          </button>
          <button className="flex items-center gap-2 bg-blue-500 text-black px-4 py-2 rounded-xl hover:bg-blue-400 transition">
            <Send size={16}/> Schedule Email
          </button>
          <button className="flex items-center gap-2 bg-gray-700 text-gray-200 px-4 py-2 rounded-xl hover:bg-gray-600 transition">
            <Settings2 size={16}/> Customize
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <p className="text-gray-500 text-xs mt-8">
        © 2025 HealthPredict AI — Reports auto-synced from forecast & utilization models.
      </p>
    </div>
  );
}
