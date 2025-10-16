/* eslint-disable */

import { useState } from "react";
import { motion } from "framer-motion";
import { Package, AlertTriangle, Truck, FilePlus2, Phone, Database } from "lucide-react";

import BackButton from "./BackButton";

export default function SupplyInventory() {
  const [inventory, setInventory] = useState([
    { id: 1, item: "Oxygen Cylinders", stock: 120, daysCover: 5, reorderThreshold: 100, supplier: "MedAir Supplies", contact: "+91 9810012345" },
    { id: 2, item: "PPE Kits", stock: 45, daysCover: 2, reorderThreshold: 60, supplier: "SafeGuard Pvt Ltd", contact: "+91 9988776655" },
    { id: 3, item: "Paracetamol 500mg", stock: 800, daysCover: 10, reorderThreshold: 500, supplier: "HealthPharma", contact: "+91 9876501234" },
    { id: 4, item: "N95 Masks", stock: 200, daysCover: 3, reorderThreshold: 300, supplier: "BreatheEZ", contact: "+91 9823456789" },
  ]);

  const aiReorders = [
    { item: "PPE Kits", qty: 150, urgency: "High" },
    { item: "N95 Masks", qty: 100, urgency: "Medium" },
    { item: "Oxygen Cylinders", qty: 80, urgency: "Low" },
  ];

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
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 flex items-center gap-2">
            <Package size={28} /> Supply & Inventory Management
          </h1>
          <button className="bg-gradient-to-r from-teal-400 to-cyan-300 text-black px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-teal-900/30">
            + Create Purchase Order
          </button>
        </div>

        {/* Top Section - AI Reorder & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-6"
          >
            <h2 className="text-lg text-teal-300 mb-4 flex items-center gap-2">
              <AlertTriangle size={18} /> AI Reorder Recommendations
            </h2>
            <div className="space-y-4">
              {aiReorders.map((r, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center p-3 rounded-xl border ${
                    r.urgency === "High"
                      ? "border-red-500/60 bg-red-900/20"
                      : r.urgency === "Medium"
                      ? "border-yellow-500/60 bg-yellow-900/20"
                      : "border-teal-500/60 bg-teal-900/20"
                  }`}
                >
                  <div>
                    <p className="text-sm text-gray-200">{r.item}</p>
                    <p className="text-xs text-gray-400">Qty: {r.qty}</p>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      r.urgency === "High"
                        ? "text-red-400"
                        : r.urgency === "Medium"
                        ? "text-yellow-300"
                        : "text-teal-300"
                    }`}
                  >
                    {r.urgency}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Inventory Health Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-6"
          >
            <h2 className="text-lg text-teal-300 mb-4 flex items-center gap-2">
              <Database size={18} /> Current Inventory Overview
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-[#122E46] p-4 rounded-xl border border-[#1E4A5D]">
                <p className="text-gray-400 text-sm">Total Items</p>
                <p className="text-2xl text-teal-300 font-semibold">{inventory.length}</p>
              </div>
              <div className="bg-[#122E46] p-4 rounded-xl border border-[#1E4A5D]">
                <p className="text-gray-400 text-sm">Low Stock Alerts</p>
                <p className="text-2xl text-yellow-300 font-semibold">
                  {inventory.filter((i) => i.stock < i.reorderThreshold).length}
                </p>
              </div>
              <div className="bg-[#122E46] p-4 rounded-xl border border-[#1E4A5D]">
                <p className="text-gray-400 text-sm">Total Stock Units</p>
                <p className="text-2xl text-cyan-300 font-semibold">
                  {inventory.reduce((a, b) => a + b.stock, 0)}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Inventory Table */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-6"
          >
            <h2 className="text-lg text-teal-300 mb-4 flex items-center gap-2">
              <Package size={18} /> Inventory Table
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-gray-300">
                <thead>
                  <tr className="bg-[#122E46] text-gray-400">
                    <th className="py-3 px-4 text-left rounded-l-lg">Item</th>
                    <th className="py-3 px-4 text-center">Stock</th>
                    <th className="py-3 px-4 text-center">Days of Cover</th>
                    <th className="py-3 px-4 text-center">Reorder Threshold</th>
                    <th className="py-3 px-4 text-left rounded-r-lg">Supplier</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((i) => (
                    <tr
                      key={i.id}
                      className={`border-b border-[#1E4A5D] hover:bg-[#14364A] transition ${
                        i.stock < i.reorderThreshold ? "text-yellow-300" : ""
                      }`}
                    >
                      <td className="py-3 px-4">{i.item}</td>
                      <td className="py-3 px-4 text-center">{i.stock}</td>
                      <td className="py-3 px-4 text-center">{i.daysCover}</td>
                      <td className="py-3 px-4 text-center">{i.reorderThreshold}</td>
                      <td className="py-3 px-4">{i.supplier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Supplier & PO Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#102B3E]/70 border border-[#1E4A5D] rounded-2xl p-6 flex flex-col"
          >
            <h2 className="text-lg text-teal-300 mb-4 flex items-center gap-2">
              <Truck size={18} /> Supplier Contacts
            </h2>
            <div className="space-y-4 overflow-y-auto max-h-[400px]">
              {inventory.map((i) => (
                <div
                  key={i.id}
                  className="flex justify-between items-center bg-[#122E46] border border-[#1E4A5D] rounded-xl p-3 hover:border-teal-400 transition"
                >
                  <div>
                    <p className="text-sm text-gray-200">{i.supplier}</p>
                    <p className="text-xs text-gray-400">{i.item}</p>
                  </div>
                  <button className="flex items-center gap-1 bg-gradient-to-r from-teal-400 to-cyan-300 text-black text-xs px-3 py-1 rounded-lg shadow-md hover:scale-105 transition">
                    <Phone size={14} /> Call
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
