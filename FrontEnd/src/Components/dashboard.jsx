/* HealthPredict_Dashboard_Expanded.jsx
  Requirements (install in your project):
    react-router-dom, framer-motion, lucide-react, recharts, leaflet (for map), react-leaflet
*/

/* eslint-disable */

import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { MapPin, AlertTriangle, Users, Package, Grid, PieChart, Settings, LogOut, Menu } from 'lucide-react';
import RegionalMap from './Map'; // keep your existing map component

import ForecastPlanner from './ForecastPlanner'
import StaffingPlanner from './StaffingPlanner'
import SupplyInventory from './SupplyInventory'
import AlertsNotifications from './AlertsNotifications'
import AdvisoriesPublic from './Advisory'
import GeoInsights from './MapGeoInsights'
import ReportsAnalytics from './ReportsAnalytics'


const data = [
  { day: 'Mon', inflow: 120 },
  { day: 'Tue', inflow: 150 },
  { day: 'Wed', inflow: 180 },
  { day: 'Thu', inflow: 160 },
  { day: 'Fri', inflow: 200 },
  { day: 'Sat', inflow: 240 },
  { day: 'Sun', inflow: 210 },
];

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
};

function Topbar({ onToggleSidebar }) {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="md:hidden p-2 rounded-lg bg-transparent border border-transparent hover:bg-teal-900 transition">
          <Menu size={18} className="text-teal-300" />
        </button>
        <h1 className="text-2xl font-bold text-teal-300">HealthPredict AI Dashboard</h1>
      </div>
      <div className="space-x-3 hidden sm:flex">
        <button className="border border-teal-400 text-teal-300 px-4 py-2 rounded-xl hover:bg-teal-900 transition"><Settings size={14} /> Settings</button>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-xl transition"><LogOut size={14} /> Logout</button>
      </div>
    </header>
  );
}

function Sidebar({ collapsed, setCollapsed }) {
  const nav = [
    { id: 'overview', label: 'Dashboard', icon: Grid, to: '/dashboard' },
    { id: 'forecast', label: 'Forecast Planner', icon: PieChart, to: '/forecast-planner' },
    { id: 'staffing', label: 'Staffing Planner', icon: Users, to: '/staffing-planner' },
    { id: 'supply', label: 'Supply Inventory', icon: Package, to: '/supply-inventory' },
    { id: 'alerts', label: 'Alerts & Notifications', icon: AlertTriangle, to: '/alerts-notifications' },
    { id: 'advisories', label: 'Advisories (Public)', icon: MapPin, to: '/advisories-public' },
    { id: 'geo', label: 'Geo Insights', icon: MapPin, to: '/geo-insights' },
    { id: 'reports', label: 'Reports & Analytics', icon: PieChart, to: '/reports-analytics' }
  ];

  return (
    <aside className={`bg-[#071A25] text-white p-4 rounded-2xl shadow-md h-full transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center">HP</div>
          {!collapsed && <div className="text-sm font-semibold">HealthPredict</div>}
        </div>
        {!collapsed && (
          <button onClick={() => setCollapsed(true)} className="text-sm text-gray-400">Collapse</button>
        )}
        {collapsed && (
          <button onClick={() => setCollapsed(false)} className="text-sm text-gray-400">Expand</button>
        )}
      </div>

      <nav className="flex flex-col gap-2">
        {nav.map((n) => {
          const Icon = n.icon;
          return (
            <Link to={n.to} key={n.id} className={`flex items-center gap-3 p-2 rounded-xl hover:bg-[#0F2A3C] transition`}>
              <Icon size={18} className="text-teal-300" />
              {!collapsed && <span className="text-sm text-gray-200">{n.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6">
        {!collapsed && <div className="text-xs text-gray-400">v1.0 • AI Ops</div>}
      </div>
    </aside>
  );
}

function PageWrapper({ children }) {
  const location = useLocation();
  return (
    <div className="flex-1">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={location.pathname} initial="initial" animate="animate" exit="exit" variants={pageTransition} className="min-h-[70vh]">
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// --- Pages ---
function Overview() {
  return (
    <div className="space-y-6">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.03 }} className="bg-[#0F2A3C] p-5 rounded-2xl shadow-md">
          <div className="flex items-center gap-2 text-lg text-teal-300 mb-2"><Users size={18} /> Occupancy</div>
          <p className="text-4xl font-bold">82%</p>
          <p className="text-gray-400 text-sm">+5% from last week</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} className="bg-[#0F2A3C] p-5 rounded-2xl shadow-md">
          <div className="flex items-center gap-2 text-lg text-teal-300 mb-2"><AlertTriangle size={18} /> Predicted Surge (7 days)</div>
          <p className="text-4xl font-bold">+18%</p>
          <p className="text-gray-400 text-sm">High risk on Friday</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} className="bg-[#0F2A3C] p-5 rounded-2xl shadow-md">
          <div className="flex items-center gap-2 text-lg text-teal-300 mb-2"><Package size={18} /> Critical Supplies</div>
          <p className="text-4xl font-bold">5</p>
          <p className="text-gray-400 text-sm">Items below threshold</p>
        </motion.div>
      </div>

      {/* Forecast Chart */}
      <div className="bg-[#0F2A3C] rounded-2xl p-6 shadow-md">
        <h2 className="text-teal-300 text-lg mb-4">Forecasted Patient Inflow</h2>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E3A4C" />
            <XAxis dataKey="day" stroke="#7DD3FC" />
            <YAxis stroke="#7DD3FC" />
            <Tooltip contentStyle={{ backgroundColor: '#102C3A', border: 'none' }} />
            <Area type="monotone" dataKey="inflow" stroke="#2DD4BF" fill="#0D9488" fillOpacity={0.4} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Regional Hotspot Section */}
      <div className="bg-[#0F2A3C] rounded-2xl p-6 shadow-md">
        <h2 className="flex items-center gap-2 text-teal-300 text-lg mb-4"><MapPin size={18} /> Regional Hotspots</h2>
        <div className="h-[400px] bg-[#112E42] rounded-2xl overflow-hidden">
          <RegionalMap />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl transition">Auto-generate Staffing Plan</button>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl transition">Order Supplies</button>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl transition">Send Advisory</button>
      </div>
    </div>
  );
}

// function ForecastPlanner() {
//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-[#0F2A3C] p-5 rounded-2xl shadow-md">
//           <h3 className="text-teal-300 font-semibold mb-2">Prediction Summary</h3>
//           <div className="text-2xl font-bold">Occupancy: 78%</div>
//           <div className="text-sm text-gray-400 mt-1">Confidence: 92%</div>
//         </div>

//         <div className="bg-[#0F2A3C] p-5 rounded-2xl shadow-md md:col-span-2">
//           <h3 className="text-teal-300 font-semibold mb-2">What-If Simulator</h3>
//           <div className="flex flex-wrap gap-3">
//             <select className="bg-[#07242F] px-3 py-2 rounded-lg">
//               <option>None</option>
//               <option>Festival: Diwali</option>
//               <option>Pollution Spike</option>
//             </select>
//             <select className="bg-[#07242F] px-3 py-2 rounded-lg">
//               <option>Staffing: Baseline</option>
//               <option>+10% Staff</option>
//               <option>-10% Staff</option>
//             </select>
//             <button className="bg-teal-500 px-4 py-2 rounded-lg">Run Simulation</button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#0F2A3C] p-6 rounded-2xl shadow-md">
//         <h3 className="text-teal-300 mb-4">Simulation Results</h3>
//         <ResponsiveContainer width="100%" height={220}>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#1E3A4C" />
//             <XAxis dataKey="day" stroke="#7DD3FC" />
//             <YAxis stroke="#7DD3FC" />
//             <Tooltip contentStyle={{ backgroundColor: '#102C3A', border: 'none' }} />
//             <Line type="monotone" dataKey="inflow" stroke="#2DD4BF" strokeWidth={3} dot={{ r: 3 }} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// function StaffingPlanner() {
//   return (
//     <div className="space-y-6">
//       <div className="bg-[#0F2A3C] rounded-2xl p-6 shadow-md">
//         <h3 className="text-teal-300 mb-3">Weekly Roster</h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-left text-sm">
//             <thead>
//               <tr className="text-gray-300">
//                 <th className="py-2">Name</th>
//                 <th>Mon</th>
//                 <th>Tue</th>
//                 <th>Wed</th>
//                 <th>Thu</th>
//                 <th>Fri</th>
//                 <th>Sat</th>
//                 <th>Sun</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-t border-[#12313f]">
//                 <td className="py-2">Dr. A</td>
//                 <td>Day</td>
//                 <td>Night</td>
//                 <td>Off</td>
//                 <td>Day</td>
//                 <td>Day</td>
//                 <td>Night</td>
//                 <td>Off</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="flex gap-3 mt-4">
//           <button className="bg-teal-500 px-4 py-2 rounded-lg">Accept AI Plan</button>
//           <button className="bg-transparent border border-gray-600 px-4 py-2 rounded-lg">Edit Manually</button>
//           <button className="bg-teal-700 px-4 py-2 rounded-lg">Publish</button>
//         </div>
//       </div>

//       <div className="bg-[#0F2A3C] p-6 rounded-2xl shadow-md">
//         <h3 className="text-teal-300 mb-2">On-call Staff</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <div className="p-3 rounded-lg bg-[#072A35]">Nurse - Available</div>
//           <div className="p-3 rounded-lg bg-[#072A35]">Paramedic - On-call</div>
//           <div className="p-3 rounded-lg bg-[#072A35]">Surgeon - Unavailable</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function SupplyInventory() {
//   return (
//     <div className="space-y-6">
//       <div className="bg-[#0F2A3C] p-6 rounded-2xl shadow-md">
//         <h3 className="text-teal-300 mb-3">Consumables</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="p-4 rounded-lg bg-[#072A35]">
//             <div className="text-sm text-gray-300">Oxygen Cylinders</div>
//             <div className="text-2xl font-bold">24</div>
//             <div className="text-xs text-gray-400 mt-1">Threshold: 20</div>
//           </div>
//           <div className="p-4 rounded-lg bg-[#072A35]">
//             <div className="text-sm text-gray-300">PPE Packs</div>
//             <div className="text-2xl font-bold">180</div>
//             <div className="text-xs text-gray-400 mt-1">Threshold: 150</div>
//           </div>
//           <div className="p-4 rounded-lg bg-[#072A35]">
//             <div className="text-sm text-gray-300">Medicines</div>
//             <div className="text-2xl font-bold">540</div>
//             <div className="text-xs text-gray-400 mt-1">Threshold: 300</div>
//           </div>
//         </div>

//         <div className="mt-4 flex gap-3">
//           <button className="bg-teal-500 px-4 py-2 rounded-lg">Auto-Generate Reorder</button>
//           <button className="bg-transparent border border-gray-600 px-4 py-2 rounded-lg">Export CSV</button>
//         </div>
//       </div>

//       <div className="bg-[#0F2A3C] p-6 rounded-2xl shadow-md">
//         <h3 className="text-teal-300 mb-3">Critical Items</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="p-4 rounded-lg bg-[#072A35]">Item A - 3 left</div>
//           <div className="p-4 rounded-lg bg-[#072A35]">Item B - 1 left</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AlertsNotifications() {
//   return (
//     <div className="space-y-6">
//       <div className="bg-[#0F2A3C] p-6 rounded-2xl shadow-md">
//         <h3 className="text-teal-300 mb-3">Active Alerts</h3>
//         <div className="space-y-3">
//           <div className="p-3 rounded-lg bg-[#072A35] border-l-4 border-red-500">Predicted surge — Friday</div>
//           <div className="p-3 rounded-lg bg-[#072A35] border-l-4 border-yellow-400">Air pollution spike — Downtown</div>
//         </div>

//         <div className="mt-4">
//           <h4 className="text-gray-300 mb-2">Notification Channels</h4>
//           <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> SMS</label>
//           <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Email</label>
//           <label className="flex items-center gap-2"><input type="checkbox" /> App Push</label>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AdvisoriesPublic() {
//   return (
//     <div className="space-y-6">
//       <div className="bg-[#0F2A3C] p-6 rounded-2xl shadow-md">
//         <h3 className="text-teal-300 mb-3">Advisory Templates</h3>
//         <textarea className="w-full min-h-[120px] bg-[#07242F] p-3 rounded-lg" defaultValue={"If you have mild symptoms, prefer teleconsultation..."} />
//         <div className="flex gap-3 mt-3">
//           <button className="bg-teal-500 px-4 py-2 rounded-lg">Preview</button>
//           <button className="bg-teal-700 px-4 py-2 rounded-lg">Publish Advisory</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function GeoInsights() {
//   return (
//     <div className="space-y-6">
//       <div className="bg-[#0F2A3C] p-6 rounded-2xl shadow-md">
//         <h3 className="text-teal-300 mb-3">Geo Insights</h3>
//         <div className="h-[520px] rounded-2xl overflow-hidden">
//           <RegionalMap />
//         </div>
//         <div className="mt-3 flex gap-3">
//           <button className="bg-teal-500 px-4 py-2 rounded-lg">Toggle Heatmap</button>
//           <button className="bg-transparent border border-gray-600 px-4 py-2 rounded-lg">Ambulance Availability</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ReportsAnalytics() {
//   return (
//     <div className="space-y-6">
//       <div className="bg-[#0F2A3C] p-6 rounded-2xl shadow-md">
//         <h3 className="text-teal-300 mb-3">Reports & Analytics</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="p-4 rounded-lg bg-[#072A35]">Forecast Accuracy: 91%</div>
//           <div className="p-4 rounded-lg bg-[#072A35]">Utilization: 78%</div>
//           <div className="p-4 rounded-lg bg-[#072A35]">Cost Savings: $12.4k</div>
//         </div>

//         <div className="mt-4">
//           <button className="bg-teal-500 px-4 py-2 rounded-lg">Download Weekly Report</button>
//           <button className="bg-transparent border border-gray-600 px-4 py-2 rounded-lg ml-2">Export PDF</button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function HealthPredictDashboardApp() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
      <div className="min-h-screen bg-gradient-to-b from-[#04131E] to-[#0A1C2C] text-white p-6 font-sans flex gap-6">
        {/* Sidebar */}
        <div className="hidden md:block w-[260px]">
          <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
        </div>

        {/* Mobile sidebar (slide-over) */}
        <div className={`${mobileOpen ? 'block' : 'hidden'} md:hidden absolute z-50 top-4 left-4`}></div>

        {/* Main Content */}
        <div className="flex-1">
          <Topbar onToggleSidebar={() => setMobileOpen((s) => !s)} />

          <div className="flex gap-6">
            {/* On smaller screens show a compact nav */}
            <div className="hidden md:block w-0" />
            <main className="flex-1">
              <PageWrapper>
                <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route path="/forecast-planner" element={<ForecastPlanner />} />
                  <Route path="/staffing-planner" element={<StaffingPlanner />} />
                  <Route path="/supply-inventory" element={<SupplyInventory />} />
                  <Route path="/alerts-notifications" element={<AlertsNotifications />} />
                  <Route path="/advisories-public" element={<AdvisoriesPublic />} />
                  <Route path="/geo-insights" element={<GeoInsights />} />
                  <Route path="/reports-analytics" element={<ReportsAnalytics />} />
                </Routes>
              </PageWrapper>
            </main>
          </div>
        </div>
      </div>
  );
}
